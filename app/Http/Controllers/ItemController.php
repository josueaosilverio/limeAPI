<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;

/**
 * Class ItemController
 * @group Item
 * @package App\Http\Controllers
 */
class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Item::all();
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
        $data = $request->only(['name', 'description', 'item_cat']);
        $result = Item::create($data);
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
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show(Item $item)
    {
        $result = $item;
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
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        $data = $request->only('name', 'description', 'item_cat');
        $item->name = $data['name'];
        $item->description = $data['description'];
        $item->item_cat = $data['item_cat'];
        $item->save();
        $result = $item;
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
     * @param  \App\Item $item
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Item $item)
    {
        $item->delete();
        $result = "Item deleted";
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "text/plain; charset=utf-8");

    }
}
