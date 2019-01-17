<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = [
        'name', 'recipe_cat', 'description', "est_price"
    ];

    public function recipe_cat()
    {
        return $this->belongsTo('App\RecipeCategory', "recipe_cat");
    }

    public function collections()
    {
        return $this->belongsToMany('App\Collection');
    }

    public function items()
    {
        return $this->belongsToMany('App\Item');
    }


}
