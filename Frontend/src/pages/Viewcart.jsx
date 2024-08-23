import React, { useContext, useEffect, useState } from 'react';
import SummaryApi from '../common';
import generalContext from '../context/index';
import currency from '../helper/DisplayINRcurrency';
import { IoClose } from "react-icons/io5";
import {setuserdetails} from '../Store/userslice'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Viewcart = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const context = useContext(generalContext);
  const loadinglist = new Array(context.cartproductcount).fill(null);

  const fetchCartCount = async () => {
    setloading(true);
    const response = await fetch(SummaryApi.viewcart.url, {
      method: SummaryApi.viewcart.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    });
    const jsonresponse = await response.json();
    setloading(false);
    // console.log('View cart json response is :', jsonresponse);
    if (jsonresponse.success) {
      setdata(jsonresponse.data);
    }
  };
  // login user details
  const user= useSelector(state=>state.user)
  // console.log("Login user information",user)
  
  // function calculateTotal() {
  //   let totalAmount = 0;

  //   data.forEach((e) => {
  //       const subtotal = e.quantity * e.productId.selling;
  //       totalAmount += subtotal;
  //   });

  //   console.log("anount",totalAmount);
  // }



  
  const updateqty = async (id, qty) => {
    if (qty >= 1) {
      const fetchcartdetails = await fetch(SummaryApi.updatecart.url, {
        method: SummaryApi.updatecart.method,
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty,
        }),
      });
      const jsonresponse = await fetchcartdetails.json();
      if (jsonresponse.success) {
        fetchCartCount();
        context.fetchCartDetails()
      }
    }
  };
  // console.log("cart count kar ", context.cartproductcount)
  const deletecartproduct = async (id) => {
    const response = await fetch(SummaryApi.deletecartproduct.url, {
      method: SummaryApi.deletecartproduct.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        _id: id,
      }),
    });
    const jsonresponse = await response.json();
    if (jsonresponse.success) {
      fetchCartCount();
      context.fetchCartDetails()
    }
    // console.log("delete", jsonresponse);
  };

  useEffect(() => {
    fetchCartCount();
  }, []);
  const totalqty=data.reduce((previous,current)=> previous+current.quantity,0)
  const totalAmount=data.reduce((previous,current)=> previous+ (current.quantity * current.productId.selling),0)
  return (
    <div className='container mx-auto'>
      <div className='text-center text-2xl my-2 font-semibold'>
        {data.length === 0 && !loading && 
        <p className='bg-white py-2'
        > Empty cart !!!</p>}
      </div>
      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between'>
        <div className='lg:w-full lg:max-w-4xl flex flex-col gap-4'>
          {loading
            ? loadinglist.map(() => (
                <div className='bg-slate-300 lg:w-full h-32 rounded-xl mx-5 mb-1 flex'>
                  <div className='w-44 py-2 h-full animate-pulse  bg-slate-400 rounded-l-xl'>
                   
                  </div>
                  
                  <div className='relative flex-col w-full ml-5 animate-pulse'>
                    <div className='absolute top-0 right-0 py-1 hover:text-red-500 px-2' >
                    </div>
                    <div
                      className='text-xl capitalize font-bold  text-ellipsis animate-pulse w-full p-3 bg-slate-400 rounded-xl mt-1'>
                    </div>
                    <div
                      className='text-md capitalize opacity-40 mt-1 font-bold  text-ellipsis animate-pulse w-full p-3 bg-slate-400 rounded-xl'>
                      
                    </div>
                    <div className='text-red-600 font-semibold animate-pulse w-full p-3 mt-1 bg-slate-400 rounded-xl'>
                      
                    </div>
                    <div className='mt-2'>
                      <button
                        
                        className='bg-slate-400 px-4 rounded-md hover:bg-red-600 hover:text-black hover:font-bold hover:scale-110 py-3 animate-pulse'>
                        
                      </button>
                      <span className='font-bold px-2'></span>
                      <button
                     
                        className=' bg-slate-500  rounded-md hover:bg-red-600 hover:font-bold hover:scale-110 hover:text-red-700 py-3 px-4 animate-pulse'>
                        
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : data.map((product, index) => (
                <div key={product._id} className='bg-slate-300 lg:w-full h-32 rounded-xl mx-5 mb-1 flex'>
                  <div className='w-44 py-2 h-full border-black border-2 rounded-l-xl'>
                    <img
                      src={product?.productId?.productImage[0]}
                      className='w-full h-full object-scale-down rounded-xl mix-blend-multiply'
                      alt={index}
                    />
                  </div>
                  
                  <div className='relative flex-col w-full ml-5'>
                    <div className='absolute top-0 right-0 py-1 hover:text-red-500 px-2' onClick={() => deletecartproduct(product._id)}>
                      <IoClose />
                    </div>
                    <div
                      className='text-xl capitalize font-bold w-full text-ellipsis overflow-hidden
                                line-cl lg:line-clamp-1 whitespace-nowrap pt-2'>
                      {product?.productId?.productName}
                    </div>
                    <div
                      className='text-md capitalize opacity-40 font-bold w-full text-ellipsis overflow-hidden
                                line-cl lg:line-clamp-1 whitespace-nowrap'>
                      {product?.productId?.brandName}
                    </div>
                    <div className='text-red-600 font-semibold'>
                      {currency(product?.productId.selling * product?.quantity)}
                    </div>
                    <div className='mt-2'>
                      <button
                        onClick={() => updateqty(product._id, product.quantity + 1)}
                        className='border-2 border-black px-2 rounded-md hover:bg-red-600 hover:text-black hover:font-bold hover:scale-110'>
                        +
                      </button>
                      <span className='font-bold px-2'>{product?.quantity}</span>
                      <button
                        onClick={() => updateqty(product._id, product.quantity - 1)}
                        className='border-2 border-black px-2 rounded-md hover:bg-red-600 hover:font-bold hover:scale-110 hover:text-red-700'>
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <div className='mt-5 mx-2 lg:w-full max-w-lg lg:mt-0'>
      
          {data.length === 0 && !loading? (
            <div className='lg:w-full p-2 rounded-xl bg-slate-300 animate-pulse h-48'></div>
          ) : (
            
            <div className='w-full rounded-xl bg-slate-200 shadow-md h-44'>
              <h2 className='bg-red-600 w-full font-semibold px-3  text-white text-2xl rounded-t-xl py-1 '>Summary</h2>
              <div className='flex justify-between gap-2  px-3 py-2 w-full'>
                <p className='font-serif  font-bold text-xl'>Total Quantity :</p>
                <p className='font-mono  font-semibold text-red-600 text-xl'>{totalqty}</p>
              </div>
              <div className='flex justify-between gap-2  px-3 py-2 w-full'>
                <p className='font-serif  font-bold text-xl'>Total Price :</p>
                <p className='font-mono  font-semibold text-red-600  text-xl'>{currency(totalAmount)}</p>

              </div>
              <Link to={"/Enquery-cart"}  className='bg-red-600 w-full p-3 text-white flex items-center justify-center rounded-b-xl'>Send Quote</Link>
            </div>
          )}
        </div>  
      </div>
    </div>
  );
};

export default Viewcart;
