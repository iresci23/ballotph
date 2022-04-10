<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PositionCandidate;
use Illuminate\Http\Request;

/**
 * Class PositionCandidateController
 * @package App\Http\Controllers
 */
class PositionCandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $positionCandidates = PositionCandidate::paginate();

        return view('position-candidate.index', compact('positionCandidates'))
            ->with('i', (request()->input('page', 1) - 1) * $positionCandidates->perPage());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $positionCandidate = new PositionCandidate();
        return view('position-candidate.create', compact('positionCandidate'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(PositionCandidate::$rules);

        $positionCandidate = PositionCandidate::create($request->all());

        return redirect()->route('position-candidates.index')
            ->with('success', 'PositionCandidate created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $positionCandidate = PositionCandidate::find($id);

        return view('position-candidate.show', compact('positionCandidate'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $positionCandidate = PositionCandidate::find($id);

        return view('position-candidate.edit', compact('positionCandidate'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  PositionCandidate $positionCandidate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PositionCandidate $positionCandidate)
    {
        request()->validate(PositionCandidate::$rules);

        $positionCandidate->update($request->all());

        return redirect()->route('position-candidates.index')
            ->with('success', 'PositionCandidate updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $positionCandidate = PositionCandidate::find($id)->delete();

        return redirect()->route('position-candidates.index')
            ->with('success', 'PositionCandidate deleted successfully');
    }
}
