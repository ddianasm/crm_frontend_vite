import { FaCheck } from "react-icons/fa6";

export const CheckBoxTableHeader = () => {
    return (
        <label htmlFor={`checkboxHeader`} className='inline-flex justify-center items-center rounded-sm_radius w-[20px] h-[20px] cursor-pointer border border-gray-300"'>
            <input type="checkbox" id={`checkboxHeader`} className='hidden' />
            <FaCheck className='text-light' />
        </label>
    )
}