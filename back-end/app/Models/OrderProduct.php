<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OrderProduct extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $keyType = 'unsignedBigInteger';
    public $incrementing = true;

    protected $fillable = [
        'quantity',
        'order_id',
        'product_id',
    ];

    // Relazioni
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

