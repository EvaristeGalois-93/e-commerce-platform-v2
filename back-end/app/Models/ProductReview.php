<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductReview extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $keyType = 'unsignedBigInteger';
    public $incrementing = true;

    protected $fillable = [
        'rating',
        'review',
        'product_id',
        'user_id',
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

