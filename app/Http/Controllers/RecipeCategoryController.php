<?php

namespace App\Http\Controllers;

use App\RecipeCategory;
use Illuminate\Http\Request;

class RecipeCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = RecipeCategory::all();
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
        $data = $request->only(['name']);
        $result = RecipeCategory::create($data);
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
     * @param  \App\RecipeCategory $recipeCategory
     * @return \Illuminate\Http\Response
     */
    public function show(RecipeCategory $recipeCategory)
    {
        $result = $recipeCategory;
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
     * @param  \App\RecipeCategory $recipeCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(RecipeCategory $recipeCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\RecipeCategory $recipeCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RecipeCategory $recipeCategory)
    {
        $data = $request->only('name');
        $recipeCategory->name = $data['name'];
        $recipeCategory->save();
        $result = $recipeCategory;
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
     * @param  \App\RecipeCategory $recipeCategory
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(RecipeCategory $recipeCategory)
    {
        $recipeCategory->delete();
        $result = "Recipe Category deleted";
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "text/plain; charset=utf-8");

    }
}
