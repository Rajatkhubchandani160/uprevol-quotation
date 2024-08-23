import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { BsEarbuds } from "react-icons/bs";
import { MdCable } from "react-icons/md";
import { GoDeviceDesktop } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setuserdetails } from '../Store/userslice';
import generalContext from '../context';

const Header = () => {
  const dispatch = useDispatch();
  const context = useContext(generalContext);
  const navigate = useNavigate();

  // Log user state to verify it's populated correctly
  const user = useSelector(state => state.user); // from userslice.js
  console.log("User object:", user);

  const Handlelogout = async () => {
    const fetchdata = await fetch(SummaryApi.logout.url, {
      method: SummaryApi.logout_user,
      credentials: 'include'
    });
    const data = await fetchdata.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setuserdetails());
    }
    if (data.error) {
      toast.error(data.error);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    if (!value) {
      navigate('/');
    } else {
      navigate(`/search-product?q=${value}`);
    }
  };

  return (
    <>
      <div className="navbar h-11 bg-white z-[1] shadow-md fixed w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box flex items-start justify-evenly w-[70vw] h-90 flex-col">
            <li><Link to={'/service'}>Services</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <li>
              <details>
                <summary>Products</summary>
                <ul className="opacity-2 p-2 flex flex-col items-start w-[30vw] h-40 transition-all">
                  <li><Link to={'/product'}><HiMiniDevicePhoneMobile size={20} />Phone</Link></li>
                  <li><Link to={'/product'}><MdCable size={20} /> Accessories</Link></li>
                  <li><Link to={'/product'}><GoDeviceDesktop size={20} />TV & Media</Link></li>
                  <li><Link to={'/product'}><BsEarbuds size={20} />Smart Devices</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="navbar-start">
          <Link to={'/'}>
            <img src='https://imgs.search.brave.com/NNk1t_KAInIjf_vl4BvTsEOBaSVjja1LZ3_WcvUHbMM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/MS94aWFvbWktbG9n/b19icmFuZGxvZ29z/Lm5ldF9kc2Rodi01/MTJ4NTEyLnBuZw' width={43} className='rounded-xl mx-6' />
          </Link>
          <div className='hidden xl:flex'>
            <ul className="menu menu-horizontal ml-3 px-1">
              <li><Link to={'/service'}>Services</Link></li>
              <li><Link to={'/contact'}>Contact Us</Link></li>
              <li>
                <details>
                  <summary>Products</summary>
                  <ul className="menu menu-horizontal ml-3 px-2">
                    <li><Link to={'/product'}><HiMiniDevicePhoneMobile size={20} />Phone</Link></li>
                    <li><Link to={'/product'}><MdCable size={20} /> Accessories</Link></li>
                    <li><Link to={'/product'}><GoDeviceDesktop size={20} />TV & Media</Link></li>
                    <li><Link to={'/product'}><BsEarbuds size={20} />Smart Devices</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center ml-9 hidden lg:flex">
          <input
            className='px-3 pr-40 p-1 rounded-l-full w-[10-vw] outline-none focus-within:shadow-md pl-4'
            type='text'
            placeholder='Search Product Here...'
            onChange={handleSearch}
          />
          <div className='w-13 bg-orange-600 px-3 p-1 rounded-r-full'>
            <CiSearch size={24} />
          </div>
        </div>

        <div className="navbar-end flex items-center">
          <div className="flex-none">
            {user && user.user && (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost mt-2 mr-1 btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">{context.cartproductcount}</span>
                  </div>
                </div>
                <div tabIndex={0} className="mt-4 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">{context.cartproductcount} Items</span>
                    <div className="card-actions">
                      <Link to={"/view-cart"} className="btn btn-primary btn-block">View cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="mt-1">
              <div className='border-2 border-black mb-1 rounded-full w-8 mt-2 h-8 flex items-center justify-center text-xl'>
                {user && user.user ? user.user.name[0] : <FaUserLarge size={17} />}
              </div>
            </div>
            {user && user.user && (
              <div tabIndex={0} className="mt-4 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">{user.user.name}</span>
                  <Link to={'/profile/all-products'}>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">View Profile</button>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {user && user.user ? (
            <Link onClick={Handlelogout} className="btn mx-6 px-6 bg-red-600 hover:bg-red-700 text-white rounded-full">Logout</Link>
          ) : (
            <Link to={"/Login"} className="btn mx-6 px-6 bg-red-600 hover:bg-red-700 text-white rounded-full">Login</Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
