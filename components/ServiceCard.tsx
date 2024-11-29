import { useState } from 'react';
import DurationButton from './DurationButton';
interface ServiceCardProps {
  title: string;
  price: number;
  features: string[];
}

export default function ServiceCard({ title, price, features }: ServiceCardProps) {
  const [selectedDuration, setSelectedDuration] = useState('60 min');

  return (
    <div className="w-[360px] p-6 rounded-lg bg-[#0064D4] text-white">
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-bold font-geist-sans">₹{price.toLocaleString()}</span>
        <span className="text-base font-medium">/ session</span>
      </div>

      <div className="flex gap-2 mb-6">
        <DurationButton 
          duration="45 min" 
          isSelected={selectedDuration === '45 min'}
          onClick={() => setSelectedDuration('45 min')}
        />
        <DurationButton 
          duration="60 min" 
          isSelected={selectedDuration === '60 min'}
          onClick={() => setSelectedDuration('60 min')}
        />
        <DurationButton 
          duration="90 min" 
          isSelected={selectedDuration === '90 min'}
          onClick={() => setSelectedDuration('90 min')}
        />
      </div>

      <h2 className="text-xl font-semibold mb-6">{title}</h2>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-sm font-medium">
            {feature}
          </li>
        ))}
      </ul>

      <div className="h-px bg-white/30 mb-6" />

      <button className="w-full py-3.5 px-7 bg-white text-[#0064D4] rounded-md font-semibold text-lg hover:bg-white/90 transition-colors">
        Proceed
      </button>
    </div>
  );
}