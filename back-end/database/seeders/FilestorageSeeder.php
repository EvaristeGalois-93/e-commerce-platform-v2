<?php

namespace Database\Seeders;

use App\Models\FileStorage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FilestorageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $images = [
            [
                'path' => 'images/Airwick.jpg',
                'name' => 'Airwick.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Airwick2.jpg',
                'name' => 'Airwick2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Airwick3.jpg',
                'name' => 'Airwick3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Airwick4.jpg',
                'name' => 'Airwick4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Airwick5.jpg',
                'name' => 'Airwick5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Baogaier.jpg',
                'name' => 'Baogaier.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Baogaier2.jpg',
                'name' => 'Baogaier2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Baogaier3.jpg',
                'name' => 'Baogaier3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Baogaier4.jpg',
                'name' => 'Baogaier4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Baogaier5.jpg',
                'name' => 'Baogaier5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Bio.jpg',
                'name' => 'Bio.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Bio2.jpg',
                'name' => 'Bio2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Bio3.jpg',
                'name' => 'Bio3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Bio4.jpg',
                'name' => 'Bio4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Bio5.jpg',
                'name' => 'Bio5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Borsa.jpg',
                'name' => 'Borsa.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Borsa2.jpg',
                'name' => 'Borsa2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Borsa3.jpg',
                'name' => 'Borsa3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Borsa4.jpg',
                'name' => 'Borsa4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Braun.jpg',
                'name' => 'Braun.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Braun2.jpg',
                'name' => 'Braun2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Braun3.jpg',
                'name' => 'Braun3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Braun4.jpg',
                'name' => 'Braun4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Braun5.jpg',
                'name' => 'Braun5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Braun6.jpg',
                'name' => 'Braun6.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Cuffie.jpg',
                'name' => 'Cuffie.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Cuffie2.jpg',
                'name' => 'Cuffie2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Cuffie3.jpg',
                'name' => 'Cuffie3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Cuffie4.jpg',
                'name' => 'Cuffie4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Cuffie5.jpg',
                'name' => 'Cuffie5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Cuffie6.jpg',
                'name' => 'Cuffie6.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/DowinxSedia.jpg',
                'name' => 'DowinxSedia.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/DowinxSedia2.jpg',
                'name' => 'DowinxSedia2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/DowinxSedia3.jpg',
                'name' => 'DowinxSedia3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/DowinxSedia4.jpg',
                'name' => 'DowinxSedia4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/DowinxSedia5.jpg',
                'name' => 'DowinxSedia5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Impermeabile.jpg',
                'name' => 'Impermeabile.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Impermeabile2.jpg',
                'name' => 'Impermeabile2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Impermeabile3.jpg',
                'name' => 'Impermeabile3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/MediasetInfinity.png',
                'name' => 'MediasetInfinity.png',
                'extension' => 'png',
            ],
            [
                'path' => 'images/Motorola.jpg',
                'name' => 'Motorola.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Motorola2.jpg',
                'name' => 'Motorola2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Motorola3.jpg',
                'name' => 'Motorola3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Motorola4.jpg',
                'name' => 'Motorola4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Motorola5.jpg',
                'name' => 'Motorola5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/RaiPlay.png',
                'name' => 'RaiPlay.png',
                'extension' => 'png',
            ],
            [
                'path' => 'images/RedmiNote11S.jpg',
                'name' => 'RedmiNote11S.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/RedmiNote11S2.jpg',
                'name' => 'RedmiNote11S2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/RedmiNote11S3.jpg',
                'name' => 'RedmiNote11S3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/RedmiNote11S4.jpg',
                'name' => 'RedmiNote11S4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Sign.jpg',
                'name' => 'Sign.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Tecurs_tastiera.jpg',
                'name' => 'Tecurs_tastiera.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Tecurs_tastiera2.jpg',
                'name' => 'Tecurs_tastiera2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Tecurs_tastiera3.jpg',
                'name' => 'Tecurs_tastiera3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Tecurs_tastiera4.jpg',
                'name' => 'Tecurs_tastiera4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Tecurs_tastiera5.jpg',
                'name' => 'Tecurs_tastiera5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Tecurs_tastiera6.jpg',
                'name' => 'Tecurs_tastiera6.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/TheBatman.jpg',
                'name' => 'TheBatman.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/TopGun.jpg',
                'name' => 'TopGun.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/unycos.jpg',
                'name' => 'unycos.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/unycos2.jpg',
                'name' => 'unycos3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/unycos3.jpg',
                'name' => 'unycos3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/unycos4.jpg',
                'name' => 'unycos4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/unycos5.jpg',
                'name' => 'unycos5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/unycos6.jpg',
                'name' => 'unycos6.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Vans.jpg',
                'name' => 'Vans.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Vans2.jpg',
                'name' => 'Vans2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Vans3.jpg',
                'name' => 'Vans3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Vans4.jpg',
                'name' => 'Vans4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Vans5.jpg',
                'name' => 'Vans5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Yankee.jpg',
                'name' => 'Yankee.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Yankee2.jpg',
                'name' => 'Yankee2.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Yankee3.jpg',
                'name' => 'Yankee3.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Yankee4.jpg',
                'name' => 'Yankee4.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Yankee5.jpg',
                'name' => 'Yankee5.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Yankee6.jpg',
                'name' => 'Yankee6.jpg',
                'extension' => 'jpg',
            ],
            [
                'path' => 'images/Yankee7.jpg',
                'name' => 'Yankee7.jpg',
                'extension' => 'jpg',
            ],
        ];

        foreach ($images as $image) {
            FileStorage::create($image);
        }

    }
}
