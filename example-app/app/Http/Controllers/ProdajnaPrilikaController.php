<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProdajnaPrilikaResource;
use Illuminate\Http\Request;
use App\Models\ProdajnaPrilika;
use Illuminate\Support\Facades\Validator;

class ProdajnaPrilikaController extends Controller
{
    public function index()
    {
        $prilike = ProdajnaPrilikaResource::collection(ProdajnaPrilika::all());
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

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|string',
            'client_id' => 'required|exists:klijents,id',
            'prodavac_id' => 'required|exists:users,id',
            'napomena' => 'string',
            'ocekivaniIznos' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
        $prilika=ProdajnaPrilika::find($id);
        $prilika->update($request->all());
        return response()->json($prilika);
    }

    public function destroy(ProdajnaPrilika $prilika)
    {
        $prilika->delete();
        return response()->json(null, 204);
    }
}
