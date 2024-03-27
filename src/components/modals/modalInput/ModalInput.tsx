type ModalInputPropsType = {
    placeholder: string
}

export const ModalInput: React.FC<ModalInputPropsType> = ({ placeholder }) => {
    return (
        <input className="h-[40px] w-full text-dark text-sm_text bg-light_gray_blue rounded-sm_radius outline-none p-md_p" type="text" placeholder={placeholder} />
    )
}