<?php

use Illuminate\Database\Seeder;

class RecipesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Recipe::create(
            [
                'name' => 'Bacalhau',
                'recipe_cat' => '1',
                'image' => 'http://www.pescanova.pt/content/img/PN_Bacalhau_Lagareiro-1_utili.jpg',
                'description' => 'Testes, testes, testes',
                'est_price' => '15',
                'feeds' => '2',
                'kcal' => '3000',
                'time' => '30min',
            ]);
        $items = \App\Item::all();
        $recipe = \App\Recipe::all()->first();
        $recipe->items()->attach($items, ['quantity' => "300g"]);
    }
}