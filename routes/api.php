<?php

use App\Http\Controllers\UpdateUserController;
use App\Http\Controllers\AnnouncementController;
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
});

// API Fetch Categories
Route::get('/announcement-categories', [AnnouncementController::class, 'getAnnouncementCategories']);

// API Fetch Announcements
Route::get('/announcements', [AnnouncementController::class, 'getAnnouncements']);
Route::get('/announcements/{categoryName}', [AnnouncementController::class, 'getAnnouncementByCategory']);