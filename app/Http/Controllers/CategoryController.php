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
}
