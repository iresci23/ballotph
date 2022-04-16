<?php

namespace App\Http\Controllers;

use App\Models\Locality;
use Illuminate\Http\Request;

/**
 * Class LocalityController
 * @package App\Http\Controllers
 */
class LocalityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $localities = Locality::paginate();

        return view('locality.index', compact('localities'))
            ->with('i', (request()->input('page', 1) - 1) * $localities->perPage());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $locality = new Locality();
        return view('locality.create', compact('locality'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(Locality::$rules);

        $locality = Locality::create($request->all());

        return redirect()->route('localities.index')
            ->with('success', 'Locality created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $locality = Locality::find($id);

        return view('locality.show', compact('locality'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $locality = Locality::find($id);

        return view('locality.edit', compact('locality'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Locality $locality
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Locality $locality)
    {
        request()->validate(Locality::$rules);

        $locality->update($request->all());

        return redirect()->route('localities.index')
            ->with('success', 'Locality updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $locality = Locality::find($id)->delete();

        return redirect()->route('localities.index')
            ->with('success', 'Locality deleted successfully');
    }
}
