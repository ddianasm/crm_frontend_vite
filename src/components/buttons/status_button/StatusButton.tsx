import cn from "classnames"
type TStatusButton = {
    className: string;
    onClick: () => void;
    children: React.ReactNode;
}

export const StatusButton: React.FC<TStatusButton> = ({ className, onClick, children }) => {
    return (
        <button className={cn("rounded-sm_radius p-sm_p font-bold cursor-pointer capitalize", className)} onClick={onClick} >
            {children}
        </button >
    )
}