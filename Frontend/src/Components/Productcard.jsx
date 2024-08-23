import React, { useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import Editproduct from './Editproduct';
import currency from '../helper/DisplayINRcurrency';

const Productcard = ({ data, fetchData }) => {
    const [openeditproduct, setopeneditproduct] = useState(false);

    const handleDeleteProduct = async (id) => {
        try {
            const response = await fetch(`${SummaryApi.deleteproduct.url}/${id}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const responseData = await response.json();
            if (responseData.success) {
                toast.success(responseData.message);
                fetchData(); // Refresh the list of products
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            console.error('Failed to delete product', error);
            toast.error('Failed to delete product');
        }
    };

    return (
        <>
            <div className='bg-slate-200 text-black border-zinc-800 border-2 rounded-lg p-2 ml-2 relative group'>   
                <img className='mx-auto h-full object-fill mix-blend-multiply' src={data?.productImage[0]} height={140} width={140} alt={data?.productName} />
                <div className='font-bold w-[140px] mt-1 flex items-center justify-between'>
                    <h1 className='overflow-hidden text-ellipsis whitespace-nowrap pt-1 capitalize'>{data?.productName}</h1>
                </div>
                <div className='font-bold mt-1 flex items-center justify-between'>
                    {currency(data.selling)}
                    <div className='flex items-center'>
                    <div className='cursor-pointer p-1 rounded-full'>
                        <MdEdit onClick={() => setopeneditproduct(true)} />
                    </div>
                     <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <MdDelete className="text-red-700 cursor-pointer" onClick={() => handleDeleteProduct(data._id)} />
                </div>
                </div>
                </div>
            </div>
            {openeditproduct && <Editproduct productdata={data} onclose={() => { setopeneditproduct(false) }} fetchData={fetchData} />}
        </>
    )
}

export default Productcard;
