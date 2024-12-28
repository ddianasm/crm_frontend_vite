import React, { useEffect, useState } from "react"
import { TableState, TProduct } from "@/store/TableState";
import cn from "classnames"
import { observer } from "mobx-react-lite";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { AddProductModal } from "@/components/modals/addProductModal/AddProductModal"
import { getProducts } from "@/service/productService";
import { StatusButton } from "../buttons/status_button/StatusButton";
import { ProductActionButton } from "../buttons/product_action_button/ProductActionButton";
import { deleteProducts } from "@/service/productService";

type TAddProductModalProps = {
    setShowAddProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}
type TDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type TLabelProps = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
type TCheckBoxProps = {
    className?: string;
    rowId?: number;
    condition: boolean;
    handler: () => void;
}
type TRowCheckBox = {
    rowId: number
}
type TableViewProps = {
    setShowAddProductModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TableView: React.FC<TableViewProps> = observer(({ setShowAddProductModal }) => {

    const columns = TableState.getColumns();

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="w-full p-xl_p rounded-sm_radius shadow-2xl">
            <TableUtilities setShowAddProductModal={setShowAddProductModal} />
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
                            <StatusButton className="bg-[#EAF8F0] text-[#70C68E]">
                                {row.status}
                            </StatusButton>
                        </Column>
                    </Row>
                ))}
            </TableContainer>
        </div>
    );
});

const TableContainer: React.FC<TDivProps> = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            className={cn("table border-collapse w-full", className)}
        >
            {children}
        </div>
    )
}

const TableUtilities: React.FC<TAddProductModalProps> = observer(({ setShowAddProductModal }) => {
    const handleDeleteClick = () => {
        if (TableState.selectedRows.length !== 0) {
            deleteProducts(TableState.selectedRows)
        }
    }
    return (
        <div className='flex flex-row justify-between items-center p-sm_p'>
            <div className='text-xl_text text-dark'>Products <span className='text-md_text text-gray'>({TableState.rows.length})</span></div>
            <div className='flex flex-row gap-lg_gap'>
                <ProductActionButton
                    className="bg-primary"
                    onClick={() => setShowAddProductModal(true)}
                    icon={<IoAdd className='text-light w-[20px] h-[20px]' />}
                >
                    Add
                </ProductActionButton>
                <ProductActionButton
                    className="bg-gray"
                    onClick={handleDeleteClick}
                    icon={<AiOutlineDelete className='text-light w-[20px] h-[20px]' />}
                >
                    Delete
                </ProductActionButton>
            </div>
        </div>
    )
})

const HeaderRowCheckBox: React.FC<TLabelProps> = observer((props) => {
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

const HeaderRow: React.FC<TDivProps> = ({ children, className, ...props }) => {
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

const Row: React.FC<TDivProps> = ({ children, className, ...props }) => {
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

const Column: React.FC<TDivProps> = ({ children, className, ...props }) => {
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