<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\User;

class CartController extends Controller
{

    public function index()
{
    $user = auth()->user();

    $orders = Cart::with(['product.filestorage'])->where('user_id', $user->id)->get();

    foreach ($orders as $order) {
        foreach ($order->product->filestorage as $file) {
            $file->path = asset('storage/' . $file->path);
        }
    }

    return response()->json(['orders' => $orders]);
}




    public function store(Request $request)
    {
        $request->validate([
            'quantity' => 'integer',
            'user_id' => 'nullable|integer',
            'product_id' => 'integer'
        ]);
        $order = Cart::create($request->all());
        return response()->json(['message' => 'order created successfully', 'order' => $order]);
    }


    public function show($id)
    {
        $order = Cart::find($id);
        return response()->json($order);
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'required|integer',
        ]);

        $order = Cart::find($id);
        if ($order) {
            $order->update($request->all());
            return response()->json(['message' => 'Order updated successfully']);
        } else {
            return response()->json(['message' => 'Order not found'], 404);
        }
    }


    public function destroy($id)
    {
        $order = Cart::find($id);
        if ($order) {
            $order->delete();
            return response()->json(['message' => 'order successfully deleted']);
        } else {
            return response()->json(['message' => 'Order not found'], 404);
        }
    }

    public function addProductToCart($product_id)
{
    $user = auth()->user();
    $product = Cart::where('product_id', $product_id)->where('user_id', $user->id)->first();

    if (!$product) {
        $product = new Cart([
            'quantity' => 1,
            'product_id' => $product_id,
            'user_id' => $user->id
        ]);

        $product->save();

        return response()->json([
            'message' => 'Product successfully added to cart',
            'product' => $product
        ], 201); 
    } else {
        return response()->json([
            'message' => 'Product already exists in the cart'
        ], 409); 
    }
}



    public function checkout(Request $request, $user_id)
    {
        $payment_method = $request->input('payment');
        if ($payment_method === 'credit_card') {

            $request->validate([
                'firstname' => 'required|string',
                'lastname' => 'required|string',
                'credit_card' => 'required|string',
                'CVC' => 'required|string',
            ]);

            // payment logic

            return response()->json(['message' => 'Payment processed successfully']);
        }
    }
}
