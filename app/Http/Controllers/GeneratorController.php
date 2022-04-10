<?php
namespace App\Http\Controllers;

use App\Models\PositionCandidate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneratorController extends Controller
{
    public function show(Request $request)
    {

        // get lists of presidents
        // 
        return Inertia::render('Generator');
    }

    public function getCandidates(Request $request)
    {
        $position = $request->input('position');
        
        $candidatesByPosition = PositionCandidate::position('president')->get();

        response()->json($candidatesByPosition);
    }
}