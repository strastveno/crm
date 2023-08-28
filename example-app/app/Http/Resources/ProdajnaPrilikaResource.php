<?php

namespace App\Http\Resources;

use App\Models\Klijent;
use Illuminate\Http\Resources\Json\JsonResource;

class ProdajnaPrilikaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'napomena' => $this->napomena,
            'ocekivaniIznos' => $this->ocekivaniIznos,
            'prodavac_id' => $this->prodavac_id,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at, 
            'client' => Klijent::find($this->client_id)
        ];
    }
}
