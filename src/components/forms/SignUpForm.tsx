'use client'
import React, { useState } from "react"
import { Logo } from '@/components/logo/Logo';
import { Button } from '@/components/buttons/auth_button/Button';
import axios from 'axios';

export const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState<{ username: string; password: string; }>({ username: '', password: '' })

    function sendtDataToServer() {
        console.log(signUpData);
        axios.post('http://localhost:3000/user/create', signUpData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
            .then(response => {
                console.log(response.data); // Дані з сервера
            })
            .catch(error => {
                console.error('Помилка при відправці даних:', error);
            });
    }
    function testsendtDataToServer() {
        console.log(signUpData);
        axios.get('http://localhost:3000/test', {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
            .then(response => {
                console.log(response.data); // Дані з сервера
            })
            .catch(error => {
                console.error('Помилка при відправці даних:', error);
            });
    }

    return (
        <div className='flex flex-col items-center justify-center w-[40%] gap-lg_gap'>
            <div className='flex flex-col items-center justify-center gap-lg_gap'>
                <Logo />
                <div className='text-base_text'>Реєстрація</div>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-md_gap'>
                <div className='relative h-[40px] w-full'>
                    <input
                        className='h-full w-full text-dark text-middle_text bg-transparent border border-1 border-solid border-passive rounded-global_radius outline-none p-lg_p'
                        type='text'
                        value={signUpData.username}
                        onChange={e => setSignUpData({ ...signUpData, username: e.target.value })}
                        required />
                    {/* <span className='absolute left-0 p-[10px] pointer-events-none text-middle_text text-passive'>Username</span> */}
                </div>
                <div className='relative h-[40px] w-full'>
                    <input
                        className='h-full w-full text-dark text-middle_text bg-transparent border border-1 border-solid border-passive rounded-global_radius outline-none p-lg_p'
                        type='password'
                        value={signUpData.password}
                        onChange={e => setSignUpData({ ...signUpData, password: e.target.value })}
                        required />
                    {/* <span className='absolute left-0 p-[10px] pointer-events-none text-middle_text text-passive'>Password</span> */}
                </div>
                <Button className='w-full text-light hover:bg-primary2 bg-primary' onClick={() => sendtDataToServer()}>Створити акаунт</Button>
                <Button className='w-full text-light hover:bg-primary2 bg-primary' onClick={() => testsendtDataToServer()}>Створити акаунт</Button>
            </div>
            {/* <div className='flex flex-col items-center justify-center text-middle_text text-passive gap-sm_gap'>
            <Link href='#'>Увійти з Google</Link>
            <Link href='#'>Увійти з GitHub</Link>
            <Link href='#'>Увійти з Facebook</Link>
        </div> */}
        </div>
    )
}