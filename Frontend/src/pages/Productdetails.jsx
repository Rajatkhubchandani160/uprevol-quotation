import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SummaryApi from "../common";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import currency from "../helper/DisplayINRcurrency";
import Displayrelevantproduct from "../Components/Diaplayrelevantproducts";
import addToCart from "../helper/addToCart";
import generalContext from "../context";

const Productdetails = () => {
  const [ActiveImage, setActiveImage] = useState("");
  const [productdata, setproductdata] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    selling: "",
  });
  const [loading, setloading] = useState(false);
  const Loadinglist = new Array(4).fill(null);
  const params = useParams();
  const { fetchCartDetails } = useContext(generalContext);

  const handleAddToCart = async (e, id) => {
    e.preventDefault();
    await addToCart(e, id);
    await fetchCartDetails();
  };

  const fetchdata = async () => {
    setloading(true);
    const response = await fetch(SummaryApi.productdetails.url, {
      method: SummaryApi.productdetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: params?.id,
      }),
    });
    const jsonresponse = await response.json();
    setActiveImage(jsonresponse?.data?.productImage[0]);
    setloading(false);
    setproductdata(jsonresponse?.data);
  };

  useEffect(() => {
    fetchdata();
  }, [params.id]);

  return (
    <div className="py-5 px-10 container">
      <div className="flex-col gap-10 flex h-full">
        <div className="h-full w-full">
          {loading ? (
            <div className="flex gap-7 h-full w-full">
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {Loadinglist.map((_, index) => (
                  <div key={index} className="bg-slate-300 w-28 h-24 p-3 rounded-xl animate-pulse"></div>
                ))}
              </div>
              <div className="lg:w-96 lg:h-96 h-[250px] w-[250px] bg-slate-200 animate-pulse rounded-xl"></div>

              <div className="flex-col capitalize flex gap-2">
                <h4 className="bg-slate-200 px-10 py-3 text-gray-500 rounded-full animate-pulse w-fit"></h4>
                <h2 className="text-5xl font-bold bg-slate-200 px-3 py-5 rounded-full animate-pulse"></h2>
                <h4 className="text-gray-500 font-semibold rounded-full animate-pulse px-16 w-full py-4 bg-slate-200"></h4>
                <div className="flex gap-1 text-red-600">
                  <p className="bg-slate-200 rounded-full p-3 animate-pulse"></p>
                  <p className="bg-slate-200 rounded-full p-3 animate-pulse"></p>
                  <p className="bg-slate-200 rounded-full p-3 animate-pulse"></p>
                  <p className="bg-slate-200 rounded-full p-3 animate-pulse"></p>
                  <p className="bg-slate-200 rounded-full p-3 animate-pulse"></p>
                </div>
                <div className="flex gap-3 text-2xl">
                  <p className="text-red-600 bg-slate-200 rounded-full px-16 animate-pulse py-4"></p>
                  <p className="line-through bg-slate-200 rounded-full px-16 animate-pulse py-4"></p>
                </div>
                <div className="flex gap-3">
                  <button className="bg-slate-200 rounded-full px-16 animate-pulse py-2"></button>
                  <button className="bg-slate-200 rounded-full px-16 animate-pulse py-2"></button>
                </div>
                <div className="flex-col w-72">
                  <p className="text-black font-semibold w-28 px-1 rounded-full animate-pulse bg-slate-200 py-3"></p>
                  <p className="mt-3 animate-pulse bg-slate-200 h-28 rounded-xl p-2 font-medium text-zinc-500 w-full text-start"></p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-7 h-full w-full">
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {productdata.productImage.map((image, index) => (
                  <div key={index} className="lg:w-32 w-24 h-24 lg:h-32 rounded-xl">
                    <img
                      className="rounded-xl h-full w-full border-black border-[0.5px] transition-all shadow-md hover:scale-105 hover:border-none 
                        hover:rounded-none mix-blend-multiply object-scale-down"
                      onMouseEnter={() => setActiveImage(image)}
                      src={image}
                      alt={image}
                    />
                  </div>
                ))}
              </div>
              <div className="lg:w-[26vw] lg:h-[57vh] h-[250px] w-[250px] bg-slate-200 transition-all rounded-xl">
                <img
                  className="rounded-xl h-full w-full shadow-md mix-blend-multiply object-scale-down"
                  src={ActiveImage}
                  alt={ActiveImage}
                />
              </div>
              <div className="flex-col capitalize flex gap-2">
                <h4 className="bg-slate-200 px-3 text-gray-500 rounded-full w-fit">
                  {productdata?.brandName}
                </h4>
                <h2 className="text-5xl font-bold">
                  {productdata?.productName}
                </h2>
                <h4 className="text-gray-500 font-semibold">
                  {productdata?.category}
                </h4>
                <div className="flex text-red-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <div className="flex gap-3 text-2xl">
                  <p className="text-red-600">
                    {currency(productdata?.selling)}
                  </p>
                  <p className="line-through ">
                    {currency(productdata?.price)}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="border-2 border-red-600 px-5 py-1 capitalize rounded-md hover:bg-red-600 hover:text-black">
                    Buy Button
                  </button>
                  <button
                    className="border-2 border-red-600 px-5 py-1 capitalize rounded-md hover:bg-red-600 hover:text-black"
                    onClick={(e) => handleAddToCart(e, productdata?._id)}
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="flex-col w-72">
                  <p className="text-black font-semibold">Description :</p>
                  <p className="h-fit font-medium text-zinc-500 w-full text-start px-1">
                    {productdata?.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="h-full w-full py-5">
            {productdata.category && (
              <Displayrelevantproduct category={productdata?.category} heading={"Recommended products"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
