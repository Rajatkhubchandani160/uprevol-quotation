import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SummaryApi from '../common';
import generalContext from '../context';
import addToCart from '../helper/addToCart';
import currency from '../helper/DisplayINRcurrency';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fetchCartDetails } = useContext(generalContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(SummaryApi.getRandomProducts.url, {
          method: SummaryApi.getRandomProducts.method,
        });
        const data = await response.json();
        console.log("Fetched product data:", data);
        if (data.success && data.data.length > 0) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    fetchCartDetails();
  }, []);

  const handleAddToCart = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    await addToCart(e, id);
    await fetchCartDetails();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 my-8 bg-slate-100">
      <Link to="/product" className="text-3xl font-bold text-center block hover:underline mb-4">
        Featured Products
      </Link>
      <div className="flex flex-wrap gap-5 justify-center md:justify-evenly">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-full sm:w-[calc(50%-10px)] md:w-[320px] lg:w-[340px] border-2 border-black bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Link
              to={`/product/${product._id}`}
              className="bg-slate-200 p-2 rounded-t-xl h-48 flex justify-center"
            >
              <img
                src={product.imageUrl || product.productImage[0]}
                alt={product.title || product.productName}
                className="object-contain mix-blend-multiply h-full w-full"
                onError={(e) => {
                  e.target.src = '/path-to-placeholder-image.jpg'; // Fallback image if the original image fails to load
                  e.target.alt = 'Image not available';
                }}
              />
            </Link>
            <div className="px-4 py-2">
              <Link to={`/product/${product._id}`} className="block">
                <h2 className="font-semibold text-lg capitalize truncate">{product.title || product.productName}</h2>
                <p className="capitalize text-gray-500 truncate">{product.description || product.category}</p>
                <div className="flex items-center gap-3 font-medium mt-2">
                  {product.price && <p className="line-through text-gray-600">{currency(product.price)}</p>}
                  {product.selling && <p className="text-red-500">{currency(product.selling)}</p>}
                </div>
              </Link>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <Link
                  to={`/product/${product._id}`}
                  className="bg-red-600 hover:bg-red-700 p-2 rounded-xl text-center text-white"
                >
                  Learn More
                </Link>
                <button
                  className="bg-red-600 hover:bg-red-700 p-2 rounded-xl text-center text-white"
                  onClick={(e) => handleAddToCart(e, product._id)}
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

export default ProductSection;
