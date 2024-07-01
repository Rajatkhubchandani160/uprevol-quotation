import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SummaryApi from "../common";
import currency from "../helper/DisplayINRcurrency";
import generalContext from "../context";
import addToCart from "../helper/addToCart";

const Search = () => {
  const data = useLocation();
  const [productdata, setproductdata] = useState([]);
  const { fetchCartDetails } = useContext(generalContext);
  const [loading, setloading] = useState(false);
  const Loadinglist = new Array(productdata.length).fill(null);

  const fetchproduct = async () => {
    try {
      setloading(true);
      setproductdata([]); // Clear product data before fetching new data
      const response = await fetch(SummaryApi.seacrhProduct.url + data.search);
      const jsonresponse = await response.json();
      setproductdata(jsonresponse.data);
      console.log("chala nhi ", productdata);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setloading(false);
    }
  };

  const handleAddToCart = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    await addToCart(e, id);
    await fetchCartDetails();
  };

  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchproduct();
  }, [data]);

  return (
    <div className="container mx-auto px-6 my-8">
      <div className="text-4xl hover:scale-105  hover:transition-all max-w-fit font-semibold px-8 capitalize">
        total results: {productdata.length}
      </div>
      {productdata.length === 0 && (
        <div className="w-full h-96  relative">
        <div className=" absolute left-[50%] top-[50%] ">
          <button
            className="btn shadow-lg border-2 border-black bg-slate-300 animate-pulse"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Not Found
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4 font-semibold">
                <p className="text-red-600 mt-2">
                Product Not Found !</p>
                <p> Please Enter a Valid Search....</p>
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        </div>
      )}

      <div className="flex items-center flex-wrap justify-evenly ">
        {loading
          ? Loadinglist.map((_, index) => (
              <div
                key={index}
                className="w-full mt-6 min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[340px] border-2 border-black bg-white rounded-xl shadow"
              >
                <div className="bg-slate-200 p-2 rounded-t-xl h-48 min-w-[120px] md:min-w-[150px] flex justify-center animate-pulse"></div>
                <div className="px-4 py-2 h-full w-full rounded-b-xl">
                  <h2 className="font-semibold text-lg capitalize text-ellipsis line-clamp-1 w-full bg-slate-200 animate-pulse rounded-full p-3">
                    {index}
                  </h2>
                  <p className="capitalize text-gray-500 w-full bg-slate-200 animate-pulse my-3 p-3 rounded-full"></p>
                  <div className="flex items-center gap-3 font-medium mt-2">
                    <p className="line-through p-3 rounded-full w-full bg-slate-200 animate-pulse"></p>
                    <p className="text-red-500 p-3 rounded-full w-full bg-slate-200 animate-pulse"></p>
                  </div>
                  <button className="p-3 rounded-xl my-2 w-full bg-slate-200 animate-pulse"></button>
                </div>
              </div>
            ))
          : productdata.map((product) => (
              <div
                key={product._id}
                className="w-full mt-6 min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[340px] border-2 border-black bg-white rounded-xl shadow"
              >
                <Link
                  to={"/product/" + product._id}
                  onClick={(e) => handleLinkClick(e, "/product/" + product._id)}
                  className="bg-slate-200 p-2 rounded-t-xl h-48 min-w-[120px] md:min-w-[150px] flex justify-center"
                >
                  <img
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    src={product.productImage[0]}
                    alt={product.productName}
                    className="hover:scale-105 hover:transition-all rounded mix-blend-multiply"
                  />
                </Link>
                <div className="px-4 py-2 h-full w-full rounded-b-xl">
                  <h2 className="font-semibold text-lg capitalize text-ellipsis line-clamp-1">
                    {product.productName}
                  </h2>
                  <p className="capitalize text-gray-500">{product.category}</p>
                  <div className="flex items-center gap-3 font-medium">
                    <p className="line-through">{currency(product.price)}</p>
                    <p className="text-red-500">{currency(product.selling)}</p>
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

export default Search;
