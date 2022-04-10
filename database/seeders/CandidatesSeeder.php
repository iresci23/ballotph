<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CandidatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $candidates = collect(config('2022election.candidates'));

        $candidates->each(function ($item, $key) {

            // insert into positions if it does not exists yet
            $position = \App\Models\Position::firstOrCreate(['slug' => $item['position']],
                [
                    'name' => ucwords(str_replace('_',' ',$item['position'])),
                    'type' => in_array($item['position'], ['president','vice_president','senator','partylist']) ? 'national' : 'local',
                    'voting_limit' => 1,
                    'order' => 1
                ]
            );

            // insert the candidates
            $candidate = \App\Models\Candidate::firstOrCreate(['name' => $item['name']],
                [
                    'profile_url' => $item['profile_url']
                ]
            );

            // map the position of candidates
            $positionCandidate = \App\Models\PositionCandidate::firstOrCreate([
                    'election_year' => 2022,
                    'position_id' => $position->id,
                    'candidate_id' => $candidate->id
                ],
                [
                    'ballot_number' => $item['ballot_number'],
                    'party' => $item['party'],
                ]
            );

        });
    }
}
