<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProdajnaPrilika extends Model
{
    use HasFactory;
    protected $fillable = ['status', 'client_id', 'prodavac_id','napomena','ocekivaniIznos'];

    // Veza sa Klijentom
    public function client() {
        return $this->belongsTo(Klijent::class, 'client_id');
    }

    // Veza sa Prodavcem (User)
    public function prodavac() {
        return $this->belongsTo(User::class, 'prodavac_id');
    }
}
