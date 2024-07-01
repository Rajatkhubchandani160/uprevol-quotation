import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import generalContext from '../context';
import currency from '../helper/DisplayINRcurrency';
import addToCart from '../helper/addToCart';

const CategoryProductCard = ({ category, heading, data, loading, handleAddToCart }) => {
  const LoadingList = new Array(12).fill(null);
  const { fetchCartDetails } = useContext(generalContext);

  const handleAddToCartClick = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    await addToCart(e, id);
    await fetchCartDetails();
    handleAddToCart();
  };

  return (
    <div className='container mx-auto px-1 my-2'>
      <Link to='/product' className='text-3xl transition-all max-w-fit ml-1 font-sans hover:text-red-600 uppercase font-bold'>
        {heading}
      </Link>
      <div className='flex flex-wrap items-center gap-5 justify-between mt-3  max-h-[calc(100vh-250px)] scrollbar-none overflow-y-scroll overflow-hidden'>
        {loading
          ? LoadingList.map((_, index) => (
              <div
                key={index}
                className='w-full sm:w-[280px] md:w-[320px] lg:w-[340px] border-2 border-black bg-white rounded-xl shadow'
              >
                <div className='bg-slate-200 p-2 rounded-t-xl h-48 flex justify-center animate-pulse'></div>
                <div className='px-4 py-2 h-full w-full rounded-b-xl'>
                  <h2 className='font-semibold text-lg capitalize text-ellipsis line-clamp-1 bg-slate-200 animate-pulse rounded-full p-3'></h2>
                  <p className='capitalize text-gray-500 bg-slate-200 animate-pulse my-3 p-3 rounded-full'></p>
                  <div className='flex items-center gap-3 font-medium mt-2'>
                    <p className='line-through p-3 rounded-full w-full bg-slate-200 animate-pulse'></p>
                    <p className='text-red-500 p-3 rounded-full w-full bg-slate-200 animate-pulse'></p>
                  </div>
                  <button className='p-3 rounded-xl my-2 w-full bg-slate-200 animate-pulse'></button>
                </div>
              </div>
            ))
          : data.map((product) => (
              <div
                key={product._id}
                className='w-full sm:w-[280px] md:w-[320px] lg:w-[340px] border-2 border-black bg-white rounded-xl shadow'
              >
                <Link
                  to={`/product/${product._id}`}
                  className='bg-slate-200 p-2 rounded-t-xl h-48 flex justify-center'
                >
                  <img
                    src={product.productImage[0]}
                    className='hover:scale-105 transition-all rounded mix-blend-multiply'
                    alt={product.productName}
                  />
                </Link>
                <div className='px-4 py-2 h-full w-full rounded-b-xl'>
                  <Link to={`/product/${product._id}`} className='block'>
                    <h2 className='font-semibold text-lg capitalize text-ellipsis line-clamp-1'>
                      {product.productName}
                    </h2>
                    <p className='capitalize text-gray-500'>{product.category}</p>
                    <div className='flex items-center gap-3 font-medium'>
                      <p className='line-through'>{currency(product.price)}</p>
                      <p className='text-red-500'>{currency(product.selling)}</p>
                    </div>
                  </Link>
                  <div className='flex gap-4'>
                    <Link
                      to={`/product/${product._id}`}
                      className='bg-red-600 hover:bg-red-700 p-2 rounded-xl my-2'
                    >
                      Learn More
                    </Link>
                    <button
                      className='bg-red-600 hover:bg-red-700 p-2 rounded-xl my-2'
                      onClick={(e) => handleAddToCartClick(e, product._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CategoryProductCard;
