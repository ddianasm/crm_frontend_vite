'use client'
import React from 'react';

type propsButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export const Button = ({ className, children, onClick, ...rest_props }: propsButtonType) => {
    return (
        <button className={className + `  flex flex-row items-center justify-center text-md_text text-center font-bold p-lg_p rounded-sm_radius cursor-pointer`} onClick={onClick} {...rest_props}>
            {children}
        </button>
    )
}