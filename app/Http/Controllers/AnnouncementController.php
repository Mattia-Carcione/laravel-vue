<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAnnouncementRequest;
use App\Http\Requests\UpdateAnnouncementRequest;
use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Models\User;
use Illuminate\Support\Str;

class AnnouncementController extends Controller
{
    public function store(StoreAnnouncementRequest $request)
    {
        Announcement::create([
            'title' => $request->title,
            'about' => $request->about,
            'body' => $request->body,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'user_id' => $request->user_id,
            'slug' => Str::slug($request->title . '-' . Str::random(7)),
        ]);

        return response()->json([
            'message' => 'Announcement created successfully',
            'status' => 'success',
        ]);
    }

    public function index(User $user = null)
    {
        if ($user) {
            $announcements = Announcement::where('user_id', $user->id)
                ->with(['user', 'category'])
                ->orderByDesc('created_at')
                ->paginate(12);
        } else {
            $announcements = Announcement::with(['user', 'category'])
                ->where('is_accepted', true)
                ->orderByDesc('created_at')
                ->paginate(12);
        }

        return response()->json([
            'data' => $announcements,
            'status' => 'success'
        ]);
    }

    public function show($slug){
        $announcement = Announcement::where('slug', $slug)
        ->with(['user', 'category'])
        ->where('is_accepted', true)
        ->firstOrFail();

        return response()->json([
            'data' => $announcement,
            'status' => 'success'
        ]);
    }

    public function update(UpdateAnnouncementRequest $request) {
        $announcement = Announcement::where('id', $request->id)->firstOrFail();


        $announcement->update([
            'title' => $request->title,
            'about' => $request->about,
            'body' => $request->body,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'slug' => Str::slug($request->title . '-' . Str::random(7)),
        ]);

        $announcement->setAccepted(null);

        return response()->json([
            'message' => 'Announcement updated successfully',
            'status' => 'success',
            'data' => $announcement::with(['user', 'category']),
        ]);
    }

    public function destroy(Request $request) {
        $announcement = Announcement::where('id', $request->id)->with(['user', 'category'])->firstOrFail();
        $announcement->category()->dissociate();
        $announcement->user()->dissociate();
        $announcement->delete();

        return response()->json([
            'message' => 'Announcement deleted successfully',
            'status' => 'success',
        ]);
    }
}
