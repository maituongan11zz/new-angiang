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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/insert-data-point', 'PostgresController@insertData');
Route::post('/upload-shapefile','PostgresController@uploadShapeFile');
Route::get('/get-all-imgpoint','PostgresController@getAllPointImg');
Route::post('/get-matcat','PostgresController@getMatCat');

