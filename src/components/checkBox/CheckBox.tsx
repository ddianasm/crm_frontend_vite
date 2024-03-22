import React, { useContext } from 'react';
import { selectedOrdersContext, productsContext } from '@/components/tableView/TableView';
import { IoCheckmarkSharp } from "react-icons/io5";

type CheckBoxTableProps = {
    productId?: number;
};

export const CheckBoxTable: React.FC<CheckBoxTableProps> = ({ productId }) => {
    const { selectedOrders, setSelectedOrders } = useContext(selectedOrdersContext);
    const products = useContext(productsContext);
    const productsId = products.map(product => product.id);

    const handleCheckboxChange = (id?: number) => {
        if (id) {
            if (selectedOrders.includes(id)) {
                setSelectedOrders(prevState => prevState.filter(item => item !== id));
            } else {
                setSelectedOrders(prevState => [...prevState, id]);
            }
        } else {
            if (productsId.length === selectedOrders.length) {
                setSelectedOrders([]);
            } else {
                setSelectedOrders(productsId);
            }
        }
    }

    return (
        <label htmlFor={!productId ? `checkboxHeader` : `checkbox${productId}`} className='inline-flex justify-center items-center rounded-sm_radius w-[20px] h-[20px] cursor-pointer border border-gray'>
            <input type="checkbox" id={!productId ? `checkboxHeader` : `checkbox${productId}`} className='hidden' onChange={() => handleCheckboxChange(productId)} />
            {productId && selectedOrders.includes(productId) && <IoCheckmarkSharp className='text-dark' />}
            {!productId && productsId.length === selectedOrders.length && <IoCheckmarkSharp className='text-dark' />}
        </label>
    );
};