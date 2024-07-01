import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaUserLarge } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/Role';

const Profile = () => {
  const user = useSelector(state => state.user);
  const userInfo = user?.user || {};
  const navigate=useNavigate();
  

  return (
    <>
      <aside className='bg-slate-100 h-[calc(100%-139px)] ml-1 mt-2 absolute top-[10%] w-96 shadow-xl'>
        <div className='h-40 w-full mt-0 bg-zinc-200'>
          <div className='border-2 border-black rounded-full w-20 ml-40 absolute top-10 h-20 flex items-center justify-center text-4xl font-bold'>
            {userInfo.name ? userInfo.name[0] : <FaUserLarge size={17} />}
          </div>
        </div>
        <div className='flex flex-col mt-7 items-center justify-center p-4 break-all text-lg'>
          {/* <p className='capitalize'>Role : {userInfo.role || 'N/A'}</p> */}
          <p className='capitalize'>Name : {userInfo.name || 'N/A'}</p>
          <p>Email : {userInfo.email || 'N/A'}</p>
          {/* <p>Mobile : {userInfo.number || 'N/A'}</p> */}
        </div>
        {(userInfo.role == ROLE.ADMIN)?
        <div className='grid p-4 mt-1 leading-loose'>
          
          <div className='flex items-center w-full hover:bg-zinc-200 pl-2 gap-5'>
            <FaUsers />
            <Link to='all-users'>All Users</Link>
          </div>
          <div className='flex items-center w-full hover:bg-zinc-200 pl-2 gap-5'>
            <MdOutlineProductionQuantityLimits />
            <Link to='all-products'>All Products</Link>
          </div>
        </div>:null}
      </aside>
      <main className='bg-slate-100 ml-[26vw] w-[71vw] mt-2 h-[81.2vh] overflow-hidden border-1 border-black p-2 shadow-xl rounded'>
        <Outlet />
      </main>
    </>
  );
};

export default Profile;
