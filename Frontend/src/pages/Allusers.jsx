import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { MdModeEdit } from "react-icons/md";
import Edituser from '../Components/Edituser';

const Allusers = () => {
    const [allusers, setallusers] = useState([]);
    const [updateuserbutton, setupdateuserbutton] = useState(false)
    const [updateuserdetails, setupdateuserdetails] = useState({
        email:"",
        name:"",
        role:"",
        id:""
    })
    const fetchallusers = async () => {
        try {
            const dataresponse = await fetch(SummaryApi.allusers.url, {
                method: SummaryApi.allusers.method,
                credentials: 'include'
            });
            const jsondata = await dataresponse.json();
           
            if (jsondata.error) {
                toast.error(jsondata.error);
            } else if (Array.isArray(jsondata.message)) {
                setallusers(jsondata.message);
            } else {
                console.error("Expected an array but got:", jsondata);
                setallusers([]);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            setallusers([]);
        }
    };

    useEffect(() => {
        fetchallusers();
    }, []);

    return (
        <div className='font-bold  text-4xl my-2 mx-2'>
            <div>
                <table className='w-full'>
                    <thead>
                        <tr className='w-full text-lg shadow-md flex items-center pl-4 justify-around border-2 border-black'>
                            <th  className='w-10'>Sr.</th>
                            <th  className='w-36'>Name</th>
                            <th  className='w-36' >Email</th>
                            <th  className='w-10'>Role</th>
                            <th  className='pr-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='w-full mt-2 text-lg shadow-md flex  flex-col items-center justify-around border-2 border-black'>
                        {allusers.map((user, id) => (
                            <tr key={id} className='w-full  flex items-center  justify-evenly border-b-2 border-black '>
                                <td className='w-10 mt-1 text-center '>{id + 1}</td>
                                <td className='w-44 text-center break-all' >{user.name}</td>
                                <td className='w-44 text-center break-all'>{user.email}</td>
                                <td className='w-16 '>{user.role}</td>
                                <td className='bg-red-100 flex items-center rounded-xl w-16 hover:bg-red-600 h-7 ml-14 justify-center' 
                                onClick={()=>{
                                    setupdateuserdetails(user)
                                    setupdateuserbutton(true)
                                    }}><MdModeEdit/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                updateuserbutton && (
                    <Edituser onclose={()=>{setupdateuserbutton(false)}} name={updateuserdetails.name} 
                    email={updateuserdetails.email} 
                    role={updateuserdetails.role}
                    userId={updateuserdetails.id}
                    callfunc={fetchallusers()}/>
                )

            }
           
        </div>
    );
};

export default Allusers;
