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

    public function updateImage(Request $request, User $user)
    {
        $request->validate([
            'path_image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $path_image = $user->path_image;
        if ($request->hasFile('path_image') && $request->file('path_image')->isValid()) {
            $path_name = $request->file('path_image')->getClientOriginalName();
            $path_image = $request->file('path_image')->storeAs('/public/storage', $path_name);
        }

        $user->update([
            'name' => $user->name,
            'path_image' => $path_image
        ]);

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user,
            'status' => 'success'
        ]);
    }
}
