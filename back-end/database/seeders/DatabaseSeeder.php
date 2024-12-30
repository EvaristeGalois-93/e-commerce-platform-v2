<?php

namespace Database\Seeders;

use App\Models\FilestorageProduct;
use App\Models\Role;
use App\Models\RoleUser;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            LaratrustSeeder::class,
            UserSeeder::class,
            RoleUserSeeder::class,            
            ProductsSeeder::class,
            FilestorageSeeder::class,
            FilestorageProductSeeder::class,
            CategorySeeder::class,
            CategoryProductSeeder::class,
            // CartSeeder::class
        ]);
    }
}
