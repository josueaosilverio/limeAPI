<?php

use Illuminate\Database\Seeder;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     *
     */
    public function run()
    {
        \App\Item::create(
            [
                'name' => 'Bacalhau',
                'description' => 'Testes, testes, testes',
                'item_cat' => '1',
            ]);
        \App\Item::create(
            [
                'name' => 'Batata',
                'description' => 'Testes, testes, testes',
                'item_cat' => '1',
            ]);
        \App\Item::create(
            [
                'name' => 'Coisas',
                'description' => 'Testes, testes, testes',
                'item_cat' => '1',
            ]);
        \App\Item::create(
            [
                'name' => 'Sei lá',
                'description' => 'Testes, testes, testes',
                'item_cat' => '1',
            ]);
    }
}