<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;

class UpdateUserController extends Controller
{
    public function update(UpdateUserRequest $request, User $user)
    {
        $validatedData = $request->validated();

        $user->update([
            'name' => $validatedData['name'],
            'surname' => $validatedData['surname'],
            'phone' => $validatedData['phone'],
            'about' => $validatedData['about'],
            'bio' => $validatedData['bio'],
        ]);

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user,
            'status' => 'success'
        ]);
    }
}
