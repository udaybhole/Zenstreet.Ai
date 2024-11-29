'use client';

import Link from 'next/link';

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Congratulations! Your therapy session has been successfully scheduled. We're looking forward to helping you on your journey to better mental health.
      </p>
      <div className="bg-[#1F9FE6] text-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ul className="list-disc list-inside">
          <li>A confirmation email with all the session details has been sent to your email.</li>
          <li>If this is your first session, consider jotting down any key points or questions you want to discuss.</li>
        </ul>
      </div>
      <Link href="/" className="bg-[#1F9FE6] text-white py-3 px-6 rounded-lg font-semibold">
        Back to home
      </Link>
    </div>
  );
}