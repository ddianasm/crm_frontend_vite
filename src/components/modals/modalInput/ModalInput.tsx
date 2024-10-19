type ModalInputPropsType = {
    placeholder: string,
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ModalInput: React.FC<ModalInputPropsType> = ({ placeholder, value, onChange, ...props }) => {
    return (
        <input
            {...props}
            className="h-[40px] w-full text-dark text-sm_text bg-light_gray_blue rounded-sm_radius outline-none p-md_p"
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}