<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $fillable = ['description', 'due_date', 'user_id'];

    // Veza sa Userom (Prodavcem)
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
