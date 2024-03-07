import { useTable } from 'react-table'
import { COLUMNS } from '@/components/mainPageComponents/table/columns'


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
    selectedOrders: boolean;
    setSelectedOrders: React.Dispatch<React.SetStateAction<{ [id: string]: boolean }>>;
}
export const BasicTable: React.FC<BasicTableProps> = ({ products, selectedOrders, setSelectedOrders }) => {
    console.log(selectedOrders);

    const handleCheckboxChange = (id: number) => {
        setSelectedOrders(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const data = products.map(item => ({
        ...item,
        select: <input type="checkbox" className='h-[20px] w-[20px] cursor-pointer' onChange={() => handleCheckboxChange(item.id)} />
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