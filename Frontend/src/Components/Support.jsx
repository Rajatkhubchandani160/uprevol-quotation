import React from 'react'
import { Link } from 'react-router-dom'
import { RiCustomerService2Line } from "react-icons/ri";
import { MdEscalatorWarning } from "react-icons/md";
import { LuServer } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";
const Support = () => {
  return (
    <>
    <div className='h-max w-full bg-slate-100 mt-20 text-black'>
    <Link to={'/service'}>  <div className='font-bold text-3xl m-auto text-center hover:underline'>Xiaomi Support</div>
    </Link>
    </div>
    <div className='bg-slate-200 selection:text-orange-400 lg:flex lg:flex-nowrap lg-flex-row flex-wrap shadow-sm h-fit w-full mt-7'>
      <div className=' flex flex-col  items-center   h-96 w-96 mx-8 my-4 '>
        <RiCustomerService2Line size={120} className='mt-10 hover:scale-110'/>
        <Link to={"/contact"} className='font-bold text-xl mt-4'>Customer Support</Link>
        <a href="" className='text-sm text-center  mt-6'>Contact us via live-chat ,email <br/>and phone-calls</a>
      </div>
      <div className=' flex flex-col items-center  selection:text-orange-400 h-96 w-96 mx-8 my-4'>
        <MdEscalatorWarning size={120} className='mt-10 hover:scale-110'/>
        <a href="" className='font-bold text-xl mt-4'>Warrenty</a>
        <a href="" className='text-sm text-center  mt-6'>Local warrenty policy protection is provided</a>
      </div>
      <div className=' flex flex-col items-center selection:text-orange-400  h-96 w-96 mx-8 my-4'>
        <LuServer size={120} className='mt-10 hover:scale-110'/>
        <Link to={"https://alsgp0.fds.api.xiaomi.com/xiaomi-b2c-i18n-upload/user-guides/f8c679b71def3f42a5416033394bf5a7.pdf"} 
        target="_blank" className='font-bold text-xl mt-4'>User Guide</Link>
        <a href="" className='text-sm text-center  mt-6'>Find and download<br/> your  Xiomi product user guide </a>
      </div>
      <div className=' flex flex-col items-center  selection:text-orange-400  h-96 w-96 mx-8 my-4'>
        <RiQuestionAnswerLine size={120} className='mt-10 hover:scale-110'/>
        <Link to={"#"}  target="_blank"  className='font-bold text-xl mt-4'>FAQ</Link>
        <a href="" className='text-sm text-center  mt-6'>Seacrch for help about Xiomi</a>
      </div>
      </div>
    </>
  )
}

export default Support