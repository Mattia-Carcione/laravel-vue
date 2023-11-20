<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'surname' => 'nullable|string',
            'phone' => 'nullable|string',
            'about' => ['nullable', 'string'],
            'bio' => ['nullable', 'string', 'max:255', 'min:8'],
            'image' => 'nullable|image|mimes:png,jpg,jpeg'
        ];
    }
}
