import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from '../common';

const Contactform = ({ contactInfo, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        address: '',
        email: '',
        phone: '',
        socialLinks: [
            { platform: 'facebook', url: '' },
            { platform: 'twitter', url: '' },
            { platform: 'instagram', url: '' },
            { platform: 'linkedin', url: '' },
            { platform: 'whatsapp', url: '' },
        ]
    });
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (contactInfo) {
            setFormData({
                title: contactInfo.title || '',
                description: contactInfo.description || '',
                address: contactInfo.address || '',
                email: contactInfo.email || '',
                phone: contactInfo.phone || '',
                socialLinks: contactInfo.socialLinks.length > 0 ? contactInfo.socialLinks : formData.socialLinks,
            });
            setIsEdit(true);
        }
    }, [contactInfo]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSocialLinkChange = (index, e) => {
        const updatedSocialLinks = [...formData.socialLinks];
        updatedSocialLinks[index].url = e.target.value;
        setFormData({ ...formData, socialLinks: updatedSocialLinks });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(SummaryApi.addcontact.url, {
                method: isEdit ? 'POST' : 'POST', // Use PUT for edit, POST for add
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                toast.success(isEdit ? 'Contact information updated successfully!' : 'Contact information saved successfully!');
                onSave(data.data);
            } else {
                toast.error('Failed to save contact information');
            }
        } catch (error) {
            toast.error('An error occurred: ' + error.message);
        }
    };

    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-y-auto p-8 relative'>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 text-gray-600 hover:text-gray-900'
                >
                    <IoClose size={24} />
                </button>

                <h3 className='text-3xl font-semibold mb-8 text-center text-gray-900'>
                    {isEdit ? 'Edit Contact Information' : 'Add Contact Information'}
                </h3>
                <form onSubmit={handleSubmit} className='space-y-8'>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='space-y-4'>
                            <label className='block text-lg font-medium text-gray-700'>
                                Title
                                <input
                                    type='text'
                                    name='title'
                                    value={formData.title}
                                    onChange={handleChange}
                                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                                    required
                                />
                            </label>
                            <label className='block text-lg font-medium text-gray-700'>
                                Description
                                <textarea
                                    name='description'
                                    value={formData.description}
                                    onChange={handleChange}
                                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                                    required
                                />
                            </label>
                        </div>
                        <div className='space-y-4'>
                            <label className='block text-lg font-medium text-gray-700'>
                                Address
                                <input
                                    type='text'
                                    name='address'
                                    value={formData.address}
                                    onChange={handleChange}
                                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                                    required
                                />
                            </label>
                            <label className='block text-lg font-medium text-gray-700'>
                                Email
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                                    required
                                />
                            </label>
                            <label className='block text-lg font-medium text-gray-700'>
                                Phone
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                                    required
                                />
                            </label>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            Social Links
                            {formData.socialLinks.map((link, index) => (
                                <div key={index} className='flex items-center space-x-4 mt-2'>
                                    <span className='w-1/4 text-lg font-semibold capitalize'>{link.platform}:</span>
                                    <input
                                        type='url'
                                        value={link.url}
                                        onChange={(e) => handleSocialLinkChange(index, e)}
                                        className='w-3/4 border border-gray-300 rounded-md shadow-sm py-2 px-3'
                                    />
                                </div>
                            ))}
                        </label>
                    </div>
                    <div className='flex justify-center space-x-4'>
                        <button
                            type='submit'
                            className='px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600'
                        >
                            {isEdit ? 'Update Contact Information' : 'Save Contact Information'}
                        </button>
                        <button
                            type='button'
                            onClick={onClose}
                            className='px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600'
                        >
                            Cancel
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Contactform;
