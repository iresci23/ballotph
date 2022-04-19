<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Candidate;
use App\Models\Locality;
use App\Http\Resources\CandidateResource;
use Inertia\Inertia;

class GeneratorController extends Controller
{
    public function show(Request $request)
    {
        $localities = Locality::get();

        return Inertia::render('Generator', [
            'localities' => $localities
        ]);
    }

    public function getCandidates(Request $request)
    {
        $position = $request->input('position');
        $locality_id = $request->input('locality_id');

        if ($position == 'local_candidates') {

            $positions = ['house_representative', 'governor', 'vice_governor', 'prov_saggunian_member', 'mayor', 'vice_mayor', 'city_saggunian_member'];
            $candidates = Candidate::position($positions, $locality_id)->get();
            
        } else {
            
            $candidates = Candidate::position([$position])->get();
        }

        $sorted = $candidates->sortBy('current_position.pivot.ballot_number');

        $collection = CandidateResource::collection($sorted);

        return response()->json($collection);
    }
}