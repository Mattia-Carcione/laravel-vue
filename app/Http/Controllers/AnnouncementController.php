<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAnnouncementRequest;
use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Models\Category;

class AnnouncementController extends Controller
{
    public function getAnnouncementCategories(){
        return response()->json([
            'data' => Category::all(),
            'status' => 'success'
        ]);
    }

    public function store (StoreAnnouncementRequest $request){
        Announcement::create([
            'title' => $request->title,
            'body' => $request->body,
            'price' => $request->price
        ]);

        return response()->json([
            'message' => 'Announcement created successfully',
            'status' => 'success',
            'data' => Announcement::all()
        ]);
    }
}
