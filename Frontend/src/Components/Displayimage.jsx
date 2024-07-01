import React from 'react'
import { IoClose } from "react-icons/io5";
const Displayimage = ({
    imgurl,
    onclose
}) => {
  return (
    <>
    <div className='fixed bottom-0 flex items-center justify-center left-80 right-0 top-0'>
    <div className='shadow-md  rounded bg-slate-50 '>
    <div className=' flex-col pt-1 items-center justify-center p-2'>
        <div className='flex hover:text-orange-600 justify-end'>
        <button onClick={onclose}><IoClose/></button>    
        </div>    
        <img  src={imgurl} className='w-full h-[80vh]'/>
        </div>
    </div> 
    </div>
    </>

  )
}

export default Displayimage