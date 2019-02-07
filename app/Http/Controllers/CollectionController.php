<?php

namespace App\Http\Controllers;

use App\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Class CollectionController
 * @group Collection
 * @package App\Http\Controllers
 */
class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Collection::with("recipes")->get();
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "application/json; charset=utf-8");

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only(['name', 'user_id', 'expires', 'collection_cat']);
        $result = Collection::create($data);
        $message = [
            'status' => '201',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 201)
            ->header('Content-Type', "application/json; charset=utf-8");

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Collection $collection
     * @return \Illuminate\Http\Response
     */
    public function show(Collection $collection)
    {
        $result = Collection::with("recipes")->find($collection->id);
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "application/json; charset=utf-8");

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Collection $collection
     * @return \Illuminate\Http\Response
     */
    public function edit(Collection $collection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Collection $collection
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Collection $collection)
    {
        $data = $request->only('name', 'user_id', 'expires', 'collection_cat');
        $collection->name = $data['name'];
        $collection->user_id = $data['user_id'];
        $collection->expires = $data['expires'];
        $collection->collection_cat = $data['collection_cat'];
        $collection->save();
        $result = $collection;
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "application/json; charset=utf-8");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Collection $collection
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Collection $collection)
    {
        $collection->delete();
        $result = "Collection deleted";
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "text/plain; charset=utf-8");

    }


    /**
     *TODO Acabar de construir endpoint da main feature
     * Generates a new collection based on settings
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function generateCollection(Request $request)
    {
        $data = $request->only(['recipe_number', 'max_price', "recipe_cat"]);

        $priceper = $data['max_price'] / $data['recipe_number'];

        //TESTME Ver se a query está correcta
        $recipes = DB::table('recipes')
            ->whereBetween("est_price", [0, $priceper + ($priceper / 10)])
            ->where('recipe_cat', $data['recipe_cat'])
            ->get();

        if (sizeof($recipes) < $data['recipe_number']) {
            //TODO Adiciona random até ao numero de receitas pedido
            $result = "";
        } else {
            //TODO Corta o número do array até ser o nº pedido
            $result = "";
        }


        //$result = Collection::create($data);

        $message = [
            'status' => '201',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 201)
            ->header('Content-Type', "application/json; charset=utf-8");

    }

}
