<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Alimentari e cura della casa',
                'parent_id' => null,
            ],
            [
                'name' => 'App e Giochi',
                'parent_id' => null,
            ],
            [
                'name' => 'Audiolibri',
                'parent_id' => null,
            ],
            [
                'name' => 'Auto e Moto',
                'parent_id' => null,
            ],
            [
                'name' => 'Bellezza',
                'parent_id' => null,
            ],
            [
                'name' => 'Buoni Regalo',
                'parent_id' => null,
            ],
            [
                'name' => 'Prodotti per Ufficio',
                'parent_id' => null,
            ],
            [
                'name' => 'Casa e Cucina',
                'parent_id' => null,
            ],
            [
                'name' => 'Cd e Vinili',
                'parent_id' => null,
            ],
            [
                'name' => 'Elettronica',
                'parent_id' => null,
            ],
            [
                'name' => 'Film e TV',
                'parent_id' => null,
            ],
            [
                'name' => 'Giochi e Giocattoli',
                'parent_id' => null,
            ],
            [
                'name' => 'Elettrodomestici',
                'parent_id' => null,
            ],
            [
                'name' => 'Informatica',
                'parent_id' => null,
            ],
            [
                'name' => 'Libri',
                'parent_id' => null,
            ],
            [
                'name' => 'Moda',
                'parent_id' => null,
            ],
            [
                'name' => 'Donna',
                'parent_id' => 16,
            ],
            [
                'name' => 'Uomo',
                'parent_id' => 16,
            ],
            [
                'name' => 'Bambina',
                'parent_id' => 16,
            ],
            [
                'name' => 'Bambino',
                'parent_id' => 16,
            ],
            [
                'name' => 'Musica Digitale',
                'parent_id' => null,
            ],
            [
                'name' => 'Prodotti per animali',
                'parent_id' => null,
            ],
            [
                'name' => 'Salute e cura delle persone',
                'parent_id' => null,
            ],
            [
                'name' => 'Sport e tempo libero',
                'parent_id' => null,
            ],
            [
                'name' => 'Accessori da viaggio',
                'parent_id' => null,
            ],
            [
                'name' => 'Videogiochi',
                'parent_id' => null,
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
