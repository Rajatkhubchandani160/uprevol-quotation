import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';

const Coursel = () => {
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
    <div className="carousel w-full h-[30vh] lg:h-[90vh]">
      {banners.length > 0 ? (
        banners.map((banner, index) => (
          <div key={banner._id} id={`slide${index + 1}`} className="carousel-item relative w-full h-full">
            <img 
              src={banner.imageUrl} 
              alt={banner.title} 
              className="w-full h-full  object-fit"
            />
            <div className="absolute flex justify-between transform -translate-y-[60%] left-6 md:left-24 right-5 top-1/2">
            </div>
            <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${index === 0 ? banners.length : index}`} className="btn btn-circle">❮</a>
              <a href={`#slide${(index + 1) % banners.length + 1}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))
      ) : (
        <div className="carousel-item relative w-full h-full">
          <img src={defaultImage} alt="Sample Banner" className="w-full h-full object-cover sm:object-contain" />
          <div className="absolute flex justify-between transform -translate-y-[60%] left-6 md:left-24 right-5 top-1/2">
            <div className="text-white">
              <h2 className="font-bold text-2xl md:text-4xl my-4 capitalize">Sample Title</h2>
              <p className="font-bold text-lg md:text-xl capitalize">Sample Subtitle</p>
              <p className="capitalize font-bold text-sm md:text-md">Sample Description</p>
              <button className="bg-black px-3 py-1 rounded-full mt-4 md:mt-16 text-white">Learn More</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coursel;
