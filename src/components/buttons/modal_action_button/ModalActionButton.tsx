import cn from 'classnames'

type TModalActionButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const ModalActionButton: React.FC<TModalActionButtonProps> = ({ className, onClick, children, ...props }) => {
    return (
        <button
            {...props}
            className={cn('px-xl_p py-md_p rounded-sm_radius text-md_text w-full font-bold', className)} onClick={onClick}
        >
            {children}
        </button >
    )
}