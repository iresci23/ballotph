<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function home(Request $request)
    {
        return Inertia::render('Home');
    }

    public function privacy(Request $request)
    {
        return Inertia::render('Privacy');
    }
}