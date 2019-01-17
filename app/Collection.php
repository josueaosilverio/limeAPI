<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    protected $fillable = [
        'name', 'user_id', 'expires', "collection_cat"
    ];

    public function collection_cat()
    {
        return $this->belongsTo('App\CollectionCategory', "collection_cat");
    }

    public function user_id()
    {
        return $this->belongsTo('App\User', "user_id");
    }

    public function recipes()
    {
        return $this->belongsToMany('App\Recipe');
    }
}
