import React from 'react';
import { useSelector } from 'react-redux';
import { FaUserLarge } from 'react-icons/fa6';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiCube, BiWrench } from 'react-icons/bi';
import { BsImage } from 'react-icons/bs';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { MdOutlineContactPhone } from "react-icons/md";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/Role';

const Profile = () => {
  const user = useSelector(state => state.user);
  const userInfo = user?.user || {};
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <aside className='bg-slate-100 h-auto md:h-screen w-full md:w-96 mt-2 md:mt-0 rounded-xl shadow-md border border-black overflow-y-auto'>
        <div className='h-40 w-full bg-zinc-200 relative'>
          <div className='border-2 border-black rounded-full w-20 lg:ml-40 ml-40 absolute top-10 h-20 flex items-center justify-center text-4xl font-bold'>
            {userInfo.name ? userInfo.name[0] : <FaUserLarge size={17} />}
          </div>
        </div>
        <div className='flex flex-col mt-7 items-center justify-center p-4 text-lg'>
          <p className='capitalize'>Name : {userInfo.name || 'N/A'}</p>
          <p>Email : {userInfo.email || 'N/A'}</p>
        </div>
        {(userInfo.role === ROLE.ADMIN) &&
        <div className='grid p-4 mt-1 leading-loose gap-1'>
          <div className='flex items-center w-full hover:bg-zinc-200 pl-2 gap-5'>
            <HiOutlineUserGroup />
            <Link to='all-users'>All Users</Link>
          </div>
          <div className='flex items-center w-full hover:bg-zinc-200 pl-2 gap-5'>
            <BiCube />
            <Link to='all-products'>All Products</Link>
          </div>
          <div className='flex items-center w-full hover:bg-zinc-200 pl-2 gap-5'>
            <BsImage />
            <Link to='edit-home'>All Banners</Link>
          </div>
          <div className='flex items-center w-full hover:bg-zinc-200 pl-2 gap-5'>
            <AiOutlineDollarCircle />
            <Link to='edit-sale'>Live Sale</Link>
          </div>
          <div className='flex items-center w-full hover:bg-zinc-200 pl-2 gap-5'>
            <BiWrench />
            <Link to='edit-service'>Service</Link>
          </div>
          <div className='flex items-center w-full hover:bg-zinc-200 pl-2 gap-5'>
            <MdOutlineContactPhone />
            <Link to='edit-contact'>Contact</Link>
          </div>
        </div>}
      </aside>

      <main className='bg-slate-100 w-full md:w-[calc(100%-24rem)] mt-2 md:mt-0 h-full overflow-y-auto border border-black p-4 shadow-lg rounded'>
        <Outlet />
      </main>
    </div>
  );
};

export default Profile;
