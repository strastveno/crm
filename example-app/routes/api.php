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

// Routes that don't require authentication
Route::apiResource('klijents', KlijentController::class)->only([
    'index'
]);

Route::apiResource('tasks', TaskController::class)->only([
    'index'
]);

Route::apiResource('prodajne-prilike', ProdajnaPrilikaController::class)->only([
    'index'
]);

Route::get('/user', [AuthController::class, 'index']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Routes that require authentication
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('klijents', KlijentController::class)->except([
        'index', 'show'
    ]);

    Route::apiResource('tasks', TaskController::class)->except([
        'index', 'show'
    ]);

    Route::apiResource('prodajne-prilike', ProdajnaPrilikaController::class)->except([
        'index', 'show'
    ]);

    Route::post('/logout', [AuthController::class, 'logout']);
});
