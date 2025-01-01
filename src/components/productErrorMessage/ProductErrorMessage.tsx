import { ErrorMessageContext } from "@/pages/MainPage";
import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";

export const ErrorMesssage = () => {
    const context = useContext(ErrorMessageContext)!;
    const { errorMessage, setErrorMessage } = context
    return (
        <div className="flex items-center justify-center absolute top-[40px] right-0 rounded-sm_radius gap-sm_gap text-md_text">
            <div className="text-error">{errorMessage}</div>
            <IoCloseOutline className="w-[20px] h-[20px] cursor-pointer" onClick={() => setErrorMessage(null)} />
        </div>
    )
}