<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;

class RevisorController extends Controller
{
    public function toBeRevisioned() {
        $toBeRevsioned = Announcement::where('is_accepted', null)->get();

        return response()->json([
            'data' => $toBeRevsioned,
            'status' => 200
        ]);
    }
}
