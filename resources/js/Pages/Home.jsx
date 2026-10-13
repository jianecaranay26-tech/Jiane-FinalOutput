import { Head, Link } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home - JianeDorms" />

            <div className="min-h-screen bg-white text-gray-800">
                {/* Navbar */}
                <nav className="border-b bg-white">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                        <Link href="/" className="text-2xl font-extrabold text-blue-700">
                            JianeDorms
                        </Link>

                        <div className="flex items-center gap-3">
                            <Link
                                href={route('login')}
                                className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-100"
                            >
                                Login
                            </Link>

                            <Link
                                href={route('register')}
                                className="rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white hover:bg-blue-800"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-50 to-white">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
                        <div>
                            <p className="mb-4 font-bold uppercase tracking-widest text-blue-700">
                                Boarding House Management System
                            </p>

                            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                                Manage Your Boarding House with Ease
                            </h1>

                            <p className="mt-6 leading-8 text-gray-600">
                                JianeDorms helps boarding house owners organize
                                rooms, tenant information, and monthly rental
                                payments in one convenient system.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href={route('register')}
                                    className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
                                >
                                    Get Started
                                </Link>

                                <Link
                                    href={route('login')}
                                    className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
                                >
                                    Login to Account
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-blue-700 p-8 text-white shadow-xl sm:p-12">
                            <div className="mb-8 text-5xl">🏠</div>

                            <h2 className="text-3xl font-bold">
                                Welcome to JianeDorms
                            </h2>

                            <p className="mt-4 leading-7 text-blue-100">
                                A simple way to keep your boarding house
                                records organized and accessible.
                            </p>

                            <div className="mt-8 space-y-4">
                                <div className="rounded-xl bg-white p-4 text-gray-800">
                                    <p className="font-bold">Room Management</p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Track room capacity and availability.
                                    </p>
                                </div>

                                <div className="rounded-xl bg-white p-4 text-gray-800">
                                    <p className="font-bold">Tenant Records</p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Keep tenant information organized.
                                    </p>
                                </div>

                                <div className="rounded-xl bg-white p-4 text-gray-800">
                                    <p className="font-bold">Rental Payments</p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Monitor monthly rental payments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="mx-auto max-w-4xl px-6 py-16 text-center">
                    <h2 className="text-3xl font-bold">About JianeDorms</h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Managing a boarding house can be challenging when
                        room assignments, tenant details, and payments are
                        recorded manually. JianeDorms aims to make these tasks
                        easier through a centralized management system.
                    </p>
                </section>

                {/* Features */}
                <section className="bg-gray-50 px-6 py-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold">
                                Our System Features
                            </h2>
                            <p className="mt-3 text-gray-600">
                                Everything organized in one place.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            <div className="rounded-2xl bg-white p-7 shadow-sm">
                                <div className="text-3xl">🛏️</div>
                                <h3 className="mt-4 text-xl font-bold">
                                    Room Management
                                </h3>
                                <p className="mt-3 leading-7 text-gray-600">
                                    Add, update, view, and manage boarding
                                    house rooms.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-7 shadow-sm">
                                <div className="text-3xl">👥</div>
                                <h3 className="mt-4 text-xl font-bold">
                                    Tenant Management
                                </h3>
                                <p className="mt-3 leading-7 text-gray-600">
                                    Maintain organized tenant records and
                                    room assignments.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-7 shadow-sm">
                                <div className="text-3xl">💳</div>
                                <h3 className="mt-4 text-xl font-bold">
                                    Payment Monitoring
                                </h3>
                                <p className="mt-3 leading-7 text-gray-600">
                                    Record monthly rent and monitor payment
                                    status.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="px-6 py-16">
                    <div className="mx-auto max-w-5xl rounded-2xl bg-blue-700 px-6 py-12 text-center text-white sm:px-12">
                        <h2 className="text-3xl font-bold">
                            Start Managing Your Boarding House
                        </h2>

                        <p className="mt-4 text-blue-100">
                            Use JianeDorms to help organize your daily
                            management tasks.
                        </p>

                        <Link
                            href={route('register')}
                            className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-bold text-blue-700 hover:bg-blue-50"
                        >
                            Create an Account
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 px-6 py-8 text-center text-white">
                    <h3 className="text-xl font-bold">JianeDorms</h3>
                    <p className="mt-2 text-sm text-gray-400">
                        Boarding House Management System
                    </p>
                    <p className="mt-4 text-sm text-gray-500">
                        © {new Date().getFullYear()} JianeDorms. All rights reserved.
                    </p>
                </footer>
            </div>
        </>
    );
}
