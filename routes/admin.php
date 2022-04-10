<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::resource('positions', 'Admin\PositionController');
    Route::resource('candidates', 'Admin\CandidateController');
});