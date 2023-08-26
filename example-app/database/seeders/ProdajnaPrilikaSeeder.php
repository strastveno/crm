<?php

namespace Database\Seeders;

use App\Models\ProdajnaPrilika;
use Illuminate\Database\Seeder;

class ProdajnaPrilikaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $prilike = [
            [
                'status' => 'U pregovorima',
                'client_id' => 1,
                'prodavac_id' => 1,
                'napomena' => 'Prva napomena.',
                'ocekivaniIznos' => 1000.00
            ],
            [
                'status' => 'Sklopljen ugovor',
                'client_id' => 2,
                'prodavac_id' => 2,
                'napomena' => 'Druga napomena.',
                'ocekivaniIznos' => 2000.00
            ],
            [
                'status' => 'Odbijeno',
                'client_id' => 3,
                'prodavac_id' => 3,
                'napomena' => 'Treća napomena.',
                'ocekivaniIznos' => 3000.00
            ],
        ];

        foreach ($prilike as $prilika) {
            ProdajnaPrilika::create($prilika);
        }
    }
    
}
