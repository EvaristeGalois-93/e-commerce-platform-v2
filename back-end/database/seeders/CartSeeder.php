<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\cart;

class CartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $carrello = [
            [
                'user_id' => 1,
                'quantity' => 2,
                'product_id' => 4,
            ],
            [
                'user_id' => 1,
                'quantity' => 3,
                'product_id' => 2,
            ],
            [
                'user_id' => 1,
                'quantity' => 1,
                'product_id' => 3,
            ],
        ];

        foreach ($carrello as $prodotto) {
            cart::create($prodotto);
        }
    }
}
