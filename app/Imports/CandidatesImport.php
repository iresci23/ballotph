<?php

namespace App\Imports;

use App\Models\Candidate;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CandidatesImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $ballot_number = $row['ballot_number'];
        $name = $row['name'];
        $profile_url = $row['profile_url'];
        $position = $row['position'];
        $picture = $row['picture'];
        $party = $row['party'];

        // insert into positions if it does not exists yet
        $position = \App\Models\Position::updateOrCreate(['slug' => $position],
            [
                'name' => ucwords(str_replace('_',' ',$position)),
                'type' => in_array($position, ['president','vice_president','senator','partylist']) ? 'national' : 'local',
                'voting_limit' => 1,
                'order' => 1
            ]
        );

        // insert the candidates
        $candidate = \App\Models\Candidate::updateOrCreate(['name' => $name],
            [
                'picture' => $picture ?? null,
                'profile_url' => $profile_url
            ]
        );

        // map the position of candidates
        $positionCandidate = \App\Models\PositionCandidate::updateOrCreate([
                'election_year' => 2022,
                'position_id' => $position->id,
                'candidate_id' => $candidate->id
            ],
            [
                'ballot_number' => $ballot_number,
                'party' => $party,
            ]
        );

        return $candidate;
    }
}
