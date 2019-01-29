<?php

namespace App\Http\Controllers;

use App\UserRole;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = UserRole::all();
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "application/json; charset=utf-8");    }

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
        $result = UserRole::create($data);
        $message = [
            'status' => '201',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 201)
            ->header('Content-Type', "application/json; charset=utf-8");    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UserRole  $userRole
     * @return \Illuminate\Http\Response
     */
    public function show(UserRole $userRole)
    {
        $result = $userRole;
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
     * @param  \App\UserRole  $userRole
     * @return \Illuminate\Http\Response
     */
    public function edit(UserRole $userRole)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserRole  $userRole
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserRole $userRole)
    {
        $data = $request->only('name', 'username', 'email', 'password');
        $userRole->name = $data['name'];
        $userRole->save();
        $result = $userRole;
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "application/json; charset=utf-8");    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserRole $userRole
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(UserRole $userRole)
    {
        $userRole->delete();
        $result = "User role deleted";
        $message = [
            'status' => '200',
            'message' => 'Operation Successful',
            'data' => $result
        ];
        return response($message, 200)
            ->header('Content-Type', "text/plain; charset=utf-8");
    }
}
