import React, { useEffect, useState } from 'react';
import { MdDelete, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const ServiceList = ({ refreshServices }) => {
    const [services, setServices] = useState([]);
    const [showServices, setShowServices] = useState(false);

    const fetchServices = async () => {
        try {
            const response = await fetch(SummaryApi.displayService.url, {
                method: 'GET',
              
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log("Fetched services: ", data);

            if (Array.isArray(data)) {
                setServices(data);
            } else {
                setServices([]);
            }
        } catch (error) {
            console.error('Failed to fetch services', error);
            toast.error('Failed to fetch services');
        }
    };

    useEffect(() => {
        fetchServices();
    }, [refreshServices]);

    const handleDeleteService = async (id) => {
        try {
            const response = await fetch(SummaryApi.deleteService.url(id), {
                method: SummaryApi.deleteService.method,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            // Check if the response is in JSON format
            const contentType = response.headers.get('content-type');
            let responseData;
    
            if (contentType && contentType.includes('application/json')) {
                responseData = await response.json();
            } else {
                const text = await response.text();
                console.error("Unexpected response:", text);
                throw new Error('Received non-JSON response');
            }
    
            if (response.ok && responseData.success) {
                toast.success(responseData.message);
                fetchServices(); // Refresh services after deletion
            } else {
                toast.error(responseData.message || 'Failed to delete service');
            }
        } catch (error) {
            console.error('Failed to delete service', error);
            toast.error('Failed to delete service');
        }
    };
    
    

    const toggleShowServices = () => {
        setShowServices(!showServices);
    };

    return (
        <div className="service-list lg:w-[80vw] flex flex-col gap-4">
            <button 
                onClick={toggleShowServices} 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded mb-4 flex items-center justify-between"
            >
                <span>{showServices ? 'Hide Services' : 'Show Services'}</span>
                {showServices ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
            </button>

            {showServices && (
                services.length > 0 ? (
                    services.map((service) => (
                        <div key={service._id} className="service-item flex items-center w-full justify-between bg-white p-4 shadow rounded mb-2">
                            <img src={service.icon} alt="Service Icon" className="w-12 h-12 mr-4" />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold capitalize">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                            <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteService(service._id)}>
                                <MdDelete size={24} />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center w-full p-4">No services available</div>
                )
            )}
        </div>
    );
};

export default ServiceList;
