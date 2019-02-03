<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('recipes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('recipe_cat');
            $table->text('description');
            $table->string('est_price');
            $table->integer('kcal');
            $table->string('time');
            $table->string('image');
            $table->integer('feeds');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipes');
    }
}
