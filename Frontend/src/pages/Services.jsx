import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // Import toast for notifications
import SummaryApi from '../common/index';
import {
  FaShippingFast,
  FaTools,
  FaRecycle,
  FaShieldAlt,
  FaHandsHelping,
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
  FaCamera,
  FaDesktop,
} from 'react-icons/fa';

// Define default icon mapping
const iconMapping = {
  'Fast Delivery': <FaShippingFast size={50} />,
  '24/7 Support': <FaTools size={50} />,
  'Eco-Friendly': <FaRecycle size={50} />,
  'Secure Payments': <FaShieldAlt size={50} />,
  'Customer Care': <FaHandsHelping size={50} />,
  'Laptop Repair': <FaLaptop size={50} />,
  'Mobile Repair': <FaMobileAlt size={50} />,
  'Accessories': <FaHeadphones size={50} />,
  'Camera Services': <FaCamera size={50} />,
  'Desktop Services': <FaDesktop size={50} />,
};

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [whyChooseUs, setWhyChooseUs] = useState([]);

  // Fetch services from API
  const fetchServices = async () => {
    try {
      const response = await fetch(SummaryApi.displayService.url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched services: ", data);
        setServices(Array.isArray(data) ? data : []);
      } else {
        throw new Error('Failed to fetch services');
      }
    } catch (error) {
      console.error('Failed to fetch services', error);
      toast.error('Failed to fetch services');
    }
  };

  // Fetch testimonials from API
  const fetchTestimonials = async () => {
    try {
      const response = await fetch(SummaryApi.displayTestimonial.url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched testimonials: ", data);
        setTestimonials(Array.isArray(data) ? data : []);
      } else {
        throw new Error('Failed to fetch testimonials');
      }
    } catch (error) {
      console.error('Failed to fetch testimonials', error);
      toast.error('Failed to fetch testimonials');
    }
  };

  // Fetch "Why Choose Us?" from API
  const fetchWhyChooseUs = async () => {
    try {
      const response = await fetch(SummaryApi.displaywhychooseus.url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched why choose us: ", data);
        setWhyChooseUs(Array.isArray(data) ? data : []);
      } else {
        throw new Error('Failed to fetch Why Choose Us');
      }
    } catch (error) {
      console.error('Failed to fetch Why Choose Us', error);
      toast.error('Failed to fetch Why Choose Us');
    }
  };

  // Fetch services, testimonials, and Why Choose Us data on component mount
  useEffect(() => {
    fetchServices();
    fetchTestimonials();
    fetchWhyChooseUs();
  }, []);

  return (
    <div className="container mx-auto px-6 my-12">
      {/* Services Section */}
      {services.length > 0 && (
        <>
          <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold z-10">Learn More</button>
                </div>
                <div className="flex justify-center mb-4">
                  {iconMapping[service.title] || <FaDesktop size={50} />} {/* Default icon if title doesn't match */}
                </div>
                <img src={service.image} alt={service.title} className="w-full h-40 object-cover mb-4 rounded-lg border-2 border-gray-300 shadow-md" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 group-hover:opacity-75 transition-opacity">{service.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <>
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white via-gray-50 to-gray-100 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 shadow-md" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Why Choose Us Section */}
      {whyChooseUs.length > 0 && (
        <>
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServicePage;
