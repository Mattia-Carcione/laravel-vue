<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;

class RevisorController extends Controller
{
    public function toBeRevisioned() {
        $toBeRevsioned = Announcement::with('user', 'category')->where('is_accepted', null)->first();

        return response()->json([
            'data' => $toBeRevsioned,
            'status' => 200
        ]);
    }

    public function accept(Announcement $announcement) {
        $announcement->setAccepted(true);

        return response()->json([
            'message' => 'Announcement accepted',
            'status' => 200
        ]);
    }

    public function reject(Announcement $announcement) {
        $announcement->setAccepted(false);

        return response()->json([
            'message' => 'Announcement rejected',
            'status' => 200
        ]);
    }
}
