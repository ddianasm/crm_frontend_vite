import { LeftPanel } from "@/components/leftPanel/LeftPanel"
import { TableView } from "@/components/tableView/TableView"
import { observer } from "mobx-react-lite"
import cn from "classnames"
import { ErrorMesssage } from "@/components/errorMessage/ErrorMessage"
import { AddProductModal } from "@/components/modals/addProductModal/AddProductModal"
import { TableState } from "@/store/TableState"
import React, { useState } from "react"
import { addProduct } from "@/service/productService"

export enum EProductStatus {
    NEW = 'new',
    IN_PROCESS = 'in process',
    COMPLETED = 'completed'
}

type TProductData = {
    name: string;
    amount: string;
    price: string;
    customer: string;
    email: string;
    phone: string;
    status: EProductStatus;
};

export const MainPage = observer(() => {
    const [showAddProductModal, setShowAddProductModal] = useState<boolean>(false);

    const handleAddProduct = async (values: TProductData) => {
        try {
            const result = await addProduct(values);
            if (result.status = 200) {
                setShowAddProductModal(false);
            } else {

            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="flex flex-row w-screen h-screen relative">
            <LeftPanel />
            <PageContainer>
                <ErrorMesssage>Error</ErrorMesssage>
                <TableView setShowAddProductModal={setShowAddProductModal} />
                {showAddProductModal &&
                    <AddProductModal setShowAddProductModal={setShowAddProductModal} handleAddProduct={handleAddProduct} />
                }
            </PageContainer >
        </div>
    )
})

type divPropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const PageContainer: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            className={cn("flex flex-col gap-[40px] justify-center items-center w-[95%] mx-[40px] relative", className)}
        >
            {children}
        </div>
    )
}
