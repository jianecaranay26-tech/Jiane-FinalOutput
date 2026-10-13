<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TenantController extends Controller
{
   public function index()
{
    return Inertia::render('Tenants/Index', [
        'tenants' => Tenant::with('room')->latest()->get(),
        'rooms' => Room::all(),
    ]);
}

    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'phone' => 'required|string|max:30',
            'email' => 'nullable|email|max:255',
            'room_id' => 'nullable|exists:rooms,id',
            'move_in_date' => 'required|date',
            'monthly_rent' => 'required|numeric|min:0',
        ]);

        Tenant::create($validated);

        return redirect()->route('tenants.index')
            ->with('success', 'Tenant added successfully!');
    }

    public function update(Request $request, Tenant $tenant)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'phone' => 'required|string|max:30',
            'email' => 'nullable|email|max:255',
            'room_id' => 'nullable|exists:rooms,id',
            'move_in_date' => 'required|date',
            'monthly_rent' => 'required|numeric|min:0',
        ]);

        $tenant->update($validated);

        return redirect()->route('tenants.index')
            ->with('success', 'Tenant updated successfully!');
    }

    public function destroy(Tenant $tenant)
    {
        $tenant->delete();

        return redirect()->route('tenants.index')
            ->with('success', 'Tenant deleted successfully!');
    }
}
