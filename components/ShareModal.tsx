'use client';

import { useState } from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageUrl: string;
}

export default function ShareModal({ isOpen, onClose, pageUrl }: ShareModalProps) {
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
          <path d="M18.8296 3.79313C16.7339 1.69738 13.9073 0.545654 10.9095 0.545654C4.75684 0.545654 -0.0735321 5.37603 -0.0735321 11.5287C-0.0735321 13.4741 0.43316 15.3693 1.39001 17.0334L-0.173828 22.0001L4.93652 20.4616C6.53468 21.3432 8.35145 21.8087 10.2052 21.8087H10.2053C16.358 21.8087 21.5457 16.9783 21.5457 10.8257C21.5457 7.82788 20.3937 5.00124 18.8296 3.79313ZM10.9095 19.9635C9.27099 19.9635 7.66798 19.5231 6.24974 18.6917L5.92973 18.4967L2.58648 19.4034L3.51301 16.1353L3.29819 15.8028C2.38161 14.3343 1.90111 12.6576 1.90111 10.9256C1.90111 6.39108 5.97499 2.31721 10.5095 2.31721C13.0072 2.31721 15.3486 3.29172 17.0879 5.03107C18.8273 6.77042 19.8023 9.11182 19.8023 11.6095C19.8023 16.144 15.3273 19.9635 10.9095 19.9635Z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="19" height="20" viewBox="0 0 19 20" fill="currentColor">
          <path d="M16.3333 0H19L12.2222 7.77778L20 20H13.8889L9.06667 12.5556L3.55556 20H0.888889L8.11111 11.7778L0.666667 0H6.93333L11.3333 6.88889L16.3333 0ZM14.7556 17.9778H16.4222L6 1.91111H4.22222L14.7556 17.9778Z"/>
        </svg>
      ),
    },
    {
      name: 'Mail',
      icon: (
        <svg width="23" height="18" viewBox="0 0 23 18" fill="currentColor">
          <path d="M20.5 0H2.5C1.4 0 0.5 0.9 0.5 2V16C0.5 17.1 1.4 18 2.5 18H20.5C21.6 18 22.5 17.1 22.5 16V2C22.5 0.9 21.6 0 20.5 0ZM20.5 4L11.5 10L2.5 4V2L11.5 8L20.5 2V4Z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 bg-[#484848] bg-opacity-45 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[614px] p-8 relative">
  
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-inter text-2xl font-semibold">Share</h2>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M17.1 0.9L16.2 0L9 7.2L1.8 0L0.9 0.9L8.1 8.1L0.9 15.3L1.8 16.2L9 9L16.2 16.2L17.1 15.3L9.9 8.1L17.1 0.9Z"/>
            </svg>
          </button>
        </div>

        <div className="mb-8">
          <h3 className="font-inter text-base font-semibold mb-3">Page Link</h3>
          <div className="flex gap-4">
            <div className="flex-1 bg-[#EAEAEA] rounded-lg p-4">
              <p className="text-[#686868] font-inter">{pageUrl}</p>
            </div>
            <button
              onClick={handleCopyLink}
              className="px-5 py-4 border border-[#2C73DE] rounded-lg text-[#2C73DE] font-inter font-semibold hover:bg-[#2C73DE] hover:text-white transition-colors"
            >
              Copy link
            </button>
          </div>
        </div>

        <div className="flex justify-between max-w-[489px]">
          {socialLinks.map((social) => (
            <div key={social.name} className="flex flex-col items-center gap-2">
              <button className="w-8 h-8 text-black hover:text-[#2C73DE] transition-colors">
                {social.icon}
              </button>
              <span className="text-[#7F7F7F] text-sm font-inter font-medium">
                {social.name}
              </span>
            </div>
          ))}
        </div>

        {showCopySuccess && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#73C3FF] text-[#005D91] px-4 py-2.5 rounded-lg font-inter font-semibold">
            Link copied!
          </div>
        )}
      </div>
    </div>
  );
}