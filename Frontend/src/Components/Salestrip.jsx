// SaleStrip.jsx
import React, { useEffect, useState } from 'react';

const SaleStrip = () => {
  const [showStrip, setShowStrip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowStrip(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-red-500 text-white py-2 overflow-hidden z-50 transition-transform ${showStrip ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="marquee whitespace-nowrap">
        <span className="inline-block px-4" style={{ animation: 'scroll 30s linear infinite' }}>
          Super Sale! Get up to 50% off on selected electronics! &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        </span>
        <span className="inline-block px-4" style={{ animation: 'scroll 30s linear infinite' }}>
          Super Sale! Get up to 50% off on selected electronics! &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        </span>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .marquee {
          display: flex;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SaleStrip;
