type FormErrorMessageType = {
    children: React.ReactNode;
}

export const FormErrorMessage: React.FC<FormErrorMessageType> = ({ children, ...props }) => {
    return (
        <div
            {...props}
            className='text-sm_text text-error'
        >
            {children}
        </div>
    )
}