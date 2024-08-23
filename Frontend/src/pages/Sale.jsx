import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ROLE from '../common/Role';
import SummaryApi from '../common/index';
import AddSale from '../Components/AddSale';
import SaleList from '../Components/SaleList';

const Sale = () => {
    const user = useSelector((state) => state.user);
    const userInfo = user?.user || {};
    const [sales, setSales] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentSale, setCurrentSale] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await fetch(SummaryApi.displaySale.url, {
                    method: SummaryApi.displaySale.method,
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (data.success) {
                    setSales(data.data);
                } else {
                    console.error('Failed to fetch sales:', data.message);
                }
            } catch (err) {
                console.error('Failed to fetch sales:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSales();
    }, []);

    const handleSaleUpdate = async (updatedSale) => {
        try {
            const response = await fetch(SummaryApi.editSale.url, {
                method: SummaryApi.editSale.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedSale),
            });

            const data = await response.json();
            if (data.success) {
                setSales((prevSales) =>
                    prevSales.map((sale) =>
                        sale._id === updatedSale._id ? updatedSale : sale
                    )
                );
                setIsEditing(false);
                toast.success('Sale updated successfully!');
            } else {
                console.error('Failed to update sale:', data.message);
                toast.error('Failed to update sale');
            }
        } catch (err) {
            console.error('Failed to update sale:', err);
            toast.error('Failed to update sale');
        }
    };

    return (
        <>
            <div className="text-bold bg-white px-2 shadow-sm h-12 flex items-center justify-between font-bold font-4xl my-2 mx-2">
                <div className="text-lg">Sales Management</div>
                {userInfo.role === ROLE.ADMIN && (
                    <button
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600"
                        onClick={() => {
                            setIsEditing(true);
                            setCurrentSale(null);
                        }}
                    >
                        Add Sale
                    </button>
                )}
            </div>

            {isLoading ? (
                <p className="text-center mt-8 text-gray-600">Loading sales...</p>
            ) : (
                <div className="p-4">
                    {sales.length > 0 ? (
                        <SaleList
                            sales={sales}
                            setSales={setSales}
                            onEditSale={(sale) => {
                                setCurrentSale(sale);
                                setIsEditing(true);
                            }}
                        />
                    ) : (
                        <p className="text-center mt-8 text-gray-600">No sales available.</p>
                    )}
                </div>
            )}

            {isEditing && (
                <AddSale
                    sale={currentSale}
                    onSave={handleSaleUpdate}
                    onClose={() => setIsEditing(false)}
                />
            )}
        </>
    );
};

export default Sale;
