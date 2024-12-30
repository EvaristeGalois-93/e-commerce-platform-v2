<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FilestorageProduct extends Model
{
    use HasFactory;
    protected $table = 'filestorage_product';
    protected $fillable = [
        'product_id',
        'filestorage_id',
    ];

    
}
