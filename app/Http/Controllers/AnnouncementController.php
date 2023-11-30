<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAnnouncementRequest;
use Illuminate\Http\Request;
use App\Models\Announcement;
use Illuminate\Support\Str;

class AnnouncementController extends Controller
{
    public function store(StoreAnnouncementRequest $request)
    {
        Announcement::create([
            'title' => $request->title,
            'body' => $request->body,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'user_id' => $request->user_id,
            'slug' => Str::slug($request->title, '-'),
        ]);

        return response()->json([
            'message' => 'Announcement created successfully',
            'status' => 'success',
        ]);
    }

    public function index()
    {
        $announcements = Announcement::with(['user', 'category'])
            ->orderByDesc('created_at')
            ->paginate(12);

        return response()->json([
            'data' => $announcements,
            'status' => 'success'
        ]);
    }

    public function show($slug){
        $announcement = Announcement::where('slug', $slug)
        ->with(['user', 'category'])
        ->firstOrFail();

        return response()->json([
            'data' => $announcement,
            'status' => 'success'
        ]);
    }
}
