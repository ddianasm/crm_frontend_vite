type ProductStatusPropsType = {
    styles: string,
    children: any
}

export const ProductStatus: React.FC<ProductStatusPropsType> = ({ children }) => {
    return (
        <div className="bg-[#EAF8F0] text-[#70C68E] rounded-sm_radius p-sm_p font-bold cursor-pointer">
            {children}
        </div >
    )
}