<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;

class UpdateUserController extends Controller
{
    public function update(UpdateUserRequest $request, User $user)
    {
        $request->validated();

        $user->update([
            'name' => $request->name,
            'surname' => $request->surname,
            'phone' => $request->phone,
            'about' => $request->about,
            'bio' => $request->bio,
        ]);

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user,
            'status' => 'success'
        ]);
    }
}
