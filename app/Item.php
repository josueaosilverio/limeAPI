<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'name', 'description', "item_cat"
    ];

    public function item_cat(){
        return $this->belongsTo('App\ItemCategory', "item_cat");
    }

    public function recipes()
    {
        return $this->belongsToMany('App\Recipe');
    }

    public function usersDislike(){
        return $this->belongsToMany('App\User');
    }

}
