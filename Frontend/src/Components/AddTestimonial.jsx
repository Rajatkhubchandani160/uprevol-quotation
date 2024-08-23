import React, { useState } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from '../common';

const AddTestimonial = ({ onSubmit, testimonial, onClose }) => {
  const [name, setName] = useState(testimonial ? testimonial.name : '');
  const [feedback, setFeedback] = useState(testimonial ? testimonial.feedback : '');
  const [image, setImage] = useState(testimonial ? testimonial.image : '');
  const [rating, setRating] = useState(testimonial ? testimonial.rating : 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, feedback, image, rating };

    try {
      let response;
      if (testimonial && testimonial._id) {
        // Update existing testimonial
        response = await fetch(SummaryApi.updateTestimonial.url(testimonial._id), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } else {
        // Create new testimonial
        response = await fetch(SummaryApi.addTestimonial.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }

      if (response.ok) {
        toast.success(testimonial ? 'Testimonial updated successfully!' : 'Testimonial added successfully!');
        setName('');
        setFeedback('');
        setImage('');
        setRating(0);
        if (onSubmit) onSubmit(); // Trigger a refresh or update the list
      } else {
        throw new Error('Failed to save testimonial');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while saving the testimonial.');
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(SummaryApi.deleteTestimonial.url(testimonial._id), {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('Testimonial deleted successfully!');
        if (onSubmit) onSubmit(); // Refresh or redirect after deletion
      } else {
        throw new Error('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while deleting the testimonial.');
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose(); // Close the form
    }
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <FaTimes 
        onClick={handleClose} 
        className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
        size={20}
      />

      <h2 className="text-2xl font-bold mb-4">
        {testimonial ? 'Edit Testimonial' : 'Add Testimonial'}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Feedback"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
          <div className="flex items-center">
            {[...Array(5)].map((star, index) => (
              <FaStar
                key={index}
                size={24}
                className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {testimonial ? 'Update Testimonial' : 'Save Testimonial'}
        </button>

        {testimonial && testimonial._id && (
          <button
            type="button"
            onClick={handleDelete}
            className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete Testimonial
          </button>
        )}
      </form>
    </div>
  );
};

export default AddTestimonial;
