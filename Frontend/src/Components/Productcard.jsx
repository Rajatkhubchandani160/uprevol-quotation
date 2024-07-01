import React, { useState ,useEffect } from 'react'
import { MdEdit } from "react-icons/md";
import Editproduct from './Editproduct';
import currency from '../helper/DisplayINRcurrency';

const Productcard = ({data,fetchData}) => {
    const [openeditproduct, setopeneditproduct] = useState(false)

    useEffect(() => {
      
    }, [fetchData])
    
  return (
    <>
    
          <div className='bg-slate-200 text-black border-zinc-800 border-2 rounded-lg p-2 ml-2 relative group '>
          <img className='mx-auto h-full object-fill mix-blend-multiply' src={data?.productImage[0]} height={140} width={140}/>
          <div className='font-bold w-[140px] mt-1 flex items-center justify-between'>         
            <h1 className='overflow-hidden text-ellipsis whitespace-nowrap pt-1 capitalize'>{data?.productName}</h1>
          </div>
          <div className='font-bold mt-1 flex items-center justify-between'> 
            {currency(data.selling)}
            <p className='cursor-pointer  p-1 rounded-full hidden group-hover:block' onClick={()=>setopeneditproduct(true)}><MdEdit/></p>
            </div>
          </div>
    {openeditproduct && <Editproduct productdata={data} 
    onclose={()=>{setopeneditproduct(false)}}
    fetchData={fetchData}/>}
    </>
  )
}

export default Productcard