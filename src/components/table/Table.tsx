import { useContext } from 'react';
import { useTable } from 'react-table'
import { COLUMNS } from '@/components/table/columns'
import { productsContext } from "@/components/tableView/TableView";
import { CheckBoxTable } from '../checkBox/CheckBox';

type Product = {
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
// type TableProps = {
//     products: Products[];
//     selectedOrders: number[];
//     setSelectedOrders: React.Dispatch<React.SetStateAction<number[]>>;
// }

export const Table = () => {
    const products = useContext(productsContext)

    const data = products.map(product => ({
        ...product,
        select: <CheckBoxTable productId={product.id} />
        // select: <CheckBoxTableRow productId={product.id} selectedOrders={selectedOrders} setSelectedOrders={setSelectedOrders} />
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
        <div className='w-full p-xl_p rounded-sm_radius shadow-2xl'>
            <div className='flex flex-row items-center p-sm_p'>
                <div className='text-xl_text text-dark'>Products <span className='text-md_text text-gray'>(23)</span></div>
            </div>
            <table {...getTableProps} className="border-collapse w-full">
                <thead className="text-gray text-md_text">
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()} className="px-xs_p py-md_p text-center">{column.render('Header')}</th>
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
                                <tr {...row.getRowProps()} className="border-t border-light_gray">
                                    {
                                        row.cells.map(cell => {
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className='px-xs_p py-xl_p text-center text-dark'>
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
        </div>
    )
}