<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;






class AuthController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login', 'register', 'logout']]);
    // }

    public function register(AuthRequest $request)
{
    $data = $request->all();

    if (User::where('email', $data['email'])->exists()) {
        return response()->json(['message' => 'User already exists'], 409);
    }

    $formattedDate = Carbon::parse($data['birth_date'])->format('Y-m-d');

    $user = User::create([
        'firstname' => $data['firstname'],
        'lastname' => $data['lastname'],
        'birth_date' => $formattedDate,
        'gender' => $data['gender'],
        'phone_number' => $data['phone_number'],
        'country' => $data['country'],
        'email' => $data['email'],
        'password' => Hash::make($data['password']),
    ]);

    if($data['isVendor'] == true){
        $user->attachRole('administrator');
    } else $user->attachRole('user');

    $roles = $user->roles()->get();

    $user->makeHidden(['credit_card', 'CVC_card', 'filestorage_id']);

    return response()->json(['message' => 'User created successfully', 'user'=> $user, 'roles' => $roles], 201);
}



    public function login(AuthRequest $request)
    {

        try {

            $credentials = $request->all();

            if (!$token = Auth::attempt($credentials)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Credenziali errate',
                ], 400);
            }

            $user = Auth::user();
            $roles = $user->roles()->get(); 

            info($roles);

            $user->makeHidden(['credit_card', 'CVC_card', 'filestorage_id']);



            return response()->json([
                'status' => 'success',
                'user' => $user,
                'roles' => $roles,
                'authorization' => [
                    'token' => $token,
                    'type' => 'bearer',
                ],
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Errore del server: ' . $e->getMessage(),
            ], 500);
        }
    }

    public static function changePassword(Request $request)
    {
        $token = JWTAuth::parseToken();
        $user = $token->authenticate();
        $credentials = $request->only(['current_password', 'new_password', 'confirm_password']);

        // Validazione delle credenziali
        $validator = Validator::make($credentials, [
            'current_password' => 'required',
            'new_password' => 'required|min:8',
            'confirm_password' => 'required|same:new_password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }

        if (Hash::check($credentials['current_password'], $user->password)) {
            if (!Hash::check($credentials['new_password'], $user->password)) {
                $newHashedPassword = Hash::make($credentials['new_password']);
                
                $user->update(['password' => $newHashedPassword]);

                return response()->json(['message' => 'Password modificata con successo'], 200);
            } else {
            return response()->json(['error' => 'La nuova password deve essere diversa da quella attuale'], 400);
            }
        }
        return response()->json(['error' => 'La password attuale non è corretta'], 400);
    }


    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
