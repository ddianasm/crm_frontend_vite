import { IoCloseOutline } from "react-icons/io5";

type TProductErrorMessage = {
    productErrorMessage: string | null;
    setProductErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
};

export const ProductErrorMesssage: React.FC<TProductErrorMessage> = ({ productErrorMessage, setProductErrorMessage }) => {

    return (
        <div className="flex items-center justify-center absolute top-[40px] right-0 rounded-sm_radius gap-sm_gap text-md_text">
            <div className="text-error">{productErrorMessage}</div>
            <IoCloseOutline className="w-[20px] h-[20px] cursor-pointer" onClick={() => setProductErrorMessage(null)} />
        </div>
    )
}