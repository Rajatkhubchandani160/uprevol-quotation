import React, { useContext, useEffect, useState } from "react";
import fetchcategorywiseproduct from "../helper/fetchcategorywiseproduct";
import currency from "../helper/DisplayINRcurrency";
import { Link, useNavigate } from "react-router-dom";
import addToCart from "../helper/addToCart";
import generalContext from "../context";

const Displayrelevantproduct = ({ category, heading }) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const { fetchCartDetails } = useContext(generalContext);
  const Loadinglist = new Array(12).fill(null);

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

  const navigate = useNavigate();

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    window.location.href = url; // This will reload the page
  };

  return (
    <div className="container mx-auto px-6 my-8">
      <Link
        to={"/product"}
        className="text-4xl hover:border-b-2 hover:border-black hover:transition-all max-w-fit font-semibold"
      >
        {heading}
      </Link>

      <div className="flex items-center flex-wrap gap-2">
        {loading
          ? Loadinglist.map((_, index) => (
              <div key={index} className="w-full mt-6 min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[340px] border-2 border-black bg-white rounded-xl shadow">
                <div className="bg-slate-200 p-2 rounded-t-xl h-48 min-w-[120px] md:min-w-[150px] flex justify-center animate-pulse"></div>
                <div className="px-4 py-2 h-full w-full rounded-b-xl">
                  <h2 className="font-semibold text-lg capitalize text-ellipsis line-clamp-1 w-full bg-slate-200 animate-pulse rounded-full p-3"></h2>
                  <p className="capitalize text-gray-500 w-full bg-slate-200 animate-pulse my-3 p-3 rounded-full"></p>
                  <div className="flex items-center gap-3 font-medium mt-2">
                    <p className="line-through p-3 rounded-full w-full bg-slate-200 animate-pulse"></p>
                    <p className="text-red-500 p-3 rounded-full w-full bg-slate-200 animate-pulse"></p>
                  </div>
                  <button className="p-3 rounded-xl my-2 w-full bg-slate-200 animate-pulse"></button>
                </div>
              </div>
            ))
          : data.map((product, index) => (
              <div
                key={index}
                className="w-full mt-6 min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[340px] border-2 border-black bg-white rounded-xl shadow"
              >
                <Link
                  to={"/product/" + product._id}
                  onClick={(e) => handleLinkClick(e, "/product/" + product._id)}
                  className="bg-slate-200 p-2 rounded-t-xl h-48 min-w-[120px] md:min-w-[150px] flex justify-center"
                >
                  <img
                  onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
                    src={product.productImage[0]}
                    alt={product.productName}
                    className="hover:scale-105 hover:transition-all rounded mix-blend-multiply"
                  />
                </Link>
                
                <div className="px-4 py-2 h-full w-full rounded-b-xl">
                  <h2 className="font-semibold text-lg capitalize text-ellipsis line-clamp-1">
                    {product.productName}
                  </h2>
                  <p className="capitalize text-gray-500">
                    {product.category}
                  </p>
                  <div className="flex items-center gap-3 font-medium">
                    <p className="line-through">{currency(product.price)}</p>
                    <p className="text-red-500">
                      {currency(product.selling)}
                    </p>
                  </div>
                  <button
                    className="bg-red-600 hover:bg-red-700 p-2 rounded-xl my-2"
                    onClick={(e) => handleAddToCart(e, product._id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Displayrelevantproduct;
