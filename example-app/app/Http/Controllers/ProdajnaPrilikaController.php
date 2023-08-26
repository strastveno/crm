<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProdajnaPrilika;
use Illuminate\Support\Facades\Validator;

class ProdajnaPrilikaController extends Controller
{
    public function index()
    {
        $prilike = ProdajnaPrilika::all();
        return response()->json($prilike);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|string',
            'client_id' => 'required|exists:klijents,id',
            'prodavac_id' => 'required|exists:users,id',
            'napomena' => 'nullable|string',
            'ocekivaniIznos' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $prilika = ProdajnaPrilika::create($request->all());
        return response()->json($prilika, 201);
    }

    public function update(Request $request, ProdajnaPrilika $prilika)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'sometimes|required|string',
            'client_id' => 'sometimes|required|exists:klijents,id',
            'prodavac_id' => 'sometimes|required|exists:users,id',
            'napomena' => 'nullable|string',
            'ocekivaniIznos' => 'sometimes|required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $prilika->update($request->all());
        return response()->json($prilika);
    }

    public function destroy(ProdajnaPrilika $prilika)
    {
        $prilika->delete();
        return response()->json(null, 204);
    }
}
