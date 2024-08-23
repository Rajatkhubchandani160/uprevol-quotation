import React, { useEffect, useState } from 'react';
import SummaryApi from '../common/index'; // Adjust the import according to your project structure

const SaleStrip = () => {
  const [showStrip, setShowStrip] = useState(true);
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await fetch(SummaryApi.displaySale.url, {
          method: SummaryApi.displaySale.method,
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (data.success) {
          const currentSales = data.data.filter((sale) => 
            new Date(sale.expirationDate) > new Date()
          );
          setSales(currentSales);
        } else {
          console.error('Failed to fetch sales:', data.message);
        }
      } catch (err) {
        console.error('Failed to fetch sales:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSales();

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
      className={`fixed top-0 left-0 w-full bg-red-500 text-white py-2 overflow-hidden z-50 transition-transform duration-300 ease-in-out ${showStrip ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex whitespace-nowrap animate-scroll">
        {isLoading ? (
          <span className="inline-block px-4">Loading sales...</span>
        ) : sales.length > 0 ? (
          sales.map((sale, index) => (
            <span
              key={index}
              className="inline-block px-4"
            >
              {sale.message} Expires on: {new Date(sale.expirationDate).toLocaleDateString()} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
            </span>
          ))
        ) : (
          <span className="inline-block px-4">No current sales available</span>
        )}
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
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SaleStrip;
