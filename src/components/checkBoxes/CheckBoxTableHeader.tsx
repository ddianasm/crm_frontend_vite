import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { productsContext, selectedOrdersContext } from "@/components/tableView/TableView";

export const CheckBoxTableHeader = () => {
    const products = useContext(productsContext)
    const productsId = products.map(product => product.id)
    const { selectedOrders, setSelectedOrders } = useContext(selectedOrdersContext);

    const test = () => {
        if (productsId.length === selectedOrders.length) {
            setSelectedOrders([])
            console.log(selectedOrders);
        } else {
            setSelectedOrders(productsId)
        }
    }


    return (
        <label htmlFor={`checkboxHeader`} className='inline-flex justify-center items-center rounded-sm_radius w-[20px] h-[20px] cursor-pointer border border-gray-300"'>
            <input type="checkbox" id={`checkboxHeader`} className='hidden' onChange={test} />
            {productsId.length === selectedOrders.length && <FaCheck className='text-light' />}
        </label>
    )
}