import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ROLE from '../common/Role';
import SummaryApi from '../common/index';
import Contactform from '../Components/Contactform';

const Contactadmin = () => {
    const user = useSelector((state) => state.user);
    const userInfo = user?.user || {};
    const [contactInfo, setContactInfo] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const response = await fetch(SummaryApi.showcontact.url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (data.success) {
                    setContactInfo(data.data);
                }
            } catch (err) {
                console.error('Failed to fetch contact info:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchContactInfo();
    }, []);

    const handleContactUpdate = async (updatedContact) => {
        try {
            const response = await fetch(SummaryApi.addcontact.url, {
                method: SummaryApi.addcontact.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedContact),
            });
    
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setContactInfo(updatedContact);
                    setIsEditing(false);
                } else {
                    console.error('Failed to update contact info:', data.message);
                }
            } else {
                console.error('Failed to update contact info: Response not OK');
                const errorText = await response.text();
                console.error('Server response:', errorText);
            }
        } catch (err) {
            console.error('Failed to update contact info:', err);
        }
    };
    

    const handleDeleteContact = async () => {
        if (!contactInfo || !contactInfo[0]._id) return; // Ensure there's an ID to delete
    
        try {
            const response = await fetch(SummaryApi.deletecontact.url(contactInfo[0]._id), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) { // Check if the response status is 200-299
                const data = await response.json();
                if (data.success) {
                    setContactInfo(null);
                } else {
                    console.error('Failed to delete contact info:', data.message);
                }
            } else {
                console.error('Failed to delete contact info: Response not OK');
                const errorText = await response.text(); // Get the error response as text
                console.error('Server response:', errorText);
            }
        } catch (err) {
            console.error('Failed to delete contact info:', err);
        }
    };
    

    return (
        <>
            <div className='text-bold bg-white px-2 shadow-sm h-12 flex items-center justify-between font-bold font-4xl my-2 mx-2'>
                <div className='text-lg'>Contact Information</div>
                {(!user || !user.user || user.user.role !== ROLE.ADMIN) && (
                    <div className='text-orange-500 italic'>
                        You don't have permission to manage contact information.
                    </div>
                )}
            </div>

            {isLoading ? (
                <p className='text-center mt-8 text-gray-600'>Loading contact information...</p>
            ) : (
                <div className='p-4'>
                    {contactInfo && contactInfo.length > 0 ? (
                        <div className='p-4 bg-white rounded-lg shadow-md'>
                            <h3 className='text-2xl font-semibold mb-2'>{contactInfo[0].title}</h3>
                            <p className='text-lg mb-2'>{contactInfo[0].description}</p>
                            <p className='mb-2'><strong>Address:</strong> {contactInfo[0].address}</p>
                            <p className='mb-2'><strong>Email:</strong> {contactInfo[0].email}</p>
                            <p className='mb-2'><strong>Phone:</strong> {contactInfo[0].phone}</p>
                            <div>
                                <h4 className='font-semibold mb-1'>Social Links:</h4>
                                <ul>
                                    {contactInfo[0].socialLinks && Array.isArray(contactInfo[0].socialLinks) ? (
                                        contactInfo[0].socialLinks.map((link, index) => (
                                            <li key={index} className='mb-1'>
                                                <strong>{link.platform}:</strong> <a href={link.url} className='text-blue-500'>{link.url}</a>
                                            </li>
                                        ))
                                    ) : (
                                        <p className='text-gray-600'>No social links available.</p>
                                    )}
                                </ul>
                            </div>
                            {userInfo.role === ROLE.ADMIN && (
                                <div className='mt-4 flex space-x-4'>
                                    <button
                                        className='px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600'
                                        onClick={() => setIsEditing(true)}
                                    >
                                        Update Contact Information
                                    </button>
                                    <button
                                        className='px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600'
                                        onClick={handleDeleteContact}
                                    >
                                        Delete Contact Information
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='text-center mt-8'>
                            <p className='text-gray-600'>No contact information available.</p>
                            {userInfo.role === ROLE.ADMIN && (
                                <button
                                    className='mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600'
                                    onClick={() => setIsEditing(true)}
                                >
                                    Add Contact Information
                                </button>
                            )}
                        </div>
                    )}
                </div>
            )}

            {isEditing && (
                <Contactform
                    contactInfo={contactInfo[0]} // Pass the first contact info object for editing
                    onSave={handleContactUpdate}
                    onClose={() => setIsEditing(false)}
                />
            )}
        </>
    );
};

export default Contactadmin;
