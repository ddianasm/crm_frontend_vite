'use client'
import React, { useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import classNames from 'classnames';

export const ThemeSwitcher = () => {
    const [isSelected, setIsSelected] = useState(false)

    return <div className='flex flex-row items-center justify-center relative p-sm_p gap-sm_gap bg-dark rounded-[30px] cursor-pointer' onClick={() => setIsSelected(!isSelected)}>
        <div className={classNames('flex absolute left-[6px] h-[24px] w-[24px] bg-light rounded-full transition-all duration-300', { 'ml-[24px]': isSelected })}></div>
        <FaSun className='h-[20px] w-[20px] text-[#EBC545]' />
        <FaMoon className='h-[20px] w-[20px] text-[#EBC545]' />
    </div>
}