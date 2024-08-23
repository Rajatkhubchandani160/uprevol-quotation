import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import SummaryApi from '../common/index';

const SaleList = ({ sales, onEditSale, setSales }) => {
    const [displayedSales, setDisplayedSales] = useState([]);

    useEffect(() => {
        setDisplayedSales(sales);
    }, [sales]);

    const handleDeleteSale = async (id) => {
        try {
            const { url, method } = SummaryApi.deleteSale;
            const response = await fetch(url(id), {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.success) {
                    toast.success(responseData.message);
                    setSales((prevSales) => prevSales.filter((sale) => sale._id !== id));
                } else {
                    toast.error(responseData.message || 'Failed to delete sale');
                }
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Failed to delete sale', error);
            toast.error('Failed to delete sale');
        }
    };

    return (
        <div className="sale-list lg:w-max-w flex flex-col gap-4 overflow-hidden">
            {displayedSales.length > 0 ? (
                displayedSales.map((sale) => (
                    <div key={sale._id} className="sale-item flex items-center w-full justify-between bg-white p-4 shadow rounded mb-2">
                        <div className="flex-1 ml-4">
                            <h3 className="text-lg font-semibold capitalize">{sale.message}</h3>
                            <p className="text-sm text-gray-600">Expires on: {new Date(sale.expirationDate).toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center">
                            <button
                                className="text-blue-600 hover:text-blue-800 mr-2"
                                onClick={() => onEditSale(sale)}
                                aria-label={`Edit sale: ${sale.message}`}
                            >
                                <MdEdit size={24} />
                            </button>
                            <button
                                className="text-red-600 hover:text-red-800"
                                onClick={() => handleDeleteSale(sale._id)}
                                aria-label={`Delete sale: ${sale.message}`}
                            >
                                <MdDelete size={24} />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center w-full p-4">No sales available</div>
            )}
        </div>
    );
};

export default SaleList;
