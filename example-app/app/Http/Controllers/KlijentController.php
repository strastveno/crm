<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Klijent;
use Illuminate\Support\Facades\Validator;

class KlijentController extends Controller
{
    public function index()
    {
        $klijenti = Klijent::all();
        return response()->json($klijenti);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:klijents,email',
            'phone' => 'nullable|string',
            'address' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $klijent = Klijent::create($request->all());
        return response()->json($klijent, 201);
    }

    public function update(Request $request, Klijent $klijent)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string',
            'email' => 'sometimes|required|email|unique:klijents,email,' . $klijent->id,
            'phone' => 'nullable|string',
            'address' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $klijent->update($request->all());
        return response()->json($klijent);
    }

    public function destroy(Klijent $klijent)
    {
        $klijent->delete();
        return response()->json(null, 204);
    }
}
