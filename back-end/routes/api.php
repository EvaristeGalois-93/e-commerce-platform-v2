<?php

// routes/web.php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProdottiNegozioController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\FilestorageController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Faker\Core\File;
use Illuminate\Support\Facades\Auth;

    // Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    //     return $request->user();
    // });

    Route::controller(AuthController::class)->prefix('auth')->group(function () {
        Route::post('login','login');
        Route::post('register', 'register');
        Route::post('/logout', 'logout');
    });



    Route::prefix('users')->group(function () {

        Route::post('saveShippingAddress', [UserController::class, 'saveShippingAddress']);


        Route::group(['middleware' => 'api'], function () {
            Route::get('index', [UserController::class, 'index']);
            Route::post('store', [UserController::class, 'store']);
            Route::get('show/{id}', [UserController::class, 'show']);
            Route::put('update/{id}', [UserController::class, 'update']);
            Route::delete('destroy/{id}', [UserController::class, 'destroy']);

            // Route::post('saveShippingAddress', [UserController::class, 'saveShippingAddress']);
        });
    });


    Route::prefix('products')->group(function () {

        Route::get('index', [ProductsController::class, 'index']);
        Route::get('filter_search', [ProductsController::class, 'filter_search']);
        Route::get('getCategories', [ProductsController::class, 'getCategories']);
        Route::get('show/{id}', [ProductsController::class, 'show']);


        Route::group(['middleware' => 'api'], function () {
            Route::get('get_wishlist', [ProductsController::class, 'get_wishlist']);
            Route::post('store', [ProductsController::class, 'store']);
            Route::post('add_to_wishlist/{id}', [ProductsController::class, 'add_to_wishlist']);
            Route::put('update/{id}', [ProductsController::class, 'update']);
            Route::delete('destroy/{id}', [ProductsController::class, 'destroy']);
            Route::delete('remove_from_wishlist/{id}', [ProductsController::class, 'remove_from_wishlist']);
        });
    });


    Route::prefix('filestorage')->group(function () {

        Route::get('index', [FilestorageController::class, 'index']);
        Route::post('store', [FilestorageController::class, 'store']);

        Route::get('show/{id}', [FilestorageController::class, 'show']);
        Route::put('update/{id}', [FilestorageController::class, 'update']);
        Route::delete('destroy/{id}', [FilestorageController::class, 'destroy']);
    });

    Route::group(['middleware' => 'api', 'prefix' => 'cart'], function () {
        Route::get('index', [CartController::class, 'index']);
        Route::post('store', [CartController::class, 'store']);
        Route::post('addProductToCart/{product_id}', [CartController::class, 'addProductToCart']);
        Route::get('show/{id}', [CartController::class, 'show']);
        Route::put('update/{id}', [CartController::class, 'update']);
        Route::delete('destroy/{id}', [CartController::class, 'destroy']);
        Route::post('checkout', [CartController::class, 'checkout']);
        }
    );
