import React, { useState } from "react"
import { IoCloseOutline } from "react-icons/io5";
import { ModalInput } from "@/components/modals/modalInput/ModalInput";
import { serverRequests } from "@/API/server.requests";
import { StatusButton } from "../buttons/status_button/StatusButton";

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


export const AddProductModal: React.FC<TAddProductModalPropsType> = ({ setShowAddProductModal }) => {
    const [productData, setProductData] = useState<TProductData>({
        name: '',
        amount: '',
        price: '',
        customer: '',
        email: '',
        phone: '',
        status: EProductStatus.NEW
    })
    const [selectedStatus, setSelectedStatus] = useState<EProductStatus>(EProductStatus.NEW)

    function handleProductDataChange(ProductDataName: TProductDataName, event?: React.ChangeEvent<HTMLInputElement>, status?: EProductStatus) {
        setProductData(prev => ({
            ...prev,
            [ProductDataName]: status ?? event?.target.value
        }));
    }

    const addProduct = () => {
        const preparedData = {
            ...productData,
            amount: parseFloat(productData.amount),
            price: parseFloat(productData.price),
        }
        console.log(preparedData);
        serverRequests.addProduct(preparedData)
            .then(response => {
                if (response.status === 200) {
                    console.log('товар додано в бд');; // Встановлюємо рядки
                } else {
                    console.log('товар не додано в бд');
                }
            })
            .catch(error => {
                console.error('Error getting product:', error);
            })
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
                            <StatusButton className="bg-[#EAF8F0] text-[#70C68E] border" onClick={() => handleProductDataChange('status', undefined, EProductStatus.NEW)}>{EProductStatus.NEW}</StatusButton>
                            <StatusButton className="bg-[#FDFAEB] text-[#EAD25D] border" onClick={() => handleProductDataChange('status', undefined, EProductStatus.IN_PROCESS)}>{EProductStatus.IN_PROCESS}</StatusButton>
                            <StatusButton className="bg-[#F5F1FA] text-[#AC89DA] border" onClick={() => handleProductDataChange('status', undefined, EProductStatus.COMPLETED)}>{EProductStatus.COMPLETED}</StatusButton>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-around w-full gap-md_gap">
                    <button className="bg-light px-xl_p py-md_p rounded-sm_radius text-primary border-2 text-md_text w-full font-bold">Discard</button>
                    <button className="bg-primary hover:bg-primary2 px-xl_p py-md_p rounded-sm_radius text-light text-md_text w-full font-bold" onClick={addProduct}>Add Product</button>
                </div>
            </div>
        </div>
    )
}
