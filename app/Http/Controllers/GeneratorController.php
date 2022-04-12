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

        $collection = CandidateResource::collection($candidates);

        // dd(collect($collection));

        return Inertia::render('Generator', [
            'candidates' => $collection
        ]);
    }
}