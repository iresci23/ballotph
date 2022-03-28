<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneratorController extends Controller
{
    public function show(Request $request)
    {
        return Inertia::render('Generator');
    }
}