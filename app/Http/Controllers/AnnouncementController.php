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
            ->paginate(12);

        return response()->json([
            'data' => $announcements,
            'status' => 'success'
        ]);
    }

    public function getAnnouncementByCategory($categoryName)
    {
        $category = Category::where('name', $categoryName)->value('id');

        $announcements = Announcement::with(['user', 'category'])
            ->where('category_id', $category)
            ->orderByDesc('created_at')
            ->paginate(12);

        return response()->json([
            'data' => $announcements,
            'status' => 'success'
        ]);
    }

    public function show(Announcement $announcement){
        return response()->json([
            'data' => $announcement::with(['user', 'category']),
            'status' => 'success'
        ]);
    }
}
