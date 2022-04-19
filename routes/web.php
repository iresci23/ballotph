<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', 'SiteController@home')->name('Site.home');
Route::get('/privacy', 'SiteController@privacy')->name('Site.privacy');
Route::get('/terms', 'SiteController@terms')->name('Site.terms');
Route::get('/generator', 'GeneratorController@show')->name('Generator.show');

Route::prefix('json')->group(function () {
    Route::get('/candidates', 'GeneratorController@getCandidates')->name('json.candidates');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

require __DIR__.'/admin.php';