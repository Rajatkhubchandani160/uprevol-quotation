import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ROLE from '../common/Role';
import AddService from '../Components/AddService';
import ServiceList from '../Components/ServiceList';
import AddTestimonial from '../Components/AddTestimonial';
import TestimonialList from '../Components/TestimonialList';
import AddWhyChooseUs from '../Components/AddWhyChooseUs';
import WhyChooseUsList from '../Components/WhyChooseUsList';

const Serviceadmin = () => {
  const user = useSelector(state => state.user);
  const userInfo = user?.user || {};

  const [uploadServiceSection, setUploadServiceSection] = useState(false);
  const [uploadTestimonialSection, setUploadTestimonialSection] = useState(false);
  const [uploadWhyChooseUsSection, setUploadWhyChooseUsSection] = useState(false);
  const [refreshServices, setRefreshServices] = useState(false);
  const [refreshTestimonials, setRefreshTestimonials] = useState(false);
  const [refreshWhyChooseUs, setRefreshWhyChooseUs] = useState(false);

  const handleServiceAdded = () => {
    setRefreshServices(prev => !prev);
  };

  const handleTestimonialAdded = () => {
    setRefreshTestimonials(prev => !prev);
  };

  const handleWhyChooseUsAdded = () => {
    setRefreshWhyChooseUs(prev => !prev);
  };

  const handleServiceRemoved = () => {
    setRefreshServices(prev => !prev);
  };

  const handleTestimonialRemoved = () => {
    setRefreshTestimonials(prev => !prev);
  };

  const handleWhyChooseUsRemoved = () => {
    setRefreshWhyChooseUs(prev => !prev);
  };

  const handleAddServiceClick = () => {
    setUploadServiceSection(true);
  };

  const handleAddTestimonialClick = () => {
    setUploadTestimonialSection(true);
  };

  const handleAddWhyChooseUsClick = () => {
    setUploadWhyChooseUsSection(true);
  };

  return (
    <div className="h-screen overflow-y-auto scrollbar-none"> {/* Main container to allow scrolling */}
      <div className="p-4">
        <div className="text-bold bg-white px-2 shadow-sm h-12 flex items-center justify-between font-bold font-4xl my-2">
          <div className="text-lg">All Services</div>
          {userInfo.role === ROLE.ADMIN && (
            <div className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white px-2 py-1 rounded-full">
              <button onClick={handleAddServiceClick}>Add Service</button>
            </div>
          )}
        </div>
        
        {uploadServiceSection && (
          <AddService
            onClose={() => setUploadServiceSection(false)}
            onServiceAdded={handleServiceAdded}
          />
        )}

        <div className="flex flex-wrap py-4 gap-8">
          <ServiceList refreshServices={refreshServices} onServiceRemoved={handleServiceRemoved} />
        </div>

        <div className="text-bold bg-white px-2 shadow-sm h-12 flex items-center justify-between font-bold font-4xl my-2">
          <div className="text-lg">All Testimonials</div>
          {userInfo.role === ROLE.ADMIN && (
            <div className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white px-2 py-1 rounded-full">
              <button onClick={handleAddTestimonialClick}>Add Testimonial</button>
            </div>
          )}
        </div>
        
        {uploadTestimonialSection && (
          <AddTestimonial
            onClose={() => setUploadTestimonialSection(false)}
            onTestimonialAdded={handleTestimonialAdded}
          />
        )}

        <div className="flex flex-wrap py-4 gap-8">
          <TestimonialList refreshTestimonials={refreshTestimonials} onTestimonialRemoved={handleTestimonialRemoved} />
        </div>

        <div className="text-bold bg-white px-2 shadow-sm h-12 flex items-center justify-between font-bold font-4xl my-2">
          <div className="text-lg">Why Choose Us</div>
          {userInfo.role === ROLE.ADMIN && (
            <div className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white px-2 py-1 rounded-full">
              <button onClick={handleAddWhyChooseUsClick}>Add Why Choose Us</button>
            </div>
          )}
        </div>
        
        {uploadWhyChooseUsSection && (
          <AddWhyChooseUs
            onClose={() => setUploadWhyChooseUsSection(false)}
            onWhyChooseUsAdded={handleWhyChooseUsAdded}
          />
        )}

        <div className="flex flex-wrap py-4 gap-8">
          <WhyChooseUsList refreshWhyChooseUs={refreshWhyChooseUs} onWhyChooseUsRemoved={handleWhyChooseUsRemoved} />
        </div>
      </div>
    </div>
  );
};

export default Serviceadmin;
