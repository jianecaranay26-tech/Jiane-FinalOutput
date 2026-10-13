<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tenant extends Model
{
    protected $fillable = [
        'full_name',
        'phone',
        'email',
        'room_id',
        'move_in_date',
        'monthly_rent',
    ];

    protected function casts(): array
    {
        return [
            'move_in_date' => 'date',
            'monthly_rent' => 'decimal:2',
        ];
    }

    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }
}