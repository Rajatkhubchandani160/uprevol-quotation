import React from 'react';
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

const services = [
  {
    icon: <FaShippingFast size={50} />,
    title: 'Fast Delivery',
    description: 'Get your products delivered quickly with our fast and reliable delivery service.',
    image: 'https://via.placeholder.com/150',
  },
  {
    icon: <FaTools size={50} />,
    title: '24/7 Support',
    description: 'Our support team is available 24/7 to assist you with any queries or issues.',
    image: 'https://via.placeholder.com/150',
  },
  {
    icon: <FaRecycle size={50} />,
    title: 'Eco-Friendly',
    description: 'We are committed to sustainable practices and eco-friendly products.',
    image: 'https://via.placeholder.com/150',
  },
  {
    icon: <FaShieldAlt size={50} />,
    title: 'Secure Payments',
    description: 'All transactions are secured and encrypted for your safety.',
    image: 'https://via.placeholder.com/150',
  },
  {
    icon: <FaHandsHelping size={50} />,
    title: 'Customer Care',
    description: 'Our dedicated customer care team is here to help you with all your needs.',
    image: 'https://via.placeholder.com/150',
  },
  {
    icon: <FaLaptop size={50} />,
    title: 'Laptop Repair',
    description: 'Expert repair services for all kinds of laptops, from hardware to software issues.',
    image: 'https://via.placeholder.com/150',
  },
  {
    icon: <FaMobileAlt size={50} />,
    title: 'Mobile Repair',
    description: 'Quick and reliable mobile repair services for all major brands and models.',
    image: 'https://via.placeholder.com/150',
  },
  {
    icon: <FaHeadphones size={50} />,
    title: 'Accessories',
    description: 'Wide range of accessories for all your electronic devices, from headphones to chargers.',
    image: 'https://via.placeholder.com/150',
  },
  {
    icon: <FaCamera size={50} />,
    title: 'Camera Services',
    description: 'Professional camera repair and maintenance services to keep your equipment in top condition.',
    image: 'https://via.placeholder.com/150',
  },
  {
    icon: <FaDesktop size={50} />,
    title: 'Desktop Services',
    description: 'Comprehensive desktop services, including upgrades, repairs, and custom builds.',
    image: 'https://via.placeholder.com/150',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Fantastic service! My laptop was fixed quickly and now works perfectly.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Jane Smith',
    feedback: 'Great customer support and fast delivery. Highly recommend this service.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Alice Johnson',
    feedback: 'Very professional and eco-friendly. I appreciate their commitment to sustainability.',
    image: 'https://via.placeholder.com/100',
  },
];

const ServicePage = () => {
  return (
    <div className="container mx-auto px-6 my-12">
      <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-red-600 text-white px-4 py-2 rounded-full z-10">Learn More</button>
            </div>
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 group-hover:opacity-50 transition-opacity">{service.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex justify-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 object-cover rounded-full" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-2">Quality Assurance</h3>
          <p className="text-gray-600">We guarantee the quality of our services and products to ensure customer satisfaction.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-2">Expert Technicians</h3>
          <p className="text-gray-600">Our team consists of highly trained and experienced technicians ready to help you.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-2">Affordable Prices</h3>
          <p className="text-gray-600">We offer competitive prices without compromising on the quality of our services.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
