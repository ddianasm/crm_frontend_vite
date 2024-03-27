import { IoCloseOutline } from "react-icons/io5";
import { ModalInput } from "@/components/modals/modalInput/ModalInput";
import { ProductStatus } from "../productStatus/ProductStatus";

export const AddProductModal = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen absolute inset-0 bg-black bg-opacity-50">
            <div className="flex flex-col justify-center items-center w-[40%] bg-light h-auto gap-lg_gap rounded-sm_radius p-xl_p shadow-2xl">
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="text-xxl_text">Enter product details</div>
                    <IoCloseOutline className="h-[30px] w-[30px]" />
                </div>
                <div className="flex flex-col justify-center items-center gap-lg_gap w-full">
                    <div className="flex flex-row gap-md_gap w-full justify-between">
                        <div className="flex flex-col gap-md_gap w-full">
                            {/* <input className="h-[40px] w-full text-dark text-sm_text bg-light_gray_blue  rounded-sm_radius outline-none p-md_p" type="text" placeholder="Name" /> */}
                            <ModalInput placeholder='Name' />
                            <ModalInput placeholder='Amount' />
                            <ModalInput placeholder='Price' />
                        </div>
                        <div className="flex flex-col gap-md_gap w-full">
                            <ModalInput placeholder='Customer' />
                            <ModalInput placeholder='Email' />
                            <ModalInput placeholder='Phone' />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="text-sm_text text-gray">Select status</div>
                        <div className="flex flex-row items-center justify-center gap-lg_gap text-md_text">
                            <ProductStatus styles="bg-[#EAF8F0] text-[#70C68E]">New<ProductStatus />
                                <div className="bg-[#EAF8F0] text-[#70C68E] rounded-sm_radius p-sm_p font-bold cursor-pointer">New</div>
                                <div className="bg-[#FDFAEB] text-[#EAD25D] rounded-sm_radius p-sm_p font-bold cursor-pointer">In process</div>
                                <div className="bg-[#F5F1FA] text-[#AC89DA] rounded-sm_radius p-sm_p font-bold cursor-pointer">Completed</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-around w-full gap-md_gap">
                    <button className="bg-light px-xl_p py-md_p rounded-sm_radius text-primary border-2 text-md_text w-full font-bold">Discard</button>
                    <button className="bg-primary hover:bg-primary2 px-xl_p py-md_p rounded-sm_radius text-light text-md_text w-full font-bold">Add Product</button>
                </div>
            </div>
        </div>
    )
}
