'use client'
import React, { useState } from 'react';
import { TopPanel } from '@/components/top_panel/TopPanel';
import { LeftPanel } from '@/components/left_panel/LeftPanel';
import { SignUpForm } from '@/components/forms/SignUpForm';
import { SignInForm } from '@/components/forms/SignInForm';

export const MainPage = () => {
    const [selected, setSelected] = useState<'авторизація' | 'реєстрація'>('реєстрація');
    console.log(selected);

    return (
        <div className='grid grid-cols-2 h-screen' style={{ gridTemplateColumns: '250px 1fr', gridTemplateRows: '60px 1fr' }}>
            <LeftPanel selected={selected} setSelected={setSelected} />
            <TopPanel />
            {/* <SignUpForm /> */}
            {selected === 'реєстрація' && (
                <SignUpForm />
            )}
            {selected === 'авторизація' && (
                <SignInForm />
            )}
        </div>
    )
}