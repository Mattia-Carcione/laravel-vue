<?php

use App\Http\Controllers\RevisorController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('emails.become-revisor', ['user' => User::where('email', 'test@example.com')->first()]);
});

// Make Revisor Routes
Route::get('make/revisor/{user}', [RevisorController::class, 'makeRevisor'])->name('makeRevisor');