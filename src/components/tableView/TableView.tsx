import React, { useEffect, useState } from "react"
import { TableState } from "@/store/TableState";
import cn from "classnames"
import { observer } from "mobx-react-lite";
import { IoCheckmarkSharp } from "react-icons/io5";
import { ProductType } from "@/contexts/ProductContext"
import { IoAdd } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { AddProductModal } from "@/components/modals/AddProductModal"
import { serverRequests } from "@/API/server.requests"

type TAddProductModalProps = {
    setShowAddProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TableView = observer(() => {
    const [showAddProductModal, setShowAddProductModal] = useState<boolean>(false)
    const [columns, setColumns] = useState<string[]>([]);

    const getProducts = () => {
        serverRequests.getUserProducts()
            .then(response => {
                if (response.data) {
                    TableState.setRows(response.data);
                } else {
                    console.log('Дані не отримані.');
                }
            })
            .catch(error => {
                console.error('Error getting product:', error);
            })
    }
    const getColumns = () => {
        serverRequests.getColumns()
            .then(response => {
                if (response.data) {
                    setColumns(response.data)
                } else {
                    console.log('Дані не отримані.');
                }
            })
            .catch(error => {
                console.error('Error getting columns:', error);
            })
    }

    useEffect(() => {
        getColumns()
        getProducts()
    }, [])

    return (
        <div className="w-full p-xl_p rounded-sm_radius shadow-2xl">
            <TableUtilities setShowAddProductModal={setShowAddProductModal} />
            <TableContainer>
                <HeaderRow>
                    <HeaderRowCheckBox />
                    {columns.map(column =>
                        <Column key={column}>
                            {column}
                        </Column>
                    )}
                </HeaderRow>
                {
                    TableState.rows.map(row =>
                        <Row key={row.id}>
                            <RowCheckBox rowId={row.id} />
                            {columns.map(column =>
                                <Column key={column} className="text-dark">
                                    {(row[column as keyof ProductType])}
                                </Column>
                            )}
                        </Row>
                    )
                }
            </TableContainer>
            {showAddProductModal &&
                <AddProductModal setShowAddProductModal={setShowAddProductModal} />
            }
        </div>
    )
})

type divPropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type labelPropsType = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
type CheckBoxPropsType = {
    className?: string;
    rowId?: number;
    condition: boolean;
    handler: () => void;
}
type RowCheckBoxType = {
    rowId: number
}


const TableContainer: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div className={cn("table border-collapse w-full", className)} {...props}>
            {children}
        </div>
    )
}

const TableUtilities: React.FC<TAddProductModalProps> = observer(({ setShowAddProductModal }) => {
    return (
        <div className='flex flex-row justify-between items-center p-sm_p'>
            <div className='text-xl_text text-dark'>Products <span className='text-md_text text-gray'>({TableState.rows.length})</span></div>
            {true &&
                <div className='flex flex-row gap-lg_gap text-md_text'>
                    <div className='flex flex-row justify-center items-center p-md_p rounded-sm_radius text-light text-md_text gap-sm_gap bg-primary cursor-pointer'
                        onClick={() => setShowAddProductModal(true)}
                    >
                        <IoAdd className='text-light text-[20px]' />
                        <div>Add</div>
                    </div>
                    <div className='flex flex-row justify-center items-center p-md_p rounded-sm_radius text-light gap-sm_gap bg-gray cursor-pointer'>
                        <AiOutlineDelete className='text-light text-[20px]' />
                        <div>Delete</div>
                    </div>
                </div>
            }
        </div>
    )
})


const HeaderRowCheckBox: React.FC<labelPropsType> = observer((props) => {
    return (
        <CheckBox
            {...props}
            condition={TableState.allIsSelected}
            handler={() => TableState.toggleAllSelectedRows()}
        />
    )
})

const RowCheckBox: React.FC<RowCheckBoxType> = observer(({ rowId, ...props }) => {
    return (
        <CheckBox
            {...props}
            rowId={rowId}
            condition={TableState.selectedRows.includes(rowId)}
            handler={() => TableState.toggleSelectedRows(rowId)}
        />
    )
})

const CheckBox: React.FC<CheckBoxPropsType> = observer(({ className, rowId, condition, handler, ...props }) => {
    return (
        <label
            {...props}
            htmlFor={rowId?.toString()}
            className={cn(
                "inline-flex justify-center items-center rounded-sm_radius w-[20px] h-[20px] cursor-pointer border border-gray",
                className
            )}
        >
            <input
                type="checkbox"
                id={rowId?.toString()}
                className='hidden'
                onChange={handler}
            />
            {condition &&
                <IoCheckmarkSharp className='text-dark' />
            }
        </label>
    )
})


const HeaderRow: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div className={cn("table-row text-gray text-md_text font-bold capitalize", className)} {...props}>
            {children}
        </div>
    )
}

const Row: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div className={cn("table-row text-dark border-t border-light_gray", className)} {...props}>
            {children}
        </div>
    )
}

const Column: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div className={cn("table-cell px-xs_p py-xl_p text-center", className)} {...props}>
            {children}
        </div>
    )
} 