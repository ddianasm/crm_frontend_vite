type TNavigationButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const NavigationButton: React.FC<TNavigationButton> = ({ onClick, children, ...props }) => {
    return (
        <button
            {...props}
            className='flex justify-center items-center p-lg_p gap-sm_gap rounded-sm_radius cursor-pointer bg-[#e0e0e0]'
            onClick={onClick}
        >
            {children}
        </button>
    )
}