import { useTable } from 'react-table'
import { COLUMNS } from '@/components/mainPageComponents/table/columns'


type Products = {
    name: string,
    amount: number,
    price: number,
    customer: string,
    email: string,
    phone: string,
    status: string
}
type BasicTableProps = {
    products: Products[];
}
export const BasicTable: React.FC<BasicTableProps> = ({ products }) => {
    console.log(products);


    const data = products
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
            <thead className="bg-primary text-light text-base_text">
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
                                            <td {...cell.getCellProps()} className="px-sm_p py-sm_p text-center">{cell.render('Cell')}</td>
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