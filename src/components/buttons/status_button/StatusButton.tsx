import cn from 'classnames'
import { EProductStatus } from '@/enums'

type TStatusButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const StatusButton: React.FC<TStatusButton> = ({ className, onClick, children, ...props }) => {
    const getStatusClasses = () => {
        if (children === EProductStatus.NEW) {
            return 'bg-status_new_bg text-red text-status_new_txt'
        }
        if (children === EProductStatus.IN_PROCESS) {
            return 'bg-status_in_process_bg text-status_in_process_txt'
        }
        if (children === EProductStatus.COMPLETED) {
            return 'bg-status_completed_bg text-status_completed_txt'
        }
    }

    return (
        <button
            {...props}
            className={cn('rounded-sm_radius p-sm_p font-bold cursor-pointer capitalize', className, getStatusClasses())} onClick={onClick} >
            {children}
        </button >
    )
}