import React from 'react';
import { Button } from '@/components/buttons/auth_button/Button';
import { ThemeSwitcher } from '@/components/theme_switcher/ThemeSwitcher';


export const TopPanel = () => {
    return (
        <div className='col-span-1 row-span-1 flex justify-end items-center px-xl_p gap-md_gap bg-light shadow-lg'>
            <ThemeSwitcher />
            <Button className='
                text-primary
                hover:text-primary2
            '>
                Sign In</Button>
            <Button className='
	            text-light
                bg-primary
	            hover:bg-primary2
            '>
                Sign Up
            </Button>
        </div>
    )
}