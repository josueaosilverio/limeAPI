<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CollectionCategory extends Model
{
    protected $fillable = [
        'name'
    ];

    public function collections()
    {
        return $this->hasMany('App\Collection');
    }
}
