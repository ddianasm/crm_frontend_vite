import { useTable } from 'react-table'
import { COLUMNS } from '@/components/table/columns'
import classNames from 'classnames'
import { FaCheck } from "react-icons/fa6";


type Products = {
    select: string,
    id: number,
    name: string,
    amount: number,
    price: number,
    customer: string,
    email: string,
    phone: string,
    date: string,
    status: string
}
type BasicTableProps = {
    products: Products[];
    selectedOrders: number[];
    setSelectedOrders: React.Dispatch<React.SetStateAction<number[]>>;
}
export const BasicTable: React.FC<BasicTableProps> = ({ products, selectedOrders, setSelectedOrders }) => {
    console.log(selectedOrders);

    const handleCheckboxChange = (id: number) => {
        if (selectedOrders.includes(id)) {
            setSelectedOrders(prevState => prevState.filter(item => item !== id));
        } else {
            setSelectedOrders(prevState => [...prevState, id]);
        }
        console.log('setSelectedOrders', selectedOrders);
    };

    const data = products.map(item => ({
        ...item,
        select: <label htmlFor={`checkbox${item.id}`} className='inline-flex justify-center items-center rounded-sm_radius w-[20px] h-[20px] cursor-pointer border border-gray-300"'>
            <input type="checkbox" id={`checkbox${item.id}`} className='hidden' onChange={() => handleCheckboxChange(item.id)} />
            {selectedOrders.includes(item.id) && <FaCheck className='text-primary' />}
        </label>
    }))
    // h-[20px] w-[20px] cursor-pointer
    const columns = COLUMNS
    const tableInstance = useTable({
        columns,
        data
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance
    return (
        <table {...getTableProps} className="table-auto w-full border-collapse">
            <thead className="bg-primary text-light text-md_text">
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className="px-sm_p py-sm_p text-center">{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} className="border-t">
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                className='px-sm_p py-sm_p text-center'>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}