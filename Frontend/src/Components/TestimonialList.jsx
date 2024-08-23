import React, { useEffect, useState } from 'react';
import { MdDelete, MdExpandMore, MdExpandLess, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import { FaStar } from 'react-icons/fa';

const TestimonialList = ({ onEditTestimonial, onAddTestimonial }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [showTestimonials, setShowTestimonials] = useState(false);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(SummaryApi.displayTestimonial.url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setTestimonials(data);
      } else {
        setTestimonials([]);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials', error);
      toast.error('Failed to fetch testimonials');
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []); // Load testimonials on component mount

  useEffect(() => {
    if (onAddTestimonial) {
      fetchTestimonials(); // Fetch testimonials whenever a new one is added
    }
  }, [onAddTestimonial]); // Dependency on onAddTestimonial callback

  const handleDeleteTestimonial = async (id) => {
    try {
      const response = await fetch(SummaryApi.deleteTestimonial.url(id), {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      });
      const responseData = await response.json();
      if (response.ok && responseData.success) {
        toast.success(responseData.message);
        fetchTestimonials(); // Refresh the list after deletion
      } else {
        toast.error(responseData.message || 'Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Failed to delete testimonial', error);
      toast.error('Failed to delete testimonial');
    }
  };

  const toggleShowTestimonials = () => {
    setShowTestimonials(!showTestimonials);
  };

  return (
    <div className="testimonial-list lg:w-[80vw] flex flex-col gap-4">
      <button 
        onClick={toggleShowTestimonials} 
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded mb-4 flex items-center justify-between"
      >
        <span>{showTestimonials ? 'Hide Testimonials' : 'Show Testimonials'}</span>
        {showTestimonials ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
      </button>

      {showTestimonials && (
        testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div key={testimonial._id} className="testimonial-item flex items-center w-full justify-between bg-white p-4 shadow rounded mb-2">
              <img src={testimonial.image} alt="Testimonial Image" className="w-12 h-12 mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold capitalize">{testimonial.name}</h3>
                <p>{testimonial.feedback}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <MdEdit 
                  className="text-gray-500 hover:text-gray-700 cursor-pointer mx-2"
                  onClick={() => onEditTestimonial(testimonial)}
                  size={24}
                />
                <MdDelete 
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => handleDeleteTestimonial(testimonial._id)}
                  size={24}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No testimonials available.</p>
        )
      )}
    </div>
  );
};

export default TestimonialList;
