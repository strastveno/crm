<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_id = User::first()->id;
 
        $tasks = [
            ['description' => 'Pozvati klijenta Ivana', 'due_date' => '2023-08-28', 'user_id' => $user_id],
            ['description' => 'Poslati ponudu firmi ABC', 'due_date' => '2023-08-29', 'user_id' => $user_id],
            ['description' => 'Organizovati sastanak sa timom', 'due_date' => '2023-08-30', 'user_id' => $user_id],
            ['description' => 'Proveriti zalihu proizvoda X', 'due_date' => '2023-08-31', 'user_id' => $user_id],
            ['description' => 'Zakazati sastanak sa dobavljačem', 'due_date' => '2023-09-01', 'user_id' => $user_id],
        ];

        foreach ($tasks as $task) {
            Task::create($task);
        }
    }
}