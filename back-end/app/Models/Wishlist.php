<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Wishlist extends Model
{
    use HasFactory;

    protected $table = 'wishlists';

    protected $primaryKey = 'id';
    protected $keyType = 'integer';
    public $incrementing = true;

    protected $fillable = [
        'user_id',
        'product_id',
    ];

    // Relazioni
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

