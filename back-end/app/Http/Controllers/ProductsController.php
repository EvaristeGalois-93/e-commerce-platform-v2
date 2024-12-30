<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\FileStorage;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\Wishlist;
use Illuminate\Support\Facades\Validator;


class ProductsController extends Controller
{

    public function index()
{
    $products = Product::with(['categories', 'filestorage'])->paginate(12); 

    foreach ($products as $product) {
        if ($product->filestorage) {
            foreach ($product->filestorage as $file) {
                $file->path = asset('storage/' . $file->path);
            }
        }
    }

    return response()->json($products);
}
    

public function store(ProductRequest $request)
{
    $user = auth()->user();

    if ($user->role != 'administrator') {
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    $data = $request->all();

    $product = Product::create([
        'name' => $data['name'],
        'description' => $data['description'],
        'price' => $data['price'],
        'quantity' => $data['quantity'],
        'status' => $data['status'],
        'user_id' => $user->id,
    ]);

    // inizializzo l'array di id delle immagini
    $imageIds = [];
    if ($request->hasFile('product_images')) {
        foreach ($request->file('product_images') as $image) {
            $file = FilestorageController::storeFile($request->merge(['product_img' => $image]), 'images', 'product_img', 'product');
            if ($file) {
                $imageIds[] = $file->id;
            }
        }
    }
        if (!empty($imageIds)) {
        $product->filestorage()->attach($imageIds);
    }

    if (isset($data['category_id']) && is_array($data['category_id'])) {
        $product->categories()->attach($data['category_id']);
    }

    return response()->json([
        'message' => 'Product created successfully',
        'product' => $product->load('filestorage', 'categories')
    ], 201);
}


public function show($id)
{
    $product = Product::with(['categories', 'filestorage'])->find($id);

    if (!$product) {
        return response()->json(['message' => 'Product not found'], 404);
    }

    foreach ($product->filestorage as $file) {
        $file->path = asset('storage/' . $file->path); 
    }

    return response()->json($product);
}


    public function update(Request $request, $id)
    {}


    public function destroy($id)
{
    $product = Product::find($id);

    if ($product) {
        $product->delete();
        return response()->json(['message' => 'Product successfully deleted'], 200);
    }

    return response()->json(['message' => 'Product not found'], 404);
}

    public function getCategories(){

        $categories = Category::whereNull('parent_id')->get();

        return response()->json($categories);
    }
    

    public function filter_search(ProductRequest $request)
{
    $data = $request->all();

    $query = Product::with(['categories', 'filestorage']); 

    // Filtro per categoria solo se category_id è presente e diverso da -1
    if (isset($data['category_id']) && $data['category_id'] != -1) {
        $query->whereHas('categories', function ($query) use ($data) {
            $query->where('category_id', $data['category_id']);
        });
    }

    if (isset($data['filter_search'])) {
        $query->where('name', 'like', '%' . $data['filter_search'] . '%');
    }

    $products = $query->paginate(10); 

    foreach ($products as $product) {
        if ($product->filestorage) {
            foreach ($product->filestorage as $file) {
                $file->path = asset('storage/' . $file->path); 
            }
        }
    }

    return response()->json($products);
}

    public function add_to_wishlist($product_id)
    {
        $product = Product::find($product_id);
        $user = auth()->user();
        $wishlist = Wishlist::where('user_id', $user->id)->where('product_id', $product->id)->first();

        if (!$wishlist) {
            $wishlist = new Wishlist();
            $wishlist->user_id = $user->id;
            $wishlist->product_id = $product->id;
            $wishlist->save();
            
            $wishlist = Wishlist::with(['product.filestorage', 'product.categories'])
                ->find($wishlist->id);

            return response()->json([
                'message' => 'Product added to wishlist', 
                'wishlist' => $wishlist
            ], 200);
        } else {
            return response()->json(['message' => 'Product already exists in the wishlist'], 409);
        }
    }

    public function remove_from_wishlist($product_id)
    {
        $user = auth()->user();
        $wishlist = Wishlist::where('user_id', $user->id)->where('product_id', $product_id)->first();

        if ($wishlist) {
            $wishlist->delete();
            return response()->json(['message' => 'Product removed from wishlist'], 200);
        } else {
            return response()->json(['message' => 'Product not found in the wishlist'], 404);
        }
    }

    public function get_wishlist(){
        $user = auth()->user();
        $wishlists = Wishlist::where('user_id', $user->id)->with(['product.filestorage', 'product.categories'])->get();
        
        foreach ($wishlists as $wishlist) {
            if ($wishlist->product->filestorage) {
                foreach ($wishlist->product->filestorage as $file) {
                    $file->path = asset('storage/' . $file->path);
                }
            }
        }
        return response()->json($wishlists, 200);
    }
}
