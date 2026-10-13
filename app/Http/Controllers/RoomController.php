<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function index()
    {
        return Inertia::render('Rooms/Index', [
            'rooms' => Room::latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'room_number' => 'required|string|max:255|unique:rooms,room_number',
            'capacity' => 'required|integer|min:1',
            'occupants' => 'required|integer|min:0',
            'monthly_rent' => 'required|numeric|min:0',
        ]);

        if ($validated['occupants'] > $validated['capacity']) {
            return back()->withErrors([
                'occupants' => 'Occupants cannot exceed room capacity.',
            ]);
        }

        Room::create($validated);

        return redirect()->route('rooms.index')
            ->with('success', 'Room added successfully!');
    }

    public function update(Request $request, Room $room)
    {
        $validated = $request->validate([
            'room_number' => 'required|string|max:255|unique:rooms,room_number,' . $room->id,
            'capacity' => 'required|integer|min:1',
            'occupants' => 'required|integer|min:0',
            'monthly_rent' => 'required|numeric|min:0',
        ]);

        if ($validated['occupants'] > $validated['capacity']) {
            return back()->withErrors([
                'occupants' => 'Occupants cannot exceed room capacity.',
            ]);
        }

        $room->update($validated);

        return redirect()->route('rooms.index')
            ->with('success', 'Room updated successfully!');
    }

    public function destroy(Room $room)
    {
        $room->delete();

        return redirect()->route('rooms.index')
            ->with('success', 'Room deleted successfully!');
    }
}
