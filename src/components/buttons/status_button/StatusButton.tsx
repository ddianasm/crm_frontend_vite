import cn from "classnames"
import { EProductStatus } from "@/components/modals/addProductModal/AddProductModal"
type TStatusButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const StatusButton: React.FC<TStatusButton> = ({ className, onClick, children, ...props }) => {
    const getStatusClasses = () => {
        if (children === EProductStatus.NEW) {
            return 'bg-[#EAF8F0] text-[#70C68E]'
        } else if (children == EProductStatus.IN_PROCESS) {
            return 'bg-[#FDFAEB] text-[#EAD25D]'
        } else {
            return 'bg-[#F5F1FA] text-[#AC89DA]'
        }
    }

    return (
        <button
            {...props}
            className={cn("rounded-sm_radius p-sm_p font-bold cursor-pointer capitalize", className, getStatusClasses())} onClick={onClick} >
            {children}
        </button >
    )
}