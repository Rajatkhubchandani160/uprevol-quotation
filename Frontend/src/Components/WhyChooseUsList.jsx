import React, { useEffect, useState } from 'react';
import { MdDelete, MdExpandMore, MdExpandLess, MdEdit } from 'react-icons/md';
import { FaShieldAlt, FaThumbsUp, FaMedal } from 'react-icons/fa';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const WhyChooseUsList = ({ onEditWhyChooseUs, onAddWhyChooseUs }) => {
  const [whyChooseUs, setWhyChooseUs] = useState([]);
  const [showWhyChooseUs, setShowWhyChooseUs] = useState(false);

  const fetchWhyChooseUs = async () => {
    try {
      const response = await fetch(SummaryApi.displaywhychooseus.url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setWhyChooseUs(data);
      } else {
        setWhyChooseUs([]);
      }
    } catch (error) {
      console.error('Failed to fetch Why Choose Us', error);
      toast.error('Failed to fetch Why Choose Us');
    }
  };

  useEffect(() => {
    fetchWhyChooseUs();
  }, []); // Load Why Choose Us entries on component mount

  useEffect(() => {
    if (onAddWhyChooseUs) {
      fetchWhyChooseUs(); // Fetch Why Choose Us entries whenever a new one is added
    }
  }, [onAddWhyChooseUs]); // Dependency on onAddWhyChooseUs callback

  const handleDeleteWhyChooseUs = async (id) => {
    try {
      const response = await fetch(SummaryApi.deletewhychooseus.url(id), {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (response.ok) {
        const responseData = await response.json();
        if (responseData.success) {
          toast.success(responseData.message);
          fetchWhyChooseUs(); // Refresh the list after deletion
        } else {
          toast.error(responseData.message || 'Failed to delete Why Choose Us entry');
        }
      } else {
        const errorText = await response.text(); // Read the response as text
        console.error('Delete failed with response:', errorText);
        toast.error('Failed to delete Why Choose Us entry');
      }
    } catch (error) {
      console.error('Failed to delete Why Choose Us entry', error);
      toast.error('Failed to delete Why Choose Us entry');
    }
  };
  
  const toggleShowWhyChooseUs = () => {
    setShowWhyChooseUs(!showWhyChooseUs);
  };

  return (
    <div className="why-choose-us-list lg:w-[80vw] flex flex-col gap-4">
      <button 
        onClick={toggleShowWhyChooseUs} 
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded mb-4 flex items-center justify-between"
      >
        <span>{showWhyChooseUs ? 'Hide Why Choose Us' : 'Show Why Choose Us'}</span>
        {showWhyChooseUs ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
      </button>

      {showWhyChooseUs && (
        whyChooseUs.length > 0 ? (
          whyChooseUs.map((item) => (
            <div key={item._id} className="why-choose-us-item flex items-center w-full justify-between bg-white p-4 shadow rounded mb-2 border-l-4 border-blue-500">
              <div className="icon-container flex flex-col items-center mr-4">
                <FaShieldAlt className="text-blue-500 mb-2" size={24} />
                <FaThumbsUp className="text-green-500 mb-2" size={24} />
                <FaMedal className="text-yellow-500 mb-2" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold capitalize text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="flex items-center">
                <MdEdit 
                  className="text-gray-500 hover:text-gray-700 cursor-pointer mx-2"
                  onClick={() => onEditWhyChooseUs(item)}
                  size={24}
                />
                <MdDelete 
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => handleDeleteWhyChooseUs(item._id)}
                  size={24}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No entries available in Why Choose Us section.</p>
        )
      )}
    </div>
  );
};

export default WhyChooseUsList;
