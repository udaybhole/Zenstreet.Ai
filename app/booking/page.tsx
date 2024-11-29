'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function BookingConfirmationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+91 9000 000000');
  const [company, setCompany] = useState('');
  const [isEmployed, setIsEmployed] = useState(false);
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-[874px] bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none">
              <path d="M19.5 7.5C19.5 12.5 10.5 16.5 10.5 16.5C10.5 16.5 1.5 12.5 1.5 7.5C1.5 5.51088 2.29018 3.60322 3.6967 2.1967C5.10322 0.790176 7.01088 0 9 0C10.9891 0 12.8968 0.790176 14.3033 2.1967C15.7098 3.60322 16.5 5.51088 16.5 7.5Z" fill="currentColor"/>
            </svg>
            <span className="font-inter text-sm font-semibold text-white">Change date</span>
          </div>
          <div className="text-white">
            <span className="font-inter text-lg font-semibold">Sat, 06 Aug</span>
            <br />
            <span className="font-inter text-base">3:30 PM - 4:20 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM14 25.2C7.59644 25.2 2.8 20.4036 2.8 14C2.8 7.59644 7.59644 2.8 14 2.8C20.4036 2.8 25.2 7.59644 25.2 14C25.2 20.4036 20.4036 25.2 14 25.2Z" fill="white"/>
            </svg>
            <span className="font-poppins text-2xl font-semibold text-white">₹ 2,400/-</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 p-4 border rounded-md text-gray-700"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 p-4 border rounded-md text-gray-700"
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border rounded-md text-gray-700"
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 p-4 border rounded-md">
              <span className="text-gray-700">🇮🇳</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 text-gray-700"
              />
            </div>
            <span className="text-sm text-gray-500">i. You will receive booking details on WhatsApp</span>
          </div>
          <div className="space-y-4">
            <h3 className="font-inter text-lg font-medium">Have you been referred by your employer?</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsEmployed(!isEmployed)}
                className={`flex items-center gap-2 px-4 py-3 rounded-md transition-colors ${
                  isEmployed ? 'bg-[#1F9FE6] text-white' : 'border text-gray-700'
                }`}
              >
                {isEmployed && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 10.2L3.8 8L2.4 9.4L6 13L14 5L12.6 3.6L6 10.2Z" fill="white"/>
                  </svg>
                )}
                Yes, I am employed under a partnering company
              </button>
              <input
                type="text"
                placeholder='"Partnering Company Name" or "Company ID"'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="flex-1 p-4 border rounded-md text-gray-700"
              />
              <button className="px-6 py-3 bg-[#1F9FE6] text-white rounded-md">Verify</button>
            </div>
          </div>
        </div>

        <button onClick={()=>{
            router.push("/booking-confirmation")
        }}
         className="w-full mt-8 py-4 bg-gray-400 text-white rounded-md font-semibold" >
          Book session
        </button>
      </div>
    </div>
  );
}