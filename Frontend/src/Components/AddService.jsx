import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast for notifications
import SummaryApi from '../common/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AddService = ({ onClose, onServiceAdded }) => {
  const [services, setServices] = useState([{ title: '', description: '', icon: '', image: '' }]);
  const [loading, setLoading] = useState(false);

  const addServiceField = () => {
    setServices([...services, { title: '', description: '', icon: '', image: '' }]);
  };

  const removeServiceField = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const updateServiceField = (index, field, value) => {
    const newServices = services.map((service, i) =>
      i === index ? { ...service, [field]: value } : service
    );
    setServices(newServices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let allSuccess = true;

      for (let service of services) {
        const response = await fetch(SummaryApi.addService.url, {
          method: SummaryApi.addService.method,
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(service)
        });

        if (!response.ok) {
          allSuccess = false;
          throw new Error('Failed to add service');
        }

        const responseData = await response.json();
        console.log("Added new service", responseData);
      }

      if (allSuccess) {
        toast.success('Service(s) added successfully');
        setServices([{ title: '', description: '', icon: '', image: '' }]);
        if (onServiceAdded) onServiceAdded();
        if (onClose) onClose();
      }
    } catch (error) {
      console.error('Error adding service:', error);
      toast.error('Failed to add service');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h2 className="text-xl mb-4 font-bold">Add New Service</h2>
      <form onSubmit={handleSubmit}>
        {services.map((service, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              placeholder="Title"
              value={service.title}
              onChange={(e) => updateServiceField(index, 'title', e.target.value)}
              className="border p-2 mb-2 w-full"
            />
            <textarea
              placeholder="Description"
              value={service.description}
              onChange={(e) => updateServiceField(index, 'description', e.target.value)}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Icon URL"
              value={service.icon}
              onChange={(e) => updateServiceField(index, 'icon', e.target.value)}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={service.image}
              onChange={(e) => updateServiceField(index, 'image', e.target.value)}
              className="border p-2 mb-2 w-full"
            />
            {services.length > 1 && (
              <button type="button" onClick={() => removeServiceField(index)} className="text-red-500">
                Remove Service
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addServiceField} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add Another Service
        </button>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? 'Saving...' : 'Save Service'}
        </button>
      </form>
    </div>
  );
};

export default AddService;
