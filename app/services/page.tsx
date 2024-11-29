'use client';

import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { useRouter } from 'next/navigation';

const features = [
  'Joint Evaluation',
  'Communication Exercises',
  'Conflict Resolution',
  'Goal Setting',
  'Follow up plan'
];

export default function ServicesPage() {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-white p-6">
      <header className="mb-6">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2.5">
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0601 10.5H6.31006L14.8601 2.4C15.1601 2.1 15.3101 1.7 15.3101 1.3C15.3101 0.9 15.1601 0.5 14.8601 0.2C14.2601 -0.4 13.3101 -0.4 12.7101 0.2L0.460059 12C0.160059 12.3 0.0100586 12.7 0.0100586 13.1C0.0100586 13.5 0.160059 13.9 0.460059 14.2L12.7101 26C13.0101 26.3 13.4101 26.45 13.8101 26.45C14.2101 26.45 14.6101 26.3 14.9101 26C15.2101 25.7 15.3601 25.3 15.3601 24.9C15.3601 24.5 15.2101 24.1 14.9101 23.8L6.31006 15.7H25.0601C25.8601 15.7 26.5101 15.05 26.5101 14.25C26.5101 13.45 25.8601 12.8 25.0601 12.8V10.5Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <h1 className="text-lg font-semibold">Available sessions</h1>
        </div>

        <div className="flex items-center gap-2.5 bg-[#C2E1F9] border border-[#015DB0] rounded-md px-6 py-2.5 mb-8">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z"
              fill="#015DB2"
            />
          </svg>
          <span className="text-sm font-medium text-[#015DB2] flex-1">
            Click on the duration to see the pricing details
          </span>
          <button className="text-[#015DB2]">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8023 1.41L11.3923 0L6.80234 4.59L2.21234 0L0.802344 1.41L5.39234 6L0.802344 10.59L2.21234 12L6.80234 7.41L11.3923 12L12.8023 10.59L8.21234 6L12.8023 1.41Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div onClick={()=>{
            router.push("/slot-selection")
        }}>
        <ServiceCard  
          title="Group Therapy" 
          price={3200}
          features={features}
        />
        </div>
        <div onClick={()=>{
            router.push("/slot-selection")
        }}>
        <ServiceCard  
          title="Individual Therapy" 
          price={3200}
          features={features}
        />
        </div>
        <div onClick={()=>{
            router.push("/slot-selection")
        }}>
        <ServiceCard  
          title="Couple Therapy" 
          price={3200}
          features={features}
        />
        </div>
    
      </div>
    </div>
  );
}