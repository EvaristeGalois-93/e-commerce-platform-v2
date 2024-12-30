<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $keyType = 'unsignedBigInteger';
    public $incrementing = true;

    protected $fillable = [
        'amount',
        'payment_method',
        'status',
        'order_id',
    ];

    // Relazioni
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}

