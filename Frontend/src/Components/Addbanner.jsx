import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Uploadimage from '../helper/Uploadimage';
import { MdDelete } from "react-icons/md";
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Addbanners = ({ onClose, onBannerAdded }) => {
    const user = useSelector(state => state.user);
    const userInfo = user?.user || {};
    const [data, setData] = useState({
        title: "",
        imageUrl: ""
    });

    const handleBanner = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUploadBanner = async (e) => {
        const file = e.target.files[0];
        try {
            const uploadCloudinaryImage = await Uploadimage(file);
            setData((prev) => ({
                ...prev,
                imageUrl: uploadCloudinaryImage.url
            }));
        } catch (error) {
            console.error('Image upload failed', error);
            toast.error('Image upload failed');
        }
    };

    const handleDeleteBannerImage = () => {
        setData((prev) => ({
            ...prev,
            imageUrl: ""
        }));
    };

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(SummaryApi.uploadbanner.url, {
                method: SummaryApi.uploadbanner.method,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();

            if (responseData.success) {
                toast.success(responseData.message);
                onClose();
                onBannerAdded(); // Call this to refresh the banner list
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            console.error('Submission failed', error);
            toast.error('Submission failed');
        }
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg'>
                <button
                    onClick={onClose}
                    className='absolute top-3 right-3 text-gray-500 hover:text-gray-800'
                >
                    <IoClose size={24} />
                </button>
                <h2 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>
                    Upload Banner Details
                </h2>
                <form className='space-y-6' onSubmit={handleSubmitButton}>
                    <div>
                        <label htmlFor="title" className='block text-sm font-medium text-gray-700 mb-2'>
                            Banner Title
                        </label>
                        <input
                            required
                            className='w-full bg-slate-200 rounded px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-500'
                            type="text"
                            name='title'
                            id='title'
                            placeholder='Enter Banner Title'
                            value={data.title}
                            onChange={handleBanner}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="imageUrl" className='block text-sm font-medium text-gray-700 mb-2'>
                            Banner Image
                        </label>
                        <label htmlFor="uploadImageBanner" className=' w-full bg-slate-200 rounded flex flex-col justify-center items-center px-2 py-4 h-48'>
                            <AiOutlineCloudUpload size={40} />
                            <p className='text-sm'>Upload Banner Image</p>
                            <input
                                type="file"
                                className='hidden'
                                id="uploadImageBanner"
                                onChange={handleUploadBanner}
                            />
                        </label>

                        {data.imageUrl && (
                            <div className='relative mt-2'>
                                <img src={data.imageUrl} alt="Banner" className='bg-slate-100 rounded w-full h-auto' />
                                <button
                                    type="button"
                                    className='absolute top-2 right-2 text-red-600 hover:text-red-800'
                                    onClick={handleDeleteBannerImage}
                                >
                                    <MdDelete size={24} />
                                </button>
                            </div>
                        )}
                    </div>

                    <div className='flex justify-end'>
                        <button
                            type='button'
                            className='px-4 py-2 bg-gray-300 text-black rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500'
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-500'
                        >
                            Upload Banner
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addbanners;
