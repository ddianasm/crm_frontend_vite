import React, { useEffect, useState } from "react"
import { TableState, TProduct } from "@/store/TableState";
import cn from "classnames"
import { observer } from "mobx-react-lite";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { AddProductModal } from "@/components/modals/addProductModal/AddProductModal"
import { getProducts, getProductsColumns } from "@/service/productService";
import { StatusButton } from "@/components//buttons/status_button/StatusButton";
import { ProductActionButton } from "@/components/buttons/product_action_button/ProductActionButton";
import { deleteProducts } from "@/service/productService";
import { NoProductsMessage } from "../noProductsMessage/NoProductsMessage";

type TTableViewProps = {
    setProductErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

type TTableUtilitiesProps = {
    setShowAddProductModal: React.Dispatch<React.SetStateAction<boolean>>;
    setProductErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

type TCheckBoxProps = {
    className?: string;
    rowId?: number;
    condition: boolean;
    handler: () => void;
}

type TRowCheckBox = {
    rowId: number
}

type TTableContainerProps = {
    children: React.ReactNode;
    className?: string;
}

type TColumnProps = {
    children: React.ReactNode;
    className?: string;
}

type THeaderRowProps = {
    children: React.ReactNode;
    className?: string;
}

type TRowProps = {
    children: React.ReactNode;
    className?: string;
}

export const TableView: React.FC<TTableViewProps> = observer(({ setProductErrorMessage }) => {
    const [showAddProductModal, setShowAddProductModal] = useState<boolean>(false)

    const columns = TableState.columns;
    console.log(columns);

    useEffect(() => {
        getProducts();
        getProductsColumns()
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center p-xl_p rounded-sm_radius shadow-2xl gap-xs_gap">
            <TableUtilities setShowAddProductModal={setShowAddProductModal} setProductErrorMessage={setProductErrorMessage} />
            <TableContainer>
                <HeaderRow>
                    <HeaderRowCheckBox />
                    {columns.map((column) => (
                        <Column key={column}>{column}</Column>
                    ))}
                </HeaderRow>
                {TableState.rows.map((row) => (
                    <Row key={row.id}>
                        <RowCheckBox rowId={row.id} />
                        {columns
                            .filter((column) => column !== "status")
                            .map((column) => (
                                <Column key={column} className="text-dark">
                                    {(row[column as keyof TProduct])}
                                </Column>
                            ))}
                        <Column key={"status"}>
                            <StatusButton>
                                {row.status}
                            </StatusButton>
                        </Column>
                    </Row>
                ))}
            </TableContainer>
            {TableState.rows.length === 0 &&
                <NoProductsMessage />
            }
            {showAddProductModal &&
                <AddProductModal setShowAddProductModal={setShowAddProductModal} setProductErrorMessage={setProductErrorMessage} />
            }
        </div>
    );
});

const TableContainer: React.FC<TTableContainerProps> = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            className={cn("table border-collapse w-full", className)}
        >
            {children}
        </div>
    )
}

const TableUtilities: React.FC<TTableUtilitiesProps> = observer(({ setShowAddProductModal, setProductErrorMessage }) => {
    const handleDeleteClick = () => {
        if (TableState.hasSelectedRows) {
            deleteProducts(TableState.selectedRows, setProductErrorMessage)
        }
    }
    return (
        <div className='w-full flex flex-row justify-between items-center p-sm_p'>
            <div className='text-xl_text text-dark'>Products <span className='text-md_text text-gray'>({TableState.rows.length})</span></div>
            <div className='flex flex-row gap-lg_gap'>
                <ProductActionButton
                    className="bg-primary"
                    onClick={() => setShowAddProductModal(true)}
                    icon={<IoAdd className='text-light w-[20px] h-[20px]' />}
                >
                    Add
                </ProductActionButton>
                {TableState.hasSelectedRows &&
                    <ProductActionButton
                        className="bg-gray"
                        onClick={handleDeleteClick}
                        icon={<AiOutlineDelete className='text-light w-[20px] h-[20px]' />}
                    >
                        Delete
                    </ProductActionButton>
                }
            </div>
        </div>
    )
})

const HeaderRowCheckBox = observer((props) => {
    return (
        <CheckBox
            {...props}
            condition={TableState.allIsSelected}
            handler={() => TableState.toggleAllSelectedRows()}
        />
    )
})

const RowCheckBox: React.FC<TRowCheckBox> = observer(({ rowId, ...props }) => {
    return (
        <CheckBox
            {...props}
            rowId={rowId}
            condition={TableState.selectedRows.includes(rowId)}
            handler={() => TableState.toggleSelectedRows(rowId)}
        />
    )
})

const CheckBox: React.FC<TCheckBoxProps> = observer(({ className, rowId, condition, handler, ...props }) => {
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

const HeaderRow: React.FC<THeaderRowProps> = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            className={
                cn(
                    "table-row text-gray text-md_text font-bold capitalize",
                    className
                )}
        >
            {children}
        </div>
    )
}

const Row: React.FC<TRowProps> = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            className={cn(
                "table-row text-dark border-t border-light_gray",
                className
            )}
        >
            {children}
        </div>
    )
}

const Column: React.FC<TColumnProps> = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            className={cn(
                "table-cell px-xs_p py-xl_p text-center",
                className
            )}
        >
            {children}
        </div>
    )
} 