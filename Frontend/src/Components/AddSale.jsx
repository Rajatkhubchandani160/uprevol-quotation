import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';
import SummaryApi from '../common';

const AddSale = ({ onSave, onClose, sale }) => {
    const [saleData, setSaleData] = useState({
        message: sale?.message || '',
        expirationDate: sale?.expirationDate || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSaleData({ ...saleData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(SummaryApi.addSale.url , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(saleData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Sale successfully added!');
                setSaleData({
                    message: '',
                    expirationDate: '',
                }); // Clear the form after submission
                onSave(data); // Update the parent component with the new sale data
            } else {
                toast.error(data.message || 'Failed to add sale.');
            }
        } catch (error) {
            toast.error('An error occurred while adding the sale.');
            console.error('Error:', error);
        }
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
                <button
                    onClick={onClose}
                    className='absolute top-3 right-3 text-gray-500 hover:text-gray-800'
                >
                    <AiOutlineClose size={24} />
                </button>
                <h2 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>
                    {sale ? 'Edit Sale' : 'Add New Sale'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Sale Message
                        </label>
                        <textarea
                            name='message'
                            value={saleData.message}
                            onChange={handleChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-500'
                            placeholder='Enter sale message'
                        />
                    </div>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Expiration Date
                        </label>
                        <input
                            type='date'
                            name='expirationDate'
                            value={saleData.expirationDate}
                            onChange={handleChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-500'
                        />
                    </div>
                    <div className='flex justify-end'>
                        <button
                            type='button'
                            className='px-4 py-2 mr-3 bg-gray-300 text-black rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500'
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-500'
                        >
                            {sale ? 'Update Sale' : 'Add Sale'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSale;
