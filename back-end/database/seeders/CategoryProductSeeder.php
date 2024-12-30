<?php

namespace Database\Seeders;

use App\Models\CategoryProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category_products = [
            [
                'product_id' => '1',
                'category_id' => '7',
            ],
            [
                'product_id' => '2',
                'category_id' => '7',
            ],
            [
                'product_id' => '2',
                'category_id' => '10',
            ],
            [
                'product_id' => '2',
                'category_id' => '14',
            ],
            [
                'product_id' => '3',
                'category_id' => '7',
            ],
            [
                'product_id' => '3',
                'category_id' => '10',
            ],
            [
                'product_id' => '3',
                'category_id' => '14',
            ],
            [
                'product_id' => '4',
                'category_id' => '7',
            ],
            [
                'product_id' => '4',
                'category_id' => '10',
            ],
            [
                'product_id' => '4',
                'category_id' => '14',
            ],
            [
                'product_id' => '5',
                'category_id' => '7',
            ],
            [
                'product_id' => '5',
                'category_id' => '10',
            ],
            [
                'product_id' => '5',
                'category_id' => '14',
            ],
            [
                'product_id' => '5',
                'category_id' => '21',
            ],
            [
                'product_id' => '6',
                'category_id' => '9',
            ],
            [
                'product_id' => '6',
                'category_id' => '11',
            ],
            [
                'product_id' => '7',
                'category_id' => '9',
            ],
            [
                'product_id' => '7',
                'category_id' => '11',
            ],
            [
                'product_id' => '8',
                'category_id' => '9',
            ],
            [
                'product_id' => '8',
                'category_id' => '11',
            ],
            [
                'product_id' => '9',
                'category_id' => '11',
            ],
            [
                'product_id' => '9',
                'category_id' => '24',
            ],
            [
                'product_id' => '10',
                'category_id' => '11',
            ],
            [
                'product_id' => '10',
                'category_id' => '24',
            ],
            [
                'product_id' => '11',
                'category_id' => '5',
            ],
            [
                'product_id' => '11',
                'category_id' => '18',
            ],
            [
                'product_id' => '11',
                'category_id' => '23',
            ],
            [
                'product_id' => '12',
                'category_id' => '5',
            ],
            [
                'product_id' => '12',
                'category_id' => '17',
            ],
            [
                'product_id' => '12',
                'category_id' => '23',
            ],
            [
                'product_id' => '13',
                'category_id' => '7',
            ],
            [
                'product_id' => '13',
                'category_id' => '26',
            ],
            [
                'product_id' => '14',
                'category_id' => '8',
            ],
            [
                'product_id' => '14',
                'category_id' => '23',
            ],
            [
                'product_id' => '15',
                'category_id' => '8',
            ],
            [
                'product_id' => '15',
                'category_id' => '23',
            ],
            [
                'product_id' => '16',
                'category_id' => '16',
            ],
            [
                'product_id' => '16',
                'category_id' => '17',
            ],
            [
                'product_id' => '16',
                'category_id' => '23',
            ],
            [
                'product_id' => '16',
                'category_id' => '5',
            ],
            [
                'product_id' => '17',
                'category_id' => '5',
            ],
            [
                'product_id' => '17',
                'category_id' => '16',
            ],
            [
                'product_id' => '17',
                'category_id' => '17',
            ],
            [
                'product_id' => '17',
                'category_id' => '18',
            ],
            [
                'product_id' => '17',
                'category_id' => '19',
            ],
            [
                'product_id' => '17',
                'category_id' => '20',
            ],
            [
                'product_id' => '17',
                'category_id' => '23',
            ],
            [
                'product_id' => '18',
                'category_id' => '5',
            ],
            [
                'product_id' => '18',
                'category_id' => '16',
            ],
            [
                'product_id' => '18',
                'category_id' => '17',
            ],
            [
                'product_id' => '18',
                'category_id' => '18',
            ],
            [
                'product_id' => '18',
                'category_id' => '19',
            ],
            [
                'product_id' => '18',
                'category_id' => '20',
            ],
            [
                'product_id' => '18',
                'category_id' => '23',
            ],
            [
                'product_id' => '19',
                'category_id' => '5',
            ],
            [
                'product_id' => '19',
                'category_id' => '16',
            ],
            [
                'product_id' => '19',
                'category_id' => '17',
            ],
            [
                'product_id' => '19',
                'category_id' => '18',
            ],
            [
                'product_id' => '19',
                'category_id' => '19',
            ],
            [
                'product_id' => '19',
                'category_id' => '20',
            ],
            [
                'product_id' => '19',
                'category_id' => '23',
            ],
        ];

        foreach ($category_products as $category_product) {
            CategoryProduct::create($category_product);
        }
    }
}
