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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname', 255);
            $table->string('lastname', 255);
            $table->date('birth_date');
            $table->enum('gender', ['male', 'female', 'other']);
            $table->unsignedBigInteger('phone_number');
            $table->string('country');
            $table->string('credit_card');
            $table->string('CVC_card');
            $table->string('email')->unique();
            $table->string('password');
            $table->unsignedBigInteger('filestorage_id')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('filestorage_id')->references('id')->on('filestorage')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
