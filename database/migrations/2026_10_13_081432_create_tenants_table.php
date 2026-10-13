<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('tenants', function (Blueprint $table) {
        $table->id();
        $table->string('full_name');
        $table->string('phone', 30);
        $table->string('email')->nullable();
        $table->foreignId('room_id')
            ->nullable()
            ->constrained('rooms')
            ->nullOnDelete();
        $table->date('move_in_date');
        $table->decimal('monthly_rent', 10, 2);
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
