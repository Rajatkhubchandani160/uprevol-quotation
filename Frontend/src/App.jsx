import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header'
import Context from './context';
import { Outlet } from 'react-router-dom'
import './index.css'
import Footer from './Components/Footer'
import SummaryApi from './common';
import { useDispatch } from 'react-redux';
import { setuserdetails } from './Store/userslice'; 
import SaleStrip from './Components/Salestrip';
const App = () => {
  const dispatch=useDispatch()
  const [cartproductcount, setcartproductcount] = useState(0)
  const fetchuserdetails=async()=>{
    const userdata=await fetch(SummaryApi.currentuser.url,{
      method:SummaryApi.currentuser.method,
      credentials:"include"
    })
    var userjsondata=await userdata.json()
    console.log(userdata ,userjsondata)
    if(userjsondata.success){
      dispatch(setuserdetails(userjsondata.data))
    }
  }
  const fetchCartDetails=async()=>{
    const cartcount =await fetch(SummaryApi.cartProductCount.url,{
      method:SummaryApi.cartProductCount.method,
      credentials:'include'
    })
    const jsonresponse=await cartcount.json()
    // console.log("No of product in cart",jsonresponse.data.count)
    setcartproductcount(jsonresponse.data.count)
  }
  useEffect(()=>{
    fetchuserdetails();
    fetchCartDetails();
  },[fetchCartDetails])
  return (
    <>
    <Context.Provider value={{
      fetchuserdetails,
      cartproductcount,
      fetchCartDetails
    }}>
    <ToastContainer position='top-center' />
    <SaleStrip/>
    <Header/>
    <main className='min-h-[calc(100vh-120px)] pt-16'>
    <Outlet/>
    </main>
    <Footer/>
    </Context.Provider>
    </>
  )
}

export default App