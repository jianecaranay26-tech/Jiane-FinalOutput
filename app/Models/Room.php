<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Room extends Model
{
    protected $fillable = [
        'room_number',
        'capacity',
        'occupants',
        'monthly_rent',
    ];

    protected function casts(): array
    {
        return [
            'capacity' => 'integer',
            'occupants' => 'integer',
            'monthly_rent' => 'decimal:2',
        ];
    }

    public function tenants(): HasMany
    {
        return $this->hasMany(Tenant::class);
    }
}
