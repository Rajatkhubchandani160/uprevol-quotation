import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LuUserCircle } from 'react-icons/lu';
import { IoEyeSharp, IoEyeOff } from 'react-icons/io5';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import generalContext from '../context';

const LoginPage = () => {
  const navigate=useNavigate();
  const {fetchuserdetails,fetchCartDetails,context} =useContext(generalContext)
  console.log("context -->",context)
  const [data, setData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataResponse=await fetch(SummaryApi.signin.url,{
      method: SummaryApi.signin.method,
      credentials:"include",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    // console.log(JSON.stringify(data)) show login user data
    const Filterdata=await dataResponse.json()
    console.log(Filterdata)
    if(Filterdata.success){
      toast.success(Filterdata.message)
      navigate('/')
      fetchuserdetails()
      fetchCartDetails()
    }
    if(Filterdata.error){
      toast.error(Filterdata.message);
    }
  };

  return (
    <section className='min-h-screen flex items-center justify-center bg-slate-100' id='login'>
      <div className='container mx-auto p-5 sm:p-10'>
        <div className='bg-white shadow-xl rounded-lg p-5 sm:p-10   sm-h:[60vh] w-full max-w-md mx-auto'>
          <LuUserCircle size={50} className='w-20 h-20 m-auto'/>
          <form onSubmit={handleSubmit}>
            <div className='mt-6'>
              <label className='block mb-1'>
                Email:
              </label>
              <div className='bg-slate-100 px-3 py-2 rounded'>
                <input 
                  required 
                  className='h-full w-full p-2 outline-none bg-transparent' 
                  type="email" 
                  placeholder='Enter Your email'
                  name='email' 
                  value={data.email} 
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='mt-3'>
              <label className='block mb-1'>
                Password:
              </label>
              <div className='flex bg-slate-100 px-3 py-2 rounded items-center'>
                <input 
                  onChange={handleChange}
                  name='password' 
                  value={data.password}
                  required 
                  className='h-full w-full p-2 outline-none bg-transparent' 
                  type={showPassword ? "text" : "password"} 
                  placeholder='Enter Your Password'
                />
                <div onClick={() => setShowPassword((prev) => !prev)} className='cursor-pointer'>
                  {showPassword ? <IoEyeOff/> : <IoEyeSharp/>}
                </div>
              </div> 
            </div>
            <div className='mt-4'>
              <a href='/forgot-password' className='block text-right hover:underline hover:text-red-600'>Forgot Password?</a>
            </div>
            <button className='bg-red-500 text-white px-10 py-2 w-full rounded-full mt-6 hover:bg-red-600 transition-all'>
              Login
            </button>
            <p className='mt-4 text-center'>
              Don't have an account? <Link to={"/signup"} className='text-red-600 hover:text-red-700 hover:underline'>Sign-up</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
2