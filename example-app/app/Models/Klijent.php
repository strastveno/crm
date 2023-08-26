<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Klijent extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'phone', 'address'];

    // Veza s Prodajnom prilikom
    public function prodajnePrilike() {
        return $this->hasMany(ProdajnaPrilika::class, 'client_id');
    }
}
