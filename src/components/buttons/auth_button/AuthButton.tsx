'use client'
import cn from "classnames"

type TAuthButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>



export const AuthButton: React.FC<TAuthButtonProps> = ({ className, children, onClick, ...props }) => {
    return (
        <button
            {...props}
            className={cn(
                "flex flex-row items-center justify-center",
                "text-md_text text-center font-bold",
                "p-md_p rounded-sm_radius cursor-pointer",
                className
            )}
            onClick={onClick}
        >
            {children}
        </button >
    )
}