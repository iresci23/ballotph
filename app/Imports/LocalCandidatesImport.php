<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithStartRow;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Str;

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
            
            // loop through each cells in a row
            for($i = 0; $i <= 56; $i++) {
                if (isset($row[$i]) && $row[$i]) {
                    // push cells that holds valid data
                    if (!Str::startsWith($row[0], "FOR PARTY LIST CANDIDATES")) {
                        array_push($data, $row[$i]);
                    }
                }
            }
            // do not continue loop if we reach PARTY LIST section
            if (Str::startsWith($row[0], "FOR PARTY LIST CANDIDATES")) {
                break;
            }
        }

        $dataRows = array_filter($data); //remove null values

        $grouped = [];
        // format and group by position
        foreach ($dataRows as $row) {

            if (!preg_match('/^\d/', $row)) {
                $title = trim(strtok($row, '/'));

                $vote_limit_number = 0;
                //clean up vote limit row to get the correct limit number
                $vote_limit_rows = preg_split("/\r\n|\n|\r/", $row); //split when title has multiple lines

                //get only the first line
                if (isset($vote_limit_rows[0])) {
                    $vote_limit_number = abs((int) filter_var($vote_limit_rows[0], FILTER_SANITIZE_NUMBER_INT));
                }
                
                $grouped[$title] = [
                    // get the number and get only the first occurence
                    'vote_limit' => $vote_limit_number,
                    // 'vote_limit_title' => preg_split("/\r\n|\n|\r/", $row),
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
dd($grouped);
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
                
                if ($position) {

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
                        $candidate = Candidate::updateOrCreate(['name' => $item['name'], 'locality_id' => $this->locality->id]);

                        // map the position of candidates
                        PositionCandidate::updateOrCreate([
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
                }  else {
                    dd($key, $position);
                }
    
            }
        }

        // dump($grouped);

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
