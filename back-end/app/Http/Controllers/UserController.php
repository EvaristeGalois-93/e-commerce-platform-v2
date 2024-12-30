<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\ShippingAddress;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }


    public function store(Request $request)
    {}

    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'firstname' => 'nullable|string',
            'lastname' => 'nullable|string',
            'address' => 'nullable|string',
            'CAP' => 'nullable|string',
            'province' => 'nullable|string',
            'country' => 'nullable|string',
            'credit_card' => 'nullable|string',
            'CVC_card' => 'nullable|string',
        ]);

        $user = User::find($id);
        $user->update($request->all());

        return response()->json(['message' => 'user updated successfully', 'user' => $user]);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json(['message' => 'user successfully deleted']);
    }

    public function saveShippingAddress(UserRequest $request)
    {
        $data = $request->all();
        $user_id = Auth::user()->id;

        $shippingAddress = ShippingAddress::where('user_id', $user_id)->first();

        if ($shippingAddress) {
            return response()->json(['message' => 'shipping address already exists'], 409);
            // $shippingAddress->update($data);
        } else {
            $shippingAddress = ShippingAddress::create([
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'address_line1' => $data['address_line1'],
                'zip_code' => $data['zip_code'],
                'country' => $data['country'],
                'city' => $data['city'],
                'province' => $data['province'],
                'phone_number' => $data['phone_number'],
                'user_id' => $user_id,
            ]);
        }

        return response()->json(['message' => 'shipping address saved successfully', 'data' => $data]);
    }
}
