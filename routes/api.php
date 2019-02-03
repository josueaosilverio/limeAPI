<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::resource('user', 'UserController');
Route::resource('collectioncategory', 'CollectionCategoryController');
Route::resource('collection', 'CollectionController');
Route::resource('itemcategory', 'ItemCategoryController');
Route::resource('item', 'ItemController');
Route::resource('recipecategory', 'RecipeCategoryController');
Route::resource('recipe', 'RecipeController');
Route::resource('userrole', 'UserRoleController');