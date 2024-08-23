import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const Bannerlist = ({ refreshBanners }) => {
    const [banners, setBanners] = useState([]);

    const fetchBanners = async () => {
        try {
            const response = await fetch(SummaryApi.displaybanners.url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log("Fetched data: ", data);
            setBanners(data.data);
        } catch (error) {
            console.error('Failed to fetch banners', error);
            toast.error('Failed to fetch banners');
        }
    };

    useEffect(() => {
        fetchBanners();
    }, [refreshBanners]);

    const handleDeleteBanner = async (id) => {
        try {
            const response = await fetch(`${SummaryApi.deletebanner.url}/${id}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const responseData = await response.json();
            if (responseData.success) {
                toast.success(responseData.message);
                fetchBanners(); 
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            console.error('Failed to delete banner', error);
            toast.error('Failed to delete banner');
        }
    };

    return (
        <div className="banner-list lg:w-[80vw] flex flex-col gap-4">
            {banners.length > 0 ? (
                banners.map((banner) => (
                    <div key={banner._id} className="banner-item flex items-center w-full justify-between bg-white p-4 shadow rounded mb-2">
                        <div className="flex-shrink-0 w-1/3 max-w-xs">
                            <img src={banner.imageUrl} alt={banner.title} className="w-full h-full object-cover rounded" />
                        </div>
                        <div className="flex-1 ml-4">
                            <h3 className="text-lg font-semibold capitalize">{banner.title}</h3>
                        </div>
                        <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteBanner(banner._id)}>
                            <MdDelete size={24} />
                        </button>
                    </div>
                ))
            ) : (
                <div className="text-center w-full p-4">No banners available</div>
            )}
        </div>
    );
};

export default Bannerlist;
