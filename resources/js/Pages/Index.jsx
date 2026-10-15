
import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ rooms = [] }) {
    const { data, setData, post, put, delete: destroy, processing, errors, reset } = useForm({
        room_number: '',
        capacity: 1,
        occupants: 0,
        monthly_rent: '',
    });

    const [editingRoom, setEditingRoom] = React.useState(null);

    function submit(e) {
        e.preventDefault();

        if (editingRoom) {
            put(`/rooms/${editingRoom.id}`, {
                onSuccess: () => {
                    reset();
                    setEditingRoom(null);
                },
            });
        } else {
            post('/rooms', {
                onSuccess: () => reset(),
            });
        }
    }

    function editRoom(room) {
        setEditingRoom(room);
        setData({
            room_number: room.room_number,
            capacity: room.capacity,
            occupants: room.occupants,
            monthly_rent: room.monthly_rent,
        });
    }

    function cancelEdit() {
        setEditingRoom(null);
        reset();
    }

    function deleteRoom(room) {
        if (window.confirm(`Delete room ${room.room_number}?`)) {
            destroy(`/rooms/${room.id}`);
        }
    }

    return (
        <>
            <Head title="Room Management - JianeDorms" />

            <div className="min-h-screen bg-gray-100">
                <nav className="flex items-center justify-between bg-blue-800 px-6 py-4 text-white">
                    <h1 className="text-xl font-bold">JianeDorms</h1>
                    <div className="flex gap-4">
                        <Link href="/dashboard" className="hover:underline">
                            Dashboard
                        </Link>
                        <Link href="/rooms" className="font-semibold underline">
                            Rooms
                        </Link>
                        <Link href="/tenants" className="hover:underline">
                            Tenants
                        </Link>
                    </div>
                </nav>

                <main className="mx-auto max-w-6xl p-6">
                    <h2 className="mb-2 text-3xl font-bold text-gray-800">
                        Room Management
                    </h2>
                    <p className="mb-6 text-gray-600">
                        Manage room numbers, capacity, occupants, and monthly rent.
                    </p>

                    <section className="mb-8 rounded-xl bg-white p-6 shadow">
                        <h3 className="mb-4 text-xl font-semibold">
                            {editingRoom ? 'Edit Room' : 'Add New Room'}
                        </h3>

                        <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1 block">Room Number</label>
                                <input
                                    className="w-full rounded-lg border p-3"
                                    value={data.room_number}
                                    onChange={e => setData('room_number', e.target.value)}
                                    placeholder="e.g. Room 101"
                                    required
                                />
                                {errors.room_number && (
                                    <p className="text-sm text-red-600">{errors.room_number}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block">Room Capacity</label>
                                <input
                                    type="number"
                                    min="1"
                                    className="w-full rounded-lg border p-3"
                                    value={data.capacity}
                                    onChange={e => setData('capacity', e.target.value)}
                                    required
                                />
                                {errors.capacity && (
                                    <p className="text-sm text-red-600">{errors.capacity}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block">Current Occupants</label>
                                <input
                                    type="number"
                                    min="0"
                                    className="w-full rounded-lg border p-3"
                                    value={data.occupants}
                                    onChange={e => setData('occupants', e.target.value)}
                                    required
                                />
                                {errors.occupants && (
                                    <p className="text-sm text-red-600">{errors.occupants}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block">Monthly Rent (₱)</label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    className="w-full rounded-lg border p-3"
                                    value={data.monthly_rent}
                                    onChange={e => setData('monthly_rent', e.target.value)}
                                    placeholder="e.g. 2500"
                                    required
                                />
                                {errors.monthly_rent && (
                                    <p className="text-sm text-red-600">{errors.monthly_rent}</p>
                                )}
                            </div>

                            <div className="flex gap-3 md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
                                >
                                    {processing
                                        ? 'Saving...'
                                        : editingRoom
                                            ? 'Update Room'
                                            : 'Add Room'}
                                </button>

                                {editingRoom && (
                                    <button
                                        type="button"
                                        onClick={cancelEdit}
                                        className="rounded-lg bg-gray-200 px-5 py-3"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </section>

                    <section className="overflow-x-auto rounded-xl bg-white p-6 shadow">
                        <h3 className="mb-4 text-xl font-semibold">Room List</h3>

                        <table className="w-full text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3">Room</th>
                                    <th className="p-3">Capacity</th>
                                    <th className="p-3">Occupants</th>
                                    <th className="p-3">Monthly Rent</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {rooms.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="p-6 text-center text-gray-500">
                                            No rooms yet. Add your first room above.
                                        </td>
                                    </tr>
                                ) : (
                                    rooms.map(room => (
                                        <tr key={room.id} className="border-b">
                                            <td className="p-3 font-medium">{room.room_number}</td>
                                            <td className="p-3">{room.capacity}</td>
                                            <td className="p-3">{room.occupants}</td>
                                            <td className="p-3">
                                                ₱{Number(room.monthly_rent).toLocaleString('en-PH', {
                                                    minimumFractionDigits: 2,
                                                })}
                                            </td>
                                            <td className="p-3">
                                                {room.occupants >= room.capacity ? (
                                                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                                                        Full
                                                    </span>
                                                ) : (
                                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                                        Available
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-3">
                                                <div className="flex gap-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => editRoom(room)}
                                                        className="font-medium text-blue-700 hover:underline"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => deleteRoom(room)}
                                                        className="font-medium text-red-600 hover:underline"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </section>
                </main>

                <footer className="mt-10 bg-gray-900 p-4 text-center text-sm text-white">
                    © {new Date().getFullYear()} JianeDorms Boarding House Management System
                </footer>
            </div>
        </>
    );
}
