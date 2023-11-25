<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAnnouncementRequest;
use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Models\Category;

class AnnouncementController extends Controller
{
    public function getAnnouncementCategories()
    {
        return response()->json([
            'data' => Category::all(),
            'status' => 'success'
        ]);
    }

    public function store(StoreAnnouncementRequest $request)
    {
        Announcement::create([
            'title' => $request->title,
            'body' => $request->body,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'user_id' => $request->user_id
        ]);

        return response()->json([
            'message' => 'Announcement created successfully',
            'status' => 'success',
        ]);
    }

    public function getAnnouncements()
    {
        $announcements = Announcement::with(['user', 'category'])
            ->orderByDesc('created_at')
            ->get();
            // ->reject(function ($announcement) {
            //     // Filtra via gli annunci con dati vuoti o nulli
            //     return empty($announcement->user) || empty($announcement->category);
            // });
        return response()->json([
            'data' => $announcements,
            'status' => 'success'
        ]);
    }
}
