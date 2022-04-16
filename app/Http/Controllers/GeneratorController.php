<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Candidate;
use App\Http\Resources\CandidateResource;
use Inertia\Inertia;

class GeneratorController extends Controller
{
    public function show(Request $request)
    {
        // $positions = ['president', 'vice_president', 'senator', 'partylist'];
        $positions = ['president'];

        $candidates = Candidate::position($positions)->get();

        $sorted = $candidates->sortBy('current_position.pivot.ballot_number');

        $collection = CandidateResource::collection($sorted);

        return Inertia::render('Generator', [
            'candidates' => $collection
        ]);
    }

    public function getCandidates(Request $request)
    {
        // $positions = ['president', 'vice_president', 'senator', 'partylist'];
        $position = $request->input('position');
        // $locality_id = $request->input('locality_id');

        $candidates = Candidate::position([$position])->get();

        $sorted = $candidates->sortBy('current_position.pivot.ballot_number');

        $collection = CandidateResource::collection($sorted);

        return $collection;
    }
}