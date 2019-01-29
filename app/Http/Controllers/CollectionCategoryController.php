<?php

namespace App\Http\Controllers;

use App\CollectionCategory;
use Illuminate\Http\Request;

class CollectionCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = CollectionCategory::all();
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only(['name']);
        $result = CollectionCategory::create($data);
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
     * @param  \App\CollectionCategory  $collectionCategory
     * @return \Illuminate\Http\Response
     */
    public function show(CollectionCategory $collectionCategory)
    {
        $result = $collectionCategory;
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
     * @param  \App\CollectionCategory  $collectionCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(CollectionCategory $collectionCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CollectionCategory  $collectionCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CollectionCategory $collectionCategory)
    {
        $data = $request->only('name');
        $collectionCategory->name = $data['name'];
        $collectionCategory->save();
        $result = $collectionCategory;
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
     * @param  \App\CollectionCategory $collectionCategory
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(CollectionCategory $collectionCategory)
    {
        $collectionCategory->delete();
        $result = "Collection Category deleted";
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "text/plain; charset=utf-8");

    }
}
