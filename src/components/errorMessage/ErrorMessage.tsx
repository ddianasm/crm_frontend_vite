import { ErrorMessageContext } from "@/App";
import React, { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";

type TDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ErrorMesssage: React.FC<TDivProps> = () => {
    const errorMessage = useContext(ErrorMessageContext)?.errorMessage
    return (
        <div className="flex items-center justify-center absolute top-[40px] right-0 rounded-sm_radius gap-sm_gap text-md_text">
            <div className="text-error">{errorMessage}</div>
            <IoCloseOutline className="w-[20px] h-[20px] cursor-pointer" />
        </div>
    )
}