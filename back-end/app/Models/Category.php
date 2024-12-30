<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'name',
        'parent_id',
    ];

    // Relazioni
    public function products()
    {
        return $this->belongsToMany(Product::class, 'category_products', 'product_id', 'category_id');
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }
}

