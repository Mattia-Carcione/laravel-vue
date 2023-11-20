<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'name',
        'email',
        'password',
        'surname',
        'phone',
        'about',
        'bio',
        'path_image',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Delete the image associated with the user.
     *
     * @return void
     *
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     *
     * @see https://laravel.com/docs/9.x/filesystem
     * @see https://laravel.com/docs/9.x/filesystem#deleting-files
     * @see https://laravel.com/docs/9.x/filesystem#deleting-directories
     *
     * @todo Controllare se il file esiste prima di cancellarlo
     */
    
    public function deleteImage()
    {
        if ($this->path_image) {
            if (Storage::exists($this->path_image)) {
                Storage::delete($this->path_image);
            }
            $this->update(['path_image' => null]);
        }
    }
}
