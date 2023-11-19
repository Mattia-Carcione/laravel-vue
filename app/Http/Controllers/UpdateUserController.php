<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;

class UpdateUserController extends Controller
{
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validate([
            'surname' => $request->surname,
            'phone' => $request->phone,
            'address' => $request->address,
            'about' => $request->about
        ]));

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user,
            'status' => 'success'
        ]);
    }
}
