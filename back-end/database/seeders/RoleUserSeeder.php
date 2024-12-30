<?php

namespace Database\Seeders;

use App\Models\RoleUser;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'role_id' => '2',
                'user_id' => '1',
                'user_type' => 'App\Models\User',
            ]
        ];

        foreach ($roles as $role) {
            RoleUser::create($role);
        }
    }
}
