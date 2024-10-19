import { useTable } from 'react-table'
import { COLUMNS } from '@/components/table/columns'
import { CheckBoxTable } from '../checkBox/CheckBox';
import { IoAdd } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { useProductContext } from '@/contexts/ProductContext';
import { useSelectedProductsContext } from '@/contexts/SelectedProductsContext';

type TablePropsType = {
    setShowAddProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Table: React.FC<TablePropsType> = ({ setShowAddProductModal }) => {
    const products = useProductContext()
    const selectedOrders = useSelectedProductsContext() // вибрані продукти контекст


    const data = products.map(product => ({
        ...product,
        select: <CheckBoxTable productId={product.id} />
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
            <div className='flex flex-row justify-between items-center p-sm_p'>
                <div className='text-xl_text text-dark'>Products <span className='text-md_text text-gray'>({products.length})</span></div>

                <div className='flex flex-row gap-lg_gap text-md_text'>
                    <div className='flex flex-row justify-center items-center p-md_p rounded-sm_radius text-light text-md_text gap-sm_gap bg-primary cursor-pointer'
                        onClick={() => { setShowAddProductModal(true) }}
                    >
                        <IoAdd className='text-light text-[20px]' />
                        <div>Add</div>
                    </div>
                    <div className='flex flex-row justify-center items-center p-md_p rounded-sm_radius text-light gap-sm_gap bg-gray cursor-pointer'>
                        <AiOutlineDelete className='text-light text-[20px]' />
                        <div>Delete</div>
                    </div>
                </div>

                {/* {selectedOrders.selectedOrders.length > 0 &&
                    <div className='flex flex-row gap-lg_gap text-md_text'>
                        <div className='flex flex-row justify-center items-center p-md_p rounded-sm_radius text-light text-md_text gap-sm_gap bg-primary cursor-pointer'
                            onClick={() => { setShowAddProductModal(true) }}
                        >
                            <IoAdd className='text-light text-[20px]' />
                            <div>Add</div>
                        </div>
                        <div className='flex flex-row justify-center items-center p-md_p rounded-sm_radius text-light gap-sm_gap bg-gray cursor-pointer'>
                            <AiOutlineDelete className='text-light text-[20px]' />
                            <div>Delete</div>
                        </div>
                    </div>
                } */}
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