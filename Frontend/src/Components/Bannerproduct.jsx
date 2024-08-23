import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';

const Bannerproduct = () => {
  const [banners, setBanners] = useState([]);
  const defaultImage = 'path_to_your_sample_image.jpg'; // Replace with the path to your sample image

  const fetchBanners = async () => {
    try {
      const response = await fetch(SummaryApi.displaybanners.url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log("Fetched data: ", data);
      setBanners(data.data);
    } catch (error) {
      console.error('Failed to fetch banners', error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className='mx-auto container px-4 overflow-hidden mt-1'>
      <div className="h-48 md:h-80 w-full carousel rounded-box ">
        {banners.length > 0 ? (
          banners.map((banner, index) => (
            <div key={banner._id} className="carousel-item w-full">
              <img src={banner.imageUrl} className="w-full " alt={banner.title} />
            </div>
          ))
        ) : (
          <div className="carousel-item w-full">
            <img src={defaultImage} className="w-full object-cover" alt="Sample Banner" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Bannerproduct;
