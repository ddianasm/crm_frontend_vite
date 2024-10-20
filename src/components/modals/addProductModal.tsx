import React, { useState } from "react"
import { IoCloseOutline } from "react-icons/io5";
import { ModalInput } from "@/components/modals/modalInput/ModalInput";
import { serverRequests } from "@/API/server.requests";
import { StatusButton } from "@/components/buttons/status_button/StatusButton";
import { ModalActionButton } from "@/components/buttons/modal_action_button/ModalActionButton";
import { getProducts } from "@/productService";
import { addProduct } from "@/productService";

type TAddProductModalPropsType = {
    setShowAddProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}
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

export type TProductDataName = keyof TProductData;

const initialProductData: TProductData = {
    name: '',
    amount: '',
    price: '',
    customer: '',
    email: '',
    phone: '',
    status: EProductStatus.NEW,
};


export const AddProductModal: React.FC<TAddProductModalPropsType> = ({ setShowAddProductModal }) => {
    const [productData, setProductData] = useState<TProductData>(initialProductData)

    const handleProductDataChange = (
        ProductDataName: TProductDataName,
        event?: React.ChangeEvent<HTMLInputElement>,
        status?: EProductStatus) => {
        setProductData(prev => ({
            ...prev,
            [ProductDataName]: status ?? event?.target.value
        }));
    }

    const handleAddProduct = () => {
        const preparedData = {
            ...productData,
            amount: parseFloat(productData.amount),
            price: parseFloat(productData.price),
        }
        addProduct(preparedData)
        setShowAddProductModal(false)
    }

    const handleDiscardProductData = () => {
        setProductData(initialProductData)
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen absolute inset-0 bg-black bg-opacity-50">
            <div className="flex flex-col justify-center items-center w-[40%] bg-light h-auto gap-lg_gap rounded-sm_radius p-xl_p shadow-2xl">
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="text-xxl_text">Enter product details</div>
                    <IoCloseOutline className="h-[30px] w-[30px] cursor-pointer" onClick={() => { setShowAddProductModal(false) }} />
                </div>
                <div className="flex flex-col justify-center items-center gap-lg_gap w-full">
                    <div className="flex flex-row gap-md_gap w-full justify-between">
                        <div className="flex flex-col gap-md_gap w-full">
                            <ModalInput placeholder='Name' value={productData.name} onChange={(event) => handleProductDataChange('name', event)} />
                            <ModalInput placeholder='Amount' value={productData.amount} onChange={(event) => handleProductDataChange('amount', event)} />
                            <ModalInput placeholder='Price' value={productData.price} onChange={(event) => handleProductDataChange('price', event)} />
                        </div>
                        <div className="flex flex-col gap-md_gap w-full">
                            <ModalInput placeholder='Customer' value={productData.customer} onChange={(event) => handleProductDataChange('customer', event)} />
                            <ModalInput placeholder='Email' value={productData.email} onChange={(event) => handleProductDataChange('email', event)} />
                            <ModalInput placeholder='Phone' value={productData.phone} onChange={(event) => handleProductDataChange('phone', event)} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="text-sm_text text-gray">Select status</div>
                        <div className="flex flex-row items-center justify-center gap-lg_gap text-md_text">
                            <StatusButton className={`${productData.status === EProductStatus.NEW ? 'border' : ''}`} onClick={() => handleProductDataChange('status', undefined, EProductStatus.NEW)}>{EProductStatus.NEW}</StatusButton>
                            <StatusButton className={`${productData.status === EProductStatus.IN_PROCESS ? 'border' : ''}`} onClick={() => handleProductDataChange('status', undefined, EProductStatus.IN_PROCESS)}>{EProductStatus.IN_PROCESS}</StatusButton>
                            <StatusButton className={`${productData.status === EProductStatus.COMPLETED ? 'border' : ''}`} onClick={() => handleProductDataChange('status', undefined, EProductStatus.COMPLETED)}>{EProductStatus.COMPLETED}</StatusButton>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-around w-full gap-md_gap">
                    <ModalActionButton className="bg-light border-2 text-primary" onClick={handleDiscardProductData}>Discard</ModalActionButton>
                    <ModalActionButton className="bg-primary hover:bg-primary2 text-light" onClick={handleAddProduct}>Add Product</ModalActionButton>
                </div>
            </div>
        </div >
    )
}
