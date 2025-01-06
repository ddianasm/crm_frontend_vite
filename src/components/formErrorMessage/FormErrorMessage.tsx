type TFormErrorMessageType = {
    children: React.ReactNode;
}

export const FormErrorMessage: React.FC<TFormErrorMessageType> = ({ children, ...props }) => {
    return (
        <div
            {...props}
            className='text-sm_text text-error'
        >
            {children}
        </div>
    )
}