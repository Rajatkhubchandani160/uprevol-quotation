import React, { useState } from 'react';
import Addbanners from '../Components/Addbanner';
import { useSelector } from 'react-redux';
import ROLE from '../common/Role'; 
import Bannerlist from '../Components/Bannerlist';

const Homeadmin = () => {
    const user = useSelector(state => state.user);
    const userInfo = user?.user || {};
    const [uploadProductSection, setUploadProductSection] = useState(false);
    const [refreshBanners, setRefreshBanners] = useState(false);

    const handleBannerAdded = () => {
        setRefreshBanners(prev => !prev);
    };

    return (
        <>
            <div className='text-bold bg-white px-2 shadow-sm h-12 flex items-center justify-between font-bold font-4xl my-2 mx-2'>
                <div className='text-lg'>All Banners</div>
                {(!user || !user.user || userInfo.role !== ROLE.ADMIN) ? null : (
                    <div className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:border-white px-2 py-1 rounded-full '>
                        <button onClick={() => setUploadProductSection(true)}>Add Banner</button>
                    </div>
                )}
            </div>
            {(!user || !user.user || userInfo.role !== ROLE.ADMIN) ? null : (
                <div className='flex  flex-wrap py-4 gap-8 h-[calc(100vh-195px)] overflow-y-scroll scrollbar-none custom-scrollbar'>
                    <Bannerlist refreshBanners={refreshBanners} />
                </div>
            )}
            {uploadProductSection && <Addbanners onClose={() => setUploadProductSection(false)} onBannerAdded={handleBannerAdded} />}
        </>
    );
};

export default Homeadmin;
