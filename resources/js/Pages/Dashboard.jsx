import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ stats = {} }) {
    const cards = [
        {
            title: 'Total Rooms',
            value: stats.totalRooms ?? 0,
            color: 'bg-blue-100 text-blue-700',
        },
        {
            title: 'Available Rooms',
            value: stats.availableRooms ?? 0,
            color: 'bg-green-100 text-green-700',
        },
        {
            title: 'Full Rooms',
            value: stats.fullRooms ?? 0,
            color: 'bg-orange-100 text-orange-700',
        },
    ];

    return (
        <>
            <Head title="JianeDorms Dashboard" />

            <div className="min-h-screen bg-gray-100">
                <header className="bg-white shadow">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                        <h1 className="text-2xl font-bold text-blue-700">
                            JianeDorms
                        </h1>

                        <Link
                            href="/"
                            className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                            Home Page
                        </Link>
                    </div>
                </header>

                <main className="mx-auto max-w-7xl px-6 py-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Dashboard
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Welcome to your Boarding House Management System.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {cards.map((card) => (
                            <div
                                key={card.title}
                                className="rounded-xl bg-white p-6 shadow-sm"
                            >
                                <p className="text-sm text-gray-500">
                                    {card.title}
                                </p>

                                <p className="mt-3 text-4xl font-bold text-gray-800">
                                    {card.value}
                                </p>

                                <span className={`mt-4 inline-block rounded-full px-3 py-1 text-sm ${card.color}`}>
                                    Room Statistics
                                </span>
                            </div>
                        ))}
                    </div>

                    <h3 className="mt-10 text-xl font-bold text-gray-800">
                        Management
                    </h3>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Link
                            href="/rooms"
                            className="rounded-xl bg-blue-600 p-5 font-semibold text-white hover:bg-blue-700"
                        >
                            Manage Rooms →
                        </Link>

                        <div className="rounded-xl border border-gray-200 bg-white p-5 font-semibold text-gray-700">
                            Tenant Management
                            <p className="mt-2 text-sm font-normal text-gray-500">
                                Manage tenant information.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-5 font-semibold text-gray-700">
                            Rental Payments
                            <p className="mt-2 text-sm font-normal text-gray-500">
                                Monitor monthly payments.
                            </p>
                        </div>
                    </div>
                </main>

                <footer className="mt-10 border-t bg-white px-6 py-5 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} JianeDorms
                </footer>
            </div>
        </>
    );
}