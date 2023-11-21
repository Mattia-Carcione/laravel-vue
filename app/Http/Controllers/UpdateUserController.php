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
        if ($user->path_image) {
            $user->deleteImage();
        }

        $request->validate([
            'path_image' => ['nullable', 'mimes:png,jpg,jpeg|max:2048']
        ]);

        if ($request->hasFile('path_image')) {
            $image = $request->file('path_image');
            $ext = $image->extension();
            $file = time() . '.' . $ext;
            $image->storeAs('public/storage', $file);
            $user->path_image = $file;
            $user->save();
        }

        return response()->json([
            'message' => 'File Uploaded Successfully',
            'user' => $user,
            'status' => 'success'
        ]);
    }

    public function destroyImage(User $user){
        $user->deleteImage();

        return response()->json([
            'message' => 'File Deleted Successfully',
            'user' => $user,
            'status' => 'success'
        ]);
    }
}
