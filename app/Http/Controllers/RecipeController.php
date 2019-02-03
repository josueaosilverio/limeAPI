<?php

namespace App\Http\Controllers;

use App\Recipe;
use Illuminate\Http\Request;

/**
 * Class RecipeController
 * @package App\Http\Controllers
 */
class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     * @group Recipe
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Recipe::all();
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
     * @group Recipe
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * @group Recipe
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only(['name', 'recipe_cat', 'description', "est_price"]);
        $result = Recipe::create($data);
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
     * @group Recipe
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function show(Recipe $recipe)
    {
        $result = $recipe;
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
     * @group Recipe
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function edit(Recipe $recipe)
    {

    }

    /**
     * Update the specified resource in storage.
     * @group Recipe
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Recipe $recipe)
    {
        $data = $request->only('name', 'recipe_cat', 'description', 'est_price');
        $recipe->name = $data['name'];
        $recipe->recipe_cat = $data['recipe_cat'];
        $recipe->description = $data['description'];
        $recipe->est_price = $data['est_price'];
        $recipe->save();
        $result = $recipe;
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
     * @group Recipe
     * @param  \App\Recipe $recipe
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Recipe $recipe)
    {
        $recipe->delete();
        $result = "Recipe deleted";
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "text/plain; charset=utf-8");
    }


    /**
     * Looks for a recipe by name
     * @group Recipe
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function recipeByName(Request $request)
    {
        $data = $request->only(['name']);
        $result = Recipe::with("items")->where("name", "like", $data["name"])->get();
        $message = [
            'status' => '201',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 201)
            ->header('Content-Type', "application/json; charset=utf-8");

    }

}
