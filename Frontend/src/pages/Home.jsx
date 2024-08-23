import React from 'react';
import Coursel from '../Components/Coursel';
import ProductSection from '../Components/ProductSection';
import Support from '../Components/Support';

const Home = () => { 
  return (
    <div className="bg-slate-100 overflow-hidden min-h-screen">
      <Coursel/>
      <ProductSection/>
      <Support/>
    </div>
  );
};

export default Home;
