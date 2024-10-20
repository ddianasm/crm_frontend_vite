import cn from "classnames"

type TProductActionButton = {
    className: string;
    onClick: () => void;
    icon: JSX.Element;
    children: React.ReactNode;
}

export const ProductActionButton: React.FC<TProductActionButton> = ({ className, onClick, icon, children, ...props }) => {
    return (
        <button
            className={cn('flex flex-row justify-center items-center p-md_p rounded-sm_radius text-light text-md_text gap-sm_gap cursor-pointer capitalize', className)}
            onClick={onClick}
            {...props}
        >
            {icon}
            {children}
        </button >
    )
}