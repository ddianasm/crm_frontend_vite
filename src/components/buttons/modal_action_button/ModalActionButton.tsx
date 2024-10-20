import cn from "classnames"

type TModalActionButton = {
    className: string;
    onClick: () => void;
    children: React.ReactNode;
}

export const ModalActionButton: React.FC<TModalActionButton> = ({ className, onClick, children }) => {
    return (
        <button className={cn("px-xl_p py-md_p rounded-sm_radius text-md_text w-full font-bold", className)} onClick={onClick}>
            {children}
        </button >
    )
}

//
//