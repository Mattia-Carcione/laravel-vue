<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => Category::all(),
            'status' => 'success'
        ]);
    }

    public function getAnnouncementByCategory($slug)
    {
        $category = Category::where('slug', $slug)->value('id');

        $announcements = Announcement::with(['user', 'category'])
            ->where('category_id', $category)
            ->where('is_accepted', true)
            ->orderByDesc('created_at')
            ->paginate(12);

        return response()->json([
            'data' => $announcements,
            'status' => 'success'
        ]);
    }
}
