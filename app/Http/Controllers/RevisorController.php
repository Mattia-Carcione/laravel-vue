<?php

namespace App\Http\Controllers;

use App\Mail\BecomeRevisor;
use App\Models\Announcement;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;

class RevisorController extends Controller
{
    public function becomeRevisor($id)
    {
        $user = User::where('id', $id)->first();
        Mail::to('admin@snaplist.it')->send(new BecomeRevisor($user));

        return response()->json([
            'message' => 'Email sent',
            'status' => 200
        ]);
    }

    public function makeRevisor(User $user)
    {
        Artisan::call('app:makeUserRevisor', ["email" => $user->email]);
        return redirect('http://localhost:5173')
            ->with('message', 'User ' . $user->name . ' is now a Revisor');
    }

    public function getMessage()
    {
        $message = session('message');

        return response()->json(['message' => $message]);
    }


    public function toBeRevisioned()
    {
        $toBeRevsioned = Announcement::with('user', 'category')->where('is_accepted', null)->first();

        return response()->json([
            'data' => $toBeRevsioned,
            'status' => 200
        ]);
    }

    public function accept(Announcement $announcement)
    {
        $announcement->setAccepted(true);

        return response()->json([
            'message' => 'Announcement accepted',
            'status' => 200
        ]);
    }

    public function reject(Announcement $announcement)
    {
        $announcement->setAccepted(false);

        return response()->json([
            'message' => 'Announcement rejected',
            'status' => 200
        ]);
    }
}
