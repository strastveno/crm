<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\KlijentController;
use App\Http\Controllers\ProdajnaPrilikaController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::apiResource('klijents', KlijentController::class)->only([
    'index', 'store', 'update', 'destroy'
]);

Route::apiResource('tasks', TaskController::class)->only([
    'index', 'store', 'update', 'destroy'
]);

Route::apiResource('prodajne-prilike', ProdajnaPrilikaController::class)->only([
    'index', 'store', 'update', 'destroy'
]);


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);



