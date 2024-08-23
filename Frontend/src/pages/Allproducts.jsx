import React, { useEffect, useState } from 'react';
import Uploadproduct from '../Components/Uploadproduct';
import SummaryApi from '../common';
import Productcard from '../Components/Productcard';
import { useSelector } from 'react-redux';
import ROLE from '../common/Role';

const Allproducts = () => {
    const user = useSelector(state => state.user);
    const userInfo = user?.user || {};
    const [Uploadproductsection, setUploadproductsection] = useState(false);
    const [allproduct, setallproduct] = useState([]);

    const fetchAllProducts = async () => {
        try {
            const response = await fetch(SummaryApi.allproducts.url);
            const jsonresponse = await response.json();
            setallproduct(jsonresponse?.data || []);
        } catch (error) {
            console.error('Failed to fetch products', error);
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <>
            <div className='text-bold bg-white px-2 shadow-sm h-12 flex items-center justify-between font-bold font-4xl my-2 mx-2'>
                <div className='text-lg'>All products</div>
                {(!user || !user.user || userInfo.role !== ROLE.ADMIN) ? null : (
                    <div className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:border-white px-2 py-1 rounded-full '>
                        <button onClick={() => setUploadproductsection(true)}>Upload product</button>
                    </div>
                )}
            </div>
            {(!user || !user.user || userInfo.role !== ROLE.ADMIN) ? null : (
                <div className='flex items-center flex-wrap py-4 bg-red gap-8 h-[calc(100vh-195px)] overflow-y-auto scrollbar-none'>
                    {allproduct.map((product, index) => (
                        <Productcard
                            fetchData={fetchAllProducts}
                            data={product}
                            key={index + "allProduct"} />
                    ))}
                </div>
            )}
            {Uploadproductsection && <Uploadproduct onclose={() => { setUploadproductsection(false) }} fetchdata={fetchAllProducts} />}
        </>
    );
}

export default Allproducts;
