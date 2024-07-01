import React, { useState } from 'react'
import ROLE from '../common/Role'
import { IoIosClose } from "react-icons/io";
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const Edituser = ({name,email,userId,role,onclose,callfunc}) => {
    const [Userrole, setUserrole] = useState(role)
    const Handleuserrole=(e)=>{
        setUserrole(e.target.value)
        console.log(e.target.value)
    }
    const Updateuser=async()=>{
        const fetchuser=await fetch(SummaryApi.updateUser.url,{
            method:SummaryApi.updateUser.method,
            credentials:'include',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                userId:userId,
                role:Userrole,
            })
        })
        const responseData=await fetchuser.json()
        if(responseData.success){
            toast.success(responseData.message)
            onclose(),
            callfunc()
        }else{
            toast.error(responseData.error)
        }
        console.log("role updated",responseData)
    }
  return (
    <div className='w-full bg-slate-200 opacity-50 top-0 bottom-0 left-0 right-0 h-full fixed z-10 flex items-center z--1 justify-between '>
        <div className=' rounded mx-[50%] text-2xl p-2 h-56 mt-5 shadow-md w-96 bg-white opacity-3 z-1'>
            <div className='flex-col h-30 items-center justify-center w-72'>
            <div className='flex items-center justify-between'>         <h1 className='flex items-center border-b-2 border-b-black justify-center w-56 overflow-hidden' >Change User Role </h1>
              <button onClick={onclose}><IoIosClose/></button>  
            </div>

            <p className='break-all text-xl mt-3 '> Name : {name}</p>
            <p className='break-all text-xl'>Email : {email}</p>
            <label className='text-xl mr-3'>Role :</label>
            <select className='text-xl 'value={Userrole}  onChange={Handleuserrole} >
                {
                    Object.values(ROLE).map(el =>{
                        return(
                            <option value={el} key={el} >{el}</option>
                        )
                    })
                }
                <option value=""></option>
            </select>
            </div>
            <button onClick={Updateuser} className='text-xl  border-2 border-black p-1 rounded-xl mt-4 ml-16 focus:bg-green-500'>Change role</button>
        </div>
        </div>
  )
}

export default Edituser