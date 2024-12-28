import React, { useState } from "react"
import { IoCloseOutline } from "react-icons/io5";
import { StatusButton } from "@/components/buttons/status_button/StatusButton";
import { ModalActionButton } from "@/components/buttons/modal_action_button/ModalActionButton";
import { addProduct } from "@/service/productService";
import { Formik, FormikProps } from 'formik';
import { FormErrorMessage } from '@/components/errorMessage/ErrorMessage';
import { productSchema } from "@/schemas/product";
import { validateForm } from "@/utils/formValidation";

export enum EProductStatus {
    NEW = 'new',
    IN_PROCESS = 'in process',
    COMPLETED = 'completed'
}
type TAddProductModalPropsType = {
    setShowAddProductModal: React.Dispatch<React.SetStateAction<boolean>>;
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
type TModalHeaderProps = {
    onClick: () => void;
};
type CustomInputProps = {
    id: string;
    type: string;
    placeholder: string;
    formik: any;
};

const initialValues = {
    name: "",
    amount: "",
    price: "",
    customer: "",
    email: "",
    phone: "",
    status: EProductStatus.NEW
};

export const AddProductModal: React.FC<TAddProductModalPropsType> = ({ setShowAddProductModal }) => {

    const handleAddProduct = async (values: TProductData) => {
        try {
            await addProduct(values);
            setShowAddProductModal(false);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen fixed inset-0 bg-black bg-opacity-50">
            <Formik
                initialValues={initialValues}
                validate={(values) => validateForm(productSchema, values)}
                onSubmit={(values) => handleAddProduct(values)}
            >
                {formik => (
                    <form
                        onSubmit={formik.handleSubmit}
                        className="flex flex-col justify-center items-center w-[40%] bg-light h-auto gap-lg_gap rounded-sm_radius p-xl_p shadow-2xl"
                    >
                        <ModalHeader onClick={() => { setShowAddProductModal(false) }} />
                        <div className="flex flex-col justify-center items-center gap-lg_gap w-full">
                            <FormInputs formik={formik} />
                        </div>
                        <ProductStatusSelector formik={formik} />
                        <ModalFooter formik={formik} />
                    </form>
                )}
            </Formik>
        </div >
    )
}

// ModalHeader.tsx
const ModalHeader: React.FC<TModalHeaderProps> = ({ onClick, ...props }) => (
    <div
        {...props}
        className="flex flex-row w-full justify-between items-center"
    >
        <div className="text-xxl_text">Enter product details</div>
        <IoCloseOutline className="h-[30px] w-[30px] cursor-pointer" onClick={onClick} />
    </div>
);

// FormInputs.tsx
export const FormInputs: React.FC<{ formik: FormikProps<TProductData> }> = ({ formik }) => (
    <div className="flex flex-row gap-md_gap w-full justify-between">
        <div className="flex flex-col gap-md_gap w-full">
            <CustomInput
                id="name"
                type="text"
                placeholder="Name"
                formik={formik}
            />
            <CustomInput
                id="amount"
                type="text"
                placeholder="Amount"
                formik={formik}
            />
            <CustomInput
                id="price"
                type="text"
                placeholder="Price"
                formik={formik}
            />
        </div>
        <div className="flex flex-col gap-md_gap w-full">
            <CustomInput
                id="customer"
                type="text"
                placeholder="Customer"
                formik={formik}
            />
            <CustomInput
                id="email"
                type="text"
                placeholder="Email"
                formik={formik}
            />
            <CustomInput
                id="phone"
                type="text"
                placeholder="Phone"
                formik={formik}
            />
        </div>
    </div>
);

// ProductStatusSelector.tsx
export const ProductStatusSelector: React.FC<{ formik: FormikProps<TProductData> }> = ({ formik }) => {
    const [status, setStatus] = useState<EProductStatus>(formik.values.status);

    const handleStatusChange = (newStatus: EProductStatus) => {
        setStatus(newStatus);
        formik.setFieldValue("status", newStatus);
    };

    return (
        <div className="flex flex-row justify-between items-center w-full">
            <div className="text-sm_text text-gray">Select status</div>
            <div className="flex flex-row items-center justify-center gap-lg_gap text-md_text">
                {Object.values(EProductStatus).map(statusOption => (
                    <StatusButton
                        key={statusOption}
                        type="button"
                        className={`${status === statusOption ? 'border' : ''}`}
                        onClick={() => handleStatusChange(statusOption)}
                    >
                        {statusOption}
                    </StatusButton>
                ))}
            </div>
        </div>
    );
};

// ModalFooter.tsx
export const ModalFooter: React.FC<{ formik: FormikProps<TProductData> }> = ({ formik }) => (
    <div className="flex flex-row justify-around w-full gap-md_gap">
        <ModalActionButton
            type="button"
            className="bg-light border-2 text-primary"
            onClick={() => formik.resetForm()}
        >
            Discard
        </ModalActionButton>
        <ModalActionButton
            type="submit"
            className="bg-primary hover:bg-primary2 text-light"
        >
            Add Product
        </ModalActionButton>
    </div>
);

// CustomInput.tsx
const CustomInput: React.FC<CustomInputProps> = ({ id, type, placeholder, formik }) => {
    return (
        <div>
            <input
                id={id}
                type={type}
                className="h-[40px] w-full text-dark text-sm_text bg-light_gray_blue rounded-sm_radius outline-none p-md_p"
                placeholder={placeholder}
                {...formik.getFieldProps(id)}
            />
            {formik.touched[id] && formik.errors[id] ? (
                <FormErrorMessage>{formik.errors[id]}</FormErrorMessage>
            ) : null}
        </div>
    );
};

