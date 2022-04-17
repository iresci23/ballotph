<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

use App\Imports\CandidatesImport;
use App\Imports\LocalCandidatesImport;

class CandidatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $candidates = collect(config('2022election.candidates'));

        $candidates->each(function ($item, $key) {

            // insert into positions if it does not exists yet
            $position = \App\Models\Position::updateOrCreate(['slug' => $item['position']],
                [
                    'name' => ucwords(str_replace('_',' ',$item['position'])),
                    'type' => in_array($item['position'], ['president','vice_president','senator','partylist']) ? 'national' : 'local',
                    'voting_limit' => 1,
                    'order' => 1
                ]
            );

            // insert the candidates
            $candidate = \App\Models\Candidate::updateOrCreate(['name' => $item['name']],
                [
                    'picture' => $item['picture'] ?? null,
                    'profile_url' => $item['profile_url']
                ]
            );

            // map the position of candidates
            $positionCandidate = \App\Models\PositionCandidate::updateOrCreate([
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


        // Import candidates from excel file
        Excel::import(new CandidatesImport, storage_path('candidates.xlsx'));

        // Import local candidates from `importables` folder
        $files = Storage::disk('importables')->files();

        (collect($files))->each(function ($file, $key) {
            // Split file name by "_", format REGION_PROVINCE_CITYDIST, NCR is special with format NCR_CITY_DIST
            $locationInfo = explode('_', Str::of($file)->basename('.xlsx'));

            $region = $locationInfo[0] ?? null;
            $province = $locationInfo[1] ?? null;
            $citydist = $locationInfo[2] ?? null;

            // Insert locale info
            $locality = \App\Models\Locality::updateOrCreate(
                [
                    'region' => $region,
                    'province' => $province,
                    'city_dist' => str_replace('-', ' ', $citydist)
                ],
                [
                    'prov_saggunian_member_limit' => 0,
                    'city_saggunian_member_limit' => 0,
                ]
            );

            // import
            Excel::import(new LocalCandidatesImport($locality), storage_path('/app/importables/'.$file));
        });

        echo "Imported data from ".count($files). " excel files.\n";
    }
}
