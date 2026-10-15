import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ tenants = [], rooms = [] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        phone: '',
        email: '',
        room_id: '',
        move_in_date: '',
        monthly_rent: '',
    });

    function submit(e) {
        e.preventDefault();

        post('/tenants', {
            onSuccess: () => reset(),
        });
    }

    return (
        <>
            <Head title="Tenant Management" />

            <div className="min-h-screen bg-gray-100 p-6">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Tenant Management
                            </h1>
                            <p className="mt-2 text-gray-600">
                                Manage your boarding-house tenants.
                            </p>
                        </div>

                        <Link
                            href="/dashboard"
                            className="rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
                        >
                            Dashboard
                        </Link>
                    </div>

                    <div className="mb-8 rounded-xl bg-white p-6 shadow">
                        <h2 className="mb-4 text-xl font-semibold">
                            Add New Tenant
                        </h2>

                        <form
                            onSubmit={submit}
                            className="grid gap-4 md:grid-cols-2"
                        >
                            <div>
                                <label className="mb-1 block">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border p-2"
                                    value={data.full_name}
                                    onChange={e =>
                                        setData('full_name', e.target.value)
                                    }
                                    required
                                />
                                {errors.full_name && (
                                    <p className="text-sm text-red-600">
                                        {errors.full_name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full rounded-lg border p-2"
                                    value={data.phone}
                                    onChange={e =>
                                        setData('phone', e.target.value)
                                    }
                                    required
                                />
                                {errors.phone && (
                                    <p className="text-sm text-red-600">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block">
                                    Email (Optional)
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border p-2"
                                    value={data.email}
                                    onChange={e =>
                                        setData('email', e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block">Room</label>
                                <select
                                    className="w-full rounded-lg border p-2"
                                    value={data.room_id}
                                    onChange={e =>
                                        setData('room_id', e.target.value)
                                    }
                                >
                                    <option value="">
                                        No room assigned
                                    </option>

                                    {rooms.map(room => (
                                        <option
                                            key={room.id}
                                            value={room.id}
                                        >
                                            {room.room_number}
                                        </option>
                                    ))}
                                </select>
                                {errors.room_id && (
                                    <p className="text-sm text-red-600">
                                        {errors.room_id}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block">
                                    Move-in Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full rounded-lg border p-2"
                                    value={data.move_in_date}
                                    onChange={e =>
                                        setData('move_in_date', e.target.value)
                                    }
                                    required
                                />
                                {errors.move_in_date && (
                                    <p className="text-sm text-red-600">
                                        {errors.move_in_date}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block">
                                    Monthly Rent (₱)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    className="w-full rounded-lg border p-2"
                                    value={data.monthly_rent}
                                    onChange={e =>
                                        setData('monthly_rent', e.target.value)
                                    }
                                    required
                                />
                                {errors.monthly_rent && (
                                    <p className="text-sm text-red-600">
                                        {errors.monthly_rent}
                                    </p>
                                )}
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {processing
                                        ? 'Saving...'
                                        : 'Add Tenant'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="overflow-x-auto rounded-xl bg-white p-6 shadow">
                        <h2 className="mb-4 text-xl font-semibold">
                            Tenant Records
                        </h2>

                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b bg-gray-50">
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Phone</th>
                                    <th className="p-3">Room</th>
                                    <th className="p-3">Move-in Date</th>
                                    <th className="p-3">Monthly Rent</th>
                                </tr>
                            </thead>

                            <tbody>
                                {tenants.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="p-6 text-center text-gray-500"
                                        >
                                            No tenants yet. Add your first
                                            tenant above.
                                        </td>
                                    </tr>
                                ) : (
                                    tenants.map(tenant => (
                                        <tr
                                            key={tenant.id}
                                            className="border-b"
                                        >
                                            <td className="p-3">
                                                {tenant.full_name}
                                            </td>
                                            <td className="p-3">
                                                {tenant.phone}
                                            </td>
                                            <td className="p-3">
                                                {tenant.room?.room_number ??
                                                    'No room assigned'}
                                            </td>
                                            <td className="p-3">
                                                {tenant.move_in_date}
                                            </td>
                                            <td className="p-3">
                                                ₱
                                                {Number(
                                                    tenant.monthly_rent
                                                ).toLocaleString('en-PH', {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                })}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}