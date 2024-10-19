import cn from "classnames"
type TStatusButton = {
    onClick: () => void;
    className: string;
    children: React.ReactNode;
}

export const StatusButton: React.FC<TStatusButton> = ({ onClick, className, children }) => {
    return (
        <button className={cn("rounded-sm_radius p-sm_p font-bold cursor-pointer capitalize", className)} onClick={onClick} >
            {children}
        </button >
    )
}