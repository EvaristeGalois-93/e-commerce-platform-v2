<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FileStorage extends Model
{
    use HasFactory;

    protected $table = 'filestorage';

    protected $fillable = [
        'path',
        'name',
        'extension',
    ];

    // Relazioni
    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'filestorage_product');
    }
}
