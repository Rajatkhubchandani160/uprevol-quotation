import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Enqueryfrom = ({ cartItems, cartcount, resetCart }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.user?.name || '',
    email: user?.user?.email || '',
    phone: '',
    message: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(SummaryApi.Enquercart.url, {
      method: SummaryApi.Enquercart.method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        cartItems,
      }),
    });
    
    const jsonResponse = await response.json();
    
    if (jsonResponse.success) {
      toast.success(jsonResponse.message);
      // resetCart();
      navigate('/');
    } else if (jsonResponse.error) {
      toast.error(jsonResponse.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded shadow-md my-2 bg-slate-300">
      <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
        required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
        required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
        required
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2 resize-none">
        <label className="block text-sm font-medium mb-1 resize-none ">Address</label>
        <textarea
        required
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2 resize-none">
        <label className="block text-sm font-medium mb-1 ">Message</label>
        <textarea
        required
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button  type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
        Submit Enquiry
      </button>
    </form> 
  );
};

export default Enqueryfrom;







