<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        'status',
        'user_id',
        'category_id',
    ];

    public function cart()
    {
        return $this->hasMany(Cart::class, 'product_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_products')->withPivot('quantity');
    }

    public function reviews()
    {
        return $this->hasMany(ProductReview::class);
    }

    public function categories()
{
    return $this->belongsToMany(Category::class, 'category_products', 'product_id', 'category_id');
}


    public function filestorage()
    {
        return $this->belongsToMany(Filestorage::class, 'filestorage_product', 'product_id', 'filestorage_id');
    }

    public function wishlists()
    {
        return $this->hasMany(Wishlist::class);
    }


}
