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
        $positions = ['president', 'vice_president', 'senator', 'partylist'];

        $candidates = Candidate::position($positions)->get();

        $sorted = $candidates->sortBy('current_position.pivot.ballot_number');

        $collection = CandidateResource::collection($sorted);

        return Inertia::render('Generator', [
            'candidates' => $collection
        ]);
    }
}