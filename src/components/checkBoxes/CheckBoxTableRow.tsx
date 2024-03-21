import { FaCheck } from "react-icons/fa6";
import { productsContext } from "@/components/tableView/TableView";
import { useContext } from "react";

type CheckBoxTableHeaderType = {
    itemId: number,
    selectedOrders: number[],
    setSelectedOrders: React.Dispatch<React.SetStateAction<number[]>>
}


export const CheckBoxTableRow: React.FC<CheckBoxTableHeaderType> = ({ itemId, selectedOrders, setSelectedOrders }) => {

    const products = useContext(productsContext)

    const handleCheckboxChange = (id: number) => {
        if (selectedOrders.includes(id)) {
            setSelectedOrders(prevState => prevState.filter(item => item !== id));
        } else {
            setSelectedOrders(prevState => [...prevState, id]);
        }
    };

    return (
        <label htmlFor={`checkbox${itemId}`} className='inline-flex justify-center items-center rounded-sm_radius w-[20px] h-[20px] cursor-pointer border border-gray-300"'>
            <input type="checkbox" id={`checkbox${itemId}`} className='hidden' onChange={() => handleCheckboxChange(itemId)} />
            {selectedOrders.includes(itemId) && <FaCheck className='text-primary' />}
        </label>
    )
}