'use client';

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold text-[#1F9FE6] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[#1F9FE6] mb-4">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        It seems we can't find the page you're looking for. Let's get you back on track!
      </p>
      <Link href="/" className="bg-[#1F9FE6] text-white py-3 px-6 rounded-lg font-semibold">
        Back to home
      </Link>
    </div>
  );
}