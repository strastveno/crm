<?php

namespace Database\Seeders;

use App\Models\Klijent;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            ['name' => 'Pera', 'email' => 'pera@example.com', 'password' => Hash::make('pera1234'), 'role' => 'admin'],
            ['name' => 'Mika', 'email' => 'mika@example.com', 'password' => Hash::make('mika1234'), 'role' => 'prodavac'],
            ['name' => 'Žika', 'email' => 'zika@example.com', 'password' => Hash::make('zika1234'), 'role' => 'prodavac'],
        ];
       
        // Dodavanje korisnika u bazu
        foreach ($users as $user) {
            User::create($user);
        }
        Klijent::factory(10)->create();
        $this->call([
           
           
            TaskSeeder::class,  
            ProdajnaPrilikaSeeder::class,
        ]);
    }
}
