<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithStartRow;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;

use App\Models\Candidate;
use App\Models\Position;
use App\Models\Locality;
use App\Models\PositionCandidate;

class LocalCandidatesImport implements ToCollection, WithStartRow
{
    private $locality;

    public function __construct(Locality $locality) 
    {
        $this->locality = $locality;
    }

    public function collection(Collection $rows)
    {
        $data = [];

        /** 
         * Loop through each row in excel and push data to array
         */
        foreach ($rows as $row) {
            $headingTitle = $row[2];
            array_push($data, $row[2]);
            array_push($data, $row[14]);
            array_push($data, $row[26]);
            // do not continue loop if we reach PARTY LIST section
            if ($headingTitle == "PARTY LIST / Vote for 1") {
                break;
            }
        }

        $dataRows = array_filter($data); //remove null values

        $grouped = [];
        // format and group by position
        foreach ($dataRows as $row) {

            if (!preg_match('/^\d/', $row)) {
                $title = trim(strtok($row, '/'));
                $grouped[$title] = [
                    'vote_limit' => abs((int) filter_var($row, FILTER_SANITIZE_NUMBER_INT)),
                    'candidates' => []
                ];
            }
            
            if (isset($title) && preg_match('/^\d/', $row)) {
                $grouped[$title]['candidates'][] = [
                    'text' => $row,
                    'ballot_number' => strtok($row, '.'),
                    'name' => (preg_match('/(?<=\. )(.*?)(?= \()/', $row, $match) == 1) ? $match[1] : $row,
                    'party' => (preg_match('/(?<=\()(.*?)(?=\))/', $row, $match) == 1) ? $match[1] : "",
                ];
            }
        }

        // insert the data
        $positionMapping = [
            'MEMBER, HOUSE OF REPRESENTATIVES' => 'house_representative',
            'PROVINCIAL GOVERNOR' => 'governor',
            'PROVINCIAL VICE-GOVERNOR' => 'vice_governor',
            'MEMBER, SANGGUNIANG PANLALAWIGAN' => 'prov_saggunian_member',
            'MAYOR' => 'mayor',
            'VICE-MAYOR' => 'vice_mayor',
            'MEMBER, SANGGUNIANG PANLUNGSOD' => 'city_saggunian_member',
            'MEMBER, SANGGUNIANG BAYAN' => 'city_saggunian_member',
            'MEMBER, SANGUNIANG BAYAN' => 'city_saggunian_member',
        ];

        foreach ($grouped as $key => $group) {
            if (in_array($key, array_keys($positionMapping))) {

                // get position
                $position = Position::slug($positionMapping[$key])->first();
            
                // update the voting limit of saggunian for each locality
                if ($position->slug == 'prov_saggunian_member') {
                    $this->locality->prov_saggunian_member_limit = $group['vote_limit'];
                }
                if ($position->slug == 'city_saggunian_member') {
                    $this->locality->city_saggunian_member_limit = $group['vote_limit'];
                }

                $this->locality->save();

                foreach ($group['candidates'] as $item) {
                    // dump($item);
                    // insert the candidates
                    $candidate = Candidate::updateOrCreate(['name' => $item['name']]);

                    // map the position of candidates
                    $positionCandidate = PositionCandidate::updateOrCreate([
                            'election_year' => 2022,
                            'position_id' => $position->id,
                            'candidate_id' => $candidate->id,
                            'locality_id' => $this->locality->id,
                        ],
                        [
                            'ballot_number' => $item['ballot_number'],
                            'party' => $item['party']
                        ]
                    );
                    // dump($positionCandidate->id);
                }
    
                // dump($group);
            }
        }

        return true;
    }
    
    /**
    * @return int
    */
    public function startRow(): int
    {
        return 36;
    }
}
