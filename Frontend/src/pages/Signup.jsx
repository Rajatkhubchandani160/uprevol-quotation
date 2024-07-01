import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { IoEyeSharp, IoEyeOff } from 'react-icons/io5';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
const LoginPage = () => {
  const navigate=useNavigate();
  const [data, setData] = useState(
    { 
        email: '',
        password: '',
        name:'',
        confirmpassword:'',
        profileimage:'',
        });
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmpassword, setshowconfirmpassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value) 
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(data.password=data.confirmpassword){
    const response=await fetch(SummaryApi.signup.url,{
      method :SummaryApi.signup.method,
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    const filterresult= await response.json()
    if(filterresult.success){
      toast.success(filterresult.message)
      navigate("/login");
    }
    else{
      toast.error(filterresult.message)
    }
    console.log("data",filterresult)
  }
  else{
    console.log("Pleace Check and Congirm Password");
  }
};
  const handleuploadChange=(e)=>{
    const file=e.target.files[0]
    console.log(file)
    setData((prev)=>{
        return{
            ...prev,
            profileimage :file
        }
    })
  }

  return (

    <section className='min-h-screen flex items-center justify-center bg-slate-100' id='login'>
      <div className='container  mx-auto p-5 sm:p-10'>
        <div className='bg-white relative shadow-xl rounded-lg p-5 sm:p-10   w-full max-w-md mx-auto'>
            {!data.profileimage?
            <div>
            <form>
                <label>
                <FaUserCircle size={50} className='w-20 h-20 m-auto'/>
                    <input className='hidden' type="file" onChange={handleuploadChange}/>
                </label>
            </form>
          
          </div> :
          <div className='m-auto w-24 h-24 rounded-[50%] border-2 overflow-hidden  border-black'><img src='https://imgs.search.brave.com/HJ7mMmRgakDaN_wuCHx99ZZs5nEbsA0-ttI_mlgzolQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw'/></div>
          }
          <form onSubmit={handleSubmit}>
          <div className='mt-6'>
              <label className='block mb-1'>
                Name :
              </label>
              <div className='bg-slate-100 px-3 py-2 rounded'>
                <input 
                  required 
                  className='h-full w-full p-2 outline-none bg-transparent' 
                  type="text" 
                  placeholder='Enter Your name'
                  name='name' 
                  value={data.name} 
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='mt-6'>
              <label className='block mb-1'>
                Email :
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
            <div className='mt-6'>
              <label className='block mb-1'>
                Password :
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
            <div className='mt-6'>
              <label className='block mb-1'>
               Confirm Password :
              </label>
              <div className='flex bg-slate-100 px-3 py-2 rounded items-center'>
                <input 
                  onChange={handleChange}
                  name='confirmpassword' 
                  value={data.confirmpassword}
                  required 
                  className='h-full w-full p-2 outline-none bg-transparent' 
                  type={showconfirmpassword ? "text" : "password"} 
                  placeholder='Enter Your Password'
                />
                <div onClick={() => setshowconfirmpassword((prev) => !prev)} className='cursor-pointer'>
                  {showconfirmpassword ? <IoEyeOff/> : <IoEyeSharp/>}
                </div>
              </div> 
            </div>
            <button className='bg-red-500 text-white px-10 py-2 w-full rounded-full mt-6 hover:bg-red-600 transition-all'>
              Sign Up
            </button>
             <p className='mt-4 text-center'>
              Already have an account? <Link to={"/login"} className='text-red-600 hover:text-red-700 hover:underline'>Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
