import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import fetchcategorywiseproduct from '../helper/fetchcategorywiseproduct';
import CategoryProductCard from '../Components/CategoryProductCard';
import generalContext from '../context';

const CategoryProduct = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('low-to-high'); // Default sort order
  const { fetchCartDetails } = useContext(generalContext);

  const fetchProductData = async () => {
    setLoading(true);
    const products = await fetchcategorywiseproduct(params.categoryName);
    setLoading(false);
    const sortedProducts = products?.data?.sort((a, b) => {
      if (sortOrder === 'high-to-low') {
        return b.selling - a.selling;
      } else {
        return a.selling - b.selling;
      }
    });
    setData(sortedProducts);
    console.log('product data:', products);
  };

  useEffect(() => {
    fetchProductData();
    fetchCartDetails();
  }, [params.categoryName, sortOrder]); // Re-fetch data when category or sortOrder changes

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className='container mx-auto p-2'>
      <div className='hidden lg:grid w-96 max-h-[calc(100vh-400px)] grid-cols-2'>
        <div className=' h-[calc(100vh-200px)]'>
          <div className='font-semibold'>
            <h3 className='text-xl px-2 py-1 border-b-2 border-black uppercase'>Sort By</h3>
            <form>
              <div className='flex-col flex gap-1'>
                <label>
                  <input
                    type='radio'
                    value='low-to-high'
                    checked={sortOrder === 'low-to-high'}
                    onChange={handleSortChange}
                    className='mr-2'
                  />
                  Low to High
                </label>
                <label>
                  <input
                    type='radio'
                    value='high-to-low'
                    checked={sortOrder === 'high-to-low'}
                    onChange={handleSortChange}
                    className='mr-2'
                  />
                  High to Low
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className='ml-5  w-[calc(100vw-270px)] '>
          <CategoryProductCard
            category={params.categoryName}
            heading={"Top Deals"}
            data={data}
            loading={loading}
            handleAddToCart={fetchProductData}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
