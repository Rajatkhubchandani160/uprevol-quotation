import React, { useContext, useEffect, useState } from 'react';
import fetchcategorywiseproduct from '../helper/fetchcategorywiseproduct';
import currency from '../helper/DisplayINRcurrency';
import { Link } from 'react-router-dom';
import addToCart from '../helper/addToCart';
import generalContext from '../context';

const Horizontalproductcard = ({ category, heading }) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const Loadinglist = new Array(12).fill(null);
  const { fetchCartDetails } = useContext(generalContext);

  const fetchproductdata = async () => {
    setloading(true);
    const products = await fetchcategorywiseproduct(category);
    setloading(false);
    setdata(products?.data);
  };

  const handleAddToCart = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    await addToCart(e, id);
    await fetchCartDetails();
  };

  useEffect(() => {
    fetchproductdata();
    fetchCartDetails();
  }, [category]);

  return (
    <div className='container mx-auto px-6 my-8'>
      <Link to={'#'} className='text-2xl hover:border-b-2 hover:border-black hover:transition-all max-w-fit font-semibold'>
        {heading}
      </Link>

      <div className='flex items-center overflow-x-scroll scrollbar-none gap-5'>
        {loading ? (
          Loadinglist.map((_, index) => (
            <div key={index} className='w-full mt-6 min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[340px] h-40 bg-white rounded-xl shadow flex'>
              <div className='bg-slate-200 h-full p-2 rounded-tl-xl rounded-bl-xl min-w-[120px] md:min-w-[150px] flex animate-pulse'></div>
              <div className='px-3 py-2 h-full w-full'>
                <h2 className='font-semibold text-lg capitalize text-ellipsis line-clamp-1 w-full bg-slate-200 p-3 rounded-full animate-pulse'></h2>
                <p className='capitalize text-gray-500 w-full bg-slate-200 mt-3 p-3 rounded-full animate-pulse'></p>
                <div className='items-center gap-3 font-medium mt-3 flex'>
                  <p className='line-through p-3 w-full rounded-full bg-slate-200 animate-pulse'></p>
                  <p className='text-red-500 p-3 w-full rounded-full bg-slate-200 animate-pulse'></p>
                </div>
                <button className='hover:bg-red-700 p-3 rounded-xl my-3 bg-slate-200 w-full animate-pulse'></button>
              </div>
            </div>
          ))
        ) : (
          data.map((product) => (
            <div key={product._id} className='w-full mt-6 min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[340px] h-40 bg-white rounded-xl shadow flex'>
              <Link to={`/product/${product._id}`} className='bg-slate-200 h-full p-2 rounded-tl-xl rounded-bl-xl min-w-[120px] md:min-w-[150px] flex'>
                <img src={product.productImage[0]} className='hover:scale-105 hover:transition-all rounded mix-blend-multiply' alt={product.productName} />
              </Link>
              <div className='px-3 py-2 h-full w-full'>
                <Link to={`/product/${product._id}`}>
                  <h2 className='font-semibold text-lg capitalize text-ellipsis line-clamp-1'>{product.productName}</h2>
                  <p className='capitalize text-gray-500'>{product.category}</p>
                  <div className='flex items-center lg:gap-3 gap-1  font-medium'>
                    <p className='line-through'>{currency(product.price)}</p>
                    <p className='text-red-500'>{currency(product.selling)}</p>
                  </div>
                </Link>
                <button
                  className='bg-red-600 hover:bg-red-700 p-2 rounded-xl my-2'
                  onClick={(e) => handleAddToCart(e, product._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Horizontalproductcard;
