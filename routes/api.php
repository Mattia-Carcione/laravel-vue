<?php

use App\Http\Controllers\UpdateUserController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\RevisorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // API User CRUD Routes
    Route::put('/user-update/{user}', [UpdateUserController::class, 'update']);
    Route::post('/user-update-image/{user}', [UpdateUserController::class, 'updateImage']);
    Route::delete('/user-delete-image/{user}', [UpdateUserController::class, 'destroyImage']);

    // API Announcement CRUD Routes
    Route::post('/announcement-create', [AnnouncementController::class, 'store']);
    Route::put('/announcement-update', [AnnouncementController::class, 'update']);
    Route::delete('/announcement-delete', [AnnouncementController::class, 'destroy']);

    // API Revisor Accept/Reject Routes
    Route::patch('/announcement-accept/{announcement}', [RevisorController::class, 'accept']);
    Route::patch('/announcement-reject/{announcement}', [RevisorController::class, 'reject']);
});

// API Fetch Categories
Route::get('/announcement/categories', [CategoryController::class, 'index']);
Route::get('/category/{slug}', [CategoryController::class, 'getAnnouncementByCategory']);

// API Fetch Announcements
Route::get('/announcements', [AnnouncementController::class, 'index']);
Route::get('/announcements/{slug}', [AnnouncementController::class, 'show']);

// API Announcements to be revisioned
Route::get('/announcements-to-be-revisioned', [RevisorController::class, 'toBeRevisioned']);