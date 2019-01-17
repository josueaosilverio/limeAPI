<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemRecipeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('item_recipe', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('item_id');
            $table->integer('recipe_id');
            $table->string('quantity');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('item_recipe', function (Blueprint $table) {
            Schema::dropIfExists('item_recipe');
        });
    }
}
