import { useEffect, useState } from 'react'
import { useTable } from 'react-table'
import productsData from '@/contentComponents/productsData.json'
import { COLUMNS } from '@/contentComponents/columns'
import { serverRequests } from '@/API/server.requests'

type Products = {
    id: number,
    name: string
}


export const BasicTable = () => {
    const [products, setProducts] = useState<Products[]>([]);

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




    useEffect(() => {
        serverRequests.getUserProducts()
            .then(response => {
                if (response.data) {
                    console.log(response.data);
                    setProducts(response.data)
                } else {
                    console.log('Products not received');
                }
            })
            .catch(error => {
                console.error('Error getting product:', error);
            })
    }, [])
    return (
        <table {...getTableProps} className="table-auto w-full border-collapse">
            <thead className="bg-primary text-light text-base_text">
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className="px-sm_p py-sm_p text-left">{column.render('Header')}</th>
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
                                            <td {...cell.getCellProps()} className="px-sm_p py-sm_p text-left">{cell.render('Cell')}</td>
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