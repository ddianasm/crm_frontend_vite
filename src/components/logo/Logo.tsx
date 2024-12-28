export const Logo = ({ ...props }) => {

    return (
        <div
            {...props}
            className='flex items-center justify-start cursor-pointer'
        >
            <div className='text-xxl_text text-dark font-bold'>L<span className='text-primary font-bold'>OGO</span></div>
        </div>
    )
}