import cn from 'classnames'

type TProductActionButtonProps = {
    icon: React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ProductActionButton: React.FC<TProductActionButtonProps> = ({ className, onClick, icon, children, ...props }) => {
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