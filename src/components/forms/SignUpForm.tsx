'use client'
import { useState } from "react"
import { Logo } from '@/components/logo/Logo';
import { AuthButton } from '@/components/buttons/auth_button/AuthButton';
import { serverRequests } from "@/API/server.requests";
import { UserState } from '@/store/UserState';
import { useNavigate } from 'react-router-dom';

export type signUpData = { username: string; password: string; }

export const SignUpForm = () => {
    const navigate = useNavigate();

    const [signUpData, setSignUpData] = useState<signUpData>({ username: '', password: '' })

    const handleAuthRequest = () => {
        serverRequests.sendSignUpData(signUpData)
            .then(response => {
                if (response.status === 200) {
                    UserState.setUser(response.data.user)
                    console.log(UserState.user)
                }
            })
            .catch(error => {
                console.error('Error checking authorization:', error);
            })
    }

    const goToSignInPage = () => {
        navigate('/sign-in');
    };

    return (
        <div className='flex flex-col items-center justify-center w-[30%] gap-lg_gap'>
            <Logo />
            <div className='flex flex-col items-center justify-center w-full gap-lg_gap rounded-sm_radius p-xl_p shadow-2xl'>
                <div className='text-[18px]'>Registration</div>
                <div className='flex flex-col items-center justify-center w-full gap-md_gap'>
                    <div className='relative h-[50px] w-full'>
                        <input
                            className='h-full w-full text-dark text-md_text bg-transparent border border-1 border-solid border-gray rounded-sm_radius outline-none p-md_p'
                            type='text'
                            placeholder='Username'
                            value={signUpData.username}
                            onChange={e => setSignUpData({ ...signUpData, username: e.target.value })}
                            required />
                    </div>
                    <div className='relative h-[50px] w-full'>
                        <input
                            className='h-full w-full text-dark text-md_text bg-transparent border border-1 border-solid border-gray rounded-sm_radius outline-none p-md_p'
                            type='password'
                            placeholder='Password'
                            value={signUpData.password}
                            onChange={e => setSignUpData({ ...signUpData, password: e.target.value })}
                            required />
                    </div>
                    <AuthButton className='w-full h-[50px] text-light hover:bg-primary2 bg-primary' onClick={handleAuthRequest}>Sign Up</AuthButton>
                    <AuthButton className='w-full h-[50px] text-light hover:bg-gray bg-light_gray' onClick={goToSignInPage}>Sign In</AuthButton>
                </div>
            </div>
        </div>
    )
}