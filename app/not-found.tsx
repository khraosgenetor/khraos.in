'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname() || ''; // immutable hook value

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white text-center p-4">
            <h1 className="text-7xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-4">
                Oops! The page <span className="font-mono">{pathname}</span> does not exist.
            </p>
            <Link
                href="/"
                className="mt-6 inline-block px-6 py-3 bg-red-700 rounded-lg hover:bg-red-800 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
