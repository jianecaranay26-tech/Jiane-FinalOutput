<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('rooms', function (Blueprint $table) {
            $table->string('room_number')->nullable()->unique();
            $table->unsignedInteger('capacity')->default(1);
            $table->unsignedInteger('occupants')->default(0);
            $table->decimal('monthly_rent', 10, 2)->default(0);
        });
    }

    public function down(): void
    {
        Schema::table('rooms', function (Blueprint $table) {
            $table->dropUnique(['room_number']);
            $table->dropColumn([
                'room_number',
                'capacity',
                'occupants',
                'monthly_rent',
            ]);
        });
    }
};

