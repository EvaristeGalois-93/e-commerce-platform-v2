<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('cart', function (Blueprint $table) {
        //     $table->id();
        //     $table->unsignedBigInteger('quantity');
        //     $table->unsignedBigInteger('user_id')->nullable();
        //     $table->unsignedBigInteger('product_id');
        //     $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade');
        //     $table->foreign('product_id')->references('id')->on('products')->onUpdate('cascade');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cart');
    }
};
