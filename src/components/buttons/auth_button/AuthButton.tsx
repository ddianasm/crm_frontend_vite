'use client'
import React from 'react';

type TPropsAuthButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export const AuthButton = ({ className, children, onClick, ...rest_props }: TPropsAuthButton) => {
    return (
        <button className={className + `  flex flex-row items-center justify-center text-md_text text-center font-bold p-md_p rounded-sm_radius cursor-pointer`} onClick={onClick} {...rest_props}>
            {children}
        </button>
    )
}