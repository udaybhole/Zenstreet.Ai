'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ShareModal from '@/components/ShareModal';
import CredentialItem from '@/components/CredentialItem';
export default function LandingPage() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const pageUrl = "http://localhost:3000/share"; 

  return (
    <div className="min-h-screen flex">
      <div className="w-[571px] bg-[#1F9FE6] relative px-5 py-6">
        <div className="absolute top-0 left-0 w-[297px] h-[297px] rounded-full bg-[#208CC9] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[339px] h-[339px] rounded-full bg-[#208CC9] opacity-50" />
        
       

        <div className="bg-white rounded-lg p-5 relative">
          <div className="flex flex-col gap-3">
            <div className="relative w-[238px] h-[238px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/placeholder"

                alt="Your Profile Photo"
                fill
                className="object-cover"
              />
              <button
                onClick={() => setIsShareModalOpen(true)}
                className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z" fill="#015DB2"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2.5">
              <h1 className="font-poppins text-[22px] font-semibold">Swetha Varma</h1>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
                <path d="M11 0L13.5857 7.91844H22L15.2072 12.8316L17.7928 20.75L11 15.8368L4.20717 20.75L6.79283 12.8316L0 7.91844H8.41434L11 0Z" fill="#318BF0"/>
              </svg>
            </div>
            <p className="font-poppins text-lg font-medium">Consultant Clinical Psychologist</p>
            <p className="font-poppins text-base font-medium">10+ Years of experience</p>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="black"/>
              </svg>
              <span className="font-inter text-base font-medium text-gray-500">Block A2, Delhi</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link 
            href="/services"
            className="block w-full bg-white text-[#0069D5] text-center font-poppins text-2xl font-semibold py-4 px-6 rounded-lg"
          >
            Book session
          </Link>
        </div>
      </div>

      <div className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-3xl space-y-24">
          <section>
            <h2 className="font-poppins text-2xl font-medium mb-2">About me</h2>
            <p className="font-poppins text-lg font-medium text-[#4C5863] mb-4">
              Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.
            </p>
            <button className="text-[#015DC5] font-inter text-base font-medium">
              Read more
            </button>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-medium mb-6">Credentials</h2>
            <div className="space-y-6">
              <CredentialItem
                icon={<svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor"><path d="M22 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H22C23.1 16 24 15.1 24 14V2C24 0.9 23.1 0 22 0ZM22 14H2V2H22V14ZM21 4H12V12H21V4Z"/></svg>}
                text="Ph.D. in Clinical Psychology - Harvard University"
              />
              <CredentialItem
                icon={<svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor"><path d="M22 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H22C23.1 16 24 15.1 24 14V2C24 0.9 23.1 0 22 0ZM22 14H2V2H22V14ZM21 4H12V12H21V4Z"/></svg>}
                text="M.A. in Counseling - University of California, Berkeley"
              />
              <CredentialItem
                icon={<svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor"><path d="M22 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H22C23.1 16 24 15.1 24 14V2C24 0.9 23.1 0 22 0ZM22 14H2V2H22V14ZM21 4H12V12H21V4Z"/></svg>}
                text="Licensed Professional Counselor (LPC) - State of DEF"
              />
              <CredentialItem
                icon={<svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor"><path d="M22 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H22C23.1 16 24 15.1 24 14V2C24 0.9 23.1 0 22 0ZM22 14H2V2H22V14ZM21 4H12V12H21V4Z"/></svg>}
                text="Certified Cognitive Behavioral Therapist (CBT)"
              />
            </div>
          </section>

          {/* Available Sessions Section */}
          <section>
            <h2 className="font-poppins text-2xl font-medium mb-6">Available on</h2>
            <div className="flex gap-16">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-[102px] h-[102px] bg-[#C6E3FF] rounded-lg flex items-center justify-center">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <path d="M13.125 24.0625H21.875V15.3125H13.125V24.0625ZM15.3125 17.5H19.6875V21.875H15.3125V17.5ZM30.625 13.125V30.625H4.375V13.125H30.625ZM30.625 10.9375H4.375V4.375H30.625V10.9375ZM32.8125 2.1875H2.1875C1.51576 2.1875 0.871467 2.45033 0.398097 2.9237C-0.0752722 3.39707 -0.337891 4.04136 -0.337891 4.7131V30.625C-0.337891 31.9684 0.844141 32.8125 2.1875 32.8125H32.8125C34.1559 32.8125 35.3379 31.9684 35.3379 30.625V4.375C35.3379 3.03164 34.1559 2.1875 32.8125 2.1875Z" fill="#218BD0"/>
                  </svg>
                </div>
                <span className="font-inter text-base font-semibold text-[#516E89]">In-person</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-[102px] h-[102px] bg-[#C6E3FF] rounded-lg flex items-center justify-center">
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <path d="M25.375 20.0469V23.5625C25.375 24.0144 25.1905 24.4478 24.8624 24.7759C24.5343 25.104 24.1009 25.2885 23.649 25.2885C19.6931 25.2885 15.8787 23.9501 12.7146 21.5925C9.77074 19.4225 7.32754 16.9793 5.15754 14.0354C2.79375 10.8598 1.45531 7.03114 1.45531 3.06277C1.45531 2.61216 1.63906 2.17999 1.96641 1.85264C2.29376 1.52529 2.72593 1.34154 3.17654 1.34154H6.69217C7.53873 1.34154 8.25873 1.94279 8.4087 2.77498C8.64432 4.15904 9.06213 5.50186 9.64901 6.76373C9.91588 7.37935 9.78029 8.09935 9.30904 8.57929L7.32754 10.5608C9.3552 13.5276 11.8099 15.9823 14.7767 18.01L16.7582 16.0285C17.2382 15.5572 17.9582 15.4216 18.5738 15.6885C19.8356 16.2754 21.1785 16.6932 22.5625 16.9288C23.4062 17.0788 23.9963 17.8102 23.9963 18.6568L25.375 20.0469ZM27.7917 14.5H24.9583C24.9583 11.3521 23.7093 8.33385 21.4901 6.11462C19.2708 3.89539 16.2526 2.64637 13.1047 2.64637V-0.187292C17.0605 -0.187292 20.8749 1.51196 23.6432 4.28027C26.4115 7.04858 28.1107 10.863 28.1107 14.8187L27.7917 14.5Z" fill="#218BD0"/>
                  </svg>
                </div>
                <span className="font-inter text-base font-semibold text-[#516E89]">Video/ Voice call</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-medium mb-4.5">I offer therapy for</h2>
            <div className="flex flex-wrap gap-4.5">
              {['Stress Management', 'Relationship Skills', 'Anxiety Reduction', 'Depression Relief', 'Behavioral', 'Trauma Healing'].map((type) => (
                <div key={type} className="px-4 py-4 bg-white rounded border border-[#E5E7EB] shadow-sm">
                  <span className="font-poppins text-lg font-medium text-[#0A2C4C]">
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="flex gap-[212px]">
            <div>
              <div className="flex items-center gap-1.5 mb-3.5">
                <h2 className="font-poppins text-2xl font-medium">Iam from</h2>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" stroke="black">
                  <path d="M17.5 7.5C17.5 12.5 9.5 16.5 9.5 16.5C9.5 16.5 1.5 12.5 1.5 7.5C1.5 5.51088 2.29018 3.60322 3.6967 2.1967C5.10322 0.790176 7.01088 0 9 0C10.9891 0 12.8968 0.790176 14.3033 2.1967C15.7098 3.60322 16.5 5.51088 16.5 7.5Z" />
                </svg>
              </div>
              <p className="font-poppins text-xl font-medium text-[#4C5863]">Chennai, India</p>
            </div>
            <div>
              <h2 className="font-poppins text-2xl font-medium mb-3.5">Languages</h2>
              <p className="font-poppins text-xl font-medium text-[#4C5863]">English, Hindi</p>
            </div>
          </div>

          <section>
            <div className="flex justify-between items-center mb-9.5">
              <h2 className="font-poppins text-2xl font-medium">Client Testimonials</h2>
              <button className="flex items-center gap-2 text-[#3D3D3D]">
                <span onClick={()=>{




                }} className="font-poppins text-lg font-medium">Show more</span>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="currentColor">
                  <path d="M1.91 0.580078L6.5 5.17008L11.09 0.580078L12.5 2.00008L6.5 8.00008L0.5 2.00008L1.91 0.580078Z"/>
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-12">
              {[
                { quote: "The guidance I received helped me manage my stress and live a more balanced life.", author: "Anonymous" },
                { quote: "Therapy helped me build self-esteem and confidence that I never thought possible.", author: "Anonymous" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex gap-1">
                        <span className="text-[#318BF0] text-4xl">"</span>
                        <span className="text-[#318BF0] text-4xl">"</span>
                      </div>
                      <div className="px-2.5">
                        <p className="font-poppins text-base font-medium leading-6">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-poppins text-base font-medium">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        pageUrl={pageUrl}
      />
    </div>
  );
}