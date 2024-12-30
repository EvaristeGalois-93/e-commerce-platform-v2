<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'firstname' => 'Admin',
                'lastname' => 'Admin',
                'birth_date' => '2000-01-01',
                'gender' => 'male',
                'phone_number' => '1234567890',
                'country' => 'IT',
                'credit_card' => '5555482221116349',
                'CVC_card' => '819',
                'email' => 'admin@outlook.it',
                'password' => 'password'
            ]
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
