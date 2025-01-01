import cn from "classnames"

type TProductActionButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    icon: React.ReactNode;
};

export const ProductActionButton: React.FC<TProductActionButton> = ({ className, onClick, icon, children, ...props }) => {
    return (
        <button
            {...props}
            className={cn('flex flex-row justify-center items-center p-md_p rounded-sm_radius text-light text-md_text gap-sm_gap cursor-pointer capitalize', className)}
            onClick={onClick}
        >
            {icon}
            {children}
        </button >
    )
}