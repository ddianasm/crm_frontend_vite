import { useTable } from 'react-table'
import { COLUMNS } from '@/components/table/columns'
import classNames from 'classnames'
import { FaCheck } from "react-icons/fa6";
import { CheckBoxTableRow } from '../checkBoxes/CheckBoxTableRow';

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
type TableProps = {
    products: Products[];
    selectedOrders: number[];
    setSelectedOrders: React.Dispatch<React.SetStateAction<number[]>>;
}

export const Table: React.FC<TableProps> = ({ products, selectedOrders, setSelectedOrders }) => {

    const data = products.map(item => ({
        ...item,
        select: <CheckBoxTableRow itemId={item.id} selectedOrders={selectedOrders} setSelectedOrders={setSelectedOrders} />
    }))
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