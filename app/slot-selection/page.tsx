'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SlotSelectionPage() {
  const [selectedMode, setSelectedMode] = useState('In-person');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const router = useRouter();

  const modes = ['In-person', 'Video', 'Call'];
  const slots = [
    '8:00 - 8:45 AM', '9:00 - 9:45 AM', '11:00 - 11:45 AM',
    '12:00 - 12:45 PM', '2:00 - 2:45 PM', '3:00 - 3:45 PM',
    '5:00 - 5:45 PM', '6:00 - 6:45 PM', '7:00 - 7:45 PM'
  ];

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Array(35).fill(null);
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < daysInMonth; i++) {
      days[firstDay + i - 1] = i + 1;
    }

    return days;
  };

  const changeMonth = (increment: number) => {
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  const isDateAvailable = (day: number | null) => {
    // This is a placeholder. In a real application, you'd check against actual availability data.
    return day !== null && day % 2 === 0;
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <header className="mb-6">
        <h1 className="text-lg font-semibold">Select therapy mode</h1>
      </header>

      <div className="flex gap-8 mb-8">
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => setSelectedMode(mode)}
            className={`w-32 h-32 flex items-center justify-center rounded-lg transition-colors ${
              selectedMode === mode ? 'bg-[#1F9FE6] text-white' : 'bg-white text-[#015DB2] border border-[#015DB2]'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      <section className="flex flex-col items-start gap-11 w-full">
        <header className="text-2xl font-medium text-black">Filter by</header>
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex gap-3">
            {["Slots", "Date"].map((filter, index) => (
              <button
                key={index}
                className={`w-[220px] h-[57px] flex items-center justify-center rounded-[90px] ${
                  filter === "Slots"
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black"
                }`}
              >
                <span className="text-xl font-medium">{filter}</span>
              </button>
            ))}
          </div>

          <div className="w-full max-w-[1024px] bg-white rounded-[14px] shadow-md p-6">
            <header className="flex justify-between items-center mb-4">
              <span className="text-2xl font-medium">Available date</span>
              <div className="flex items-center gap-4">
                <button onClick={() => changeMonth(-1)} className="p-2">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-2xl font-medium">
                  {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
                <button onClick={() => changeMonth(1)} className="p-2">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </header>
            <div className="grid grid-cols-7 gap-4">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center font-medium">{day}</div>
              ))}
              {getDaysInMonth(currentMonth).map((day, index) => (
                <button
                  key={index}
                  onClick={() => day && isDateAvailable(day) && setSelectedDate(`${day}/${currentMonth.getMonth() + 1}/${currentMonth.getFullYear()}`)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${
                    day && isDateAvailable(day)
                      ? selectedDate === `${day}/${currentMonth.getMonth() + 1}/${currentMonth.getFullYear()}`
                        ? 'bg-[#1F9FE6] text-white'
                        : 'text-[#0085cf] hover:bg-[#1F9FE6] hover:text-white'
                      : 'text-[#afafaf] cursor-not-allowed'
                  }`}
                  disabled={!day || !isDateAvailable(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4 self-start">Select slots</h2>
          <div className="grid grid-cols-3 gap-4 mb-8 w-full">
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`p-4 border rounded-lg transition-colors ${
                  selectedSlot === slot ? 'bg-[#1F9FE6] text-white' : 'bg-white text-[#015DB2] hover:bg-[#1F9FE6] hover:text-white'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>

          <button
            onClick={() => router.push("/booking")}
            className={`w-full py-3 rounded-lg font-semibold ${
              selectedSlot && selectedDate
                ? 'bg-[#1F9FE6] text-white hover:bg-[#1788c7]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!selectedSlot || !selectedDate}
          >
            Proceed
          </button>
        </div>
      </section>
    </div>
  );
}

