'use client'
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Logo } from '@/components/logo/Logo';
import { Button } from '@/components/buttons/auth_button/Button';
import { serverRequests } from '@/API/server.requests';
import { IsAuthContext } from "@/App";

type signInFormPropsType = {
    setCurrentForm: React.Dispatch<React.SetStateAction<'signUp' | 'signIn'>>;
}

export const SignInForm: React.FC<signInFormPropsType> = ({ setCurrentForm }) => {
    const [signInData, setSignInData] = useState<{ username: string; password: string; }>({ username: '', password: '' })

    const IsAuthContextCheck = useContext(IsAuthContext)
    const navigate = useNavigate();

    const handleAuthRequest = () => {
        serverRequests.sendSignInDataAsync(signInData)
            .then(response => {
                if (response.status === 200) {
                    IsAuthContextCheck.dispatch({ type: 'isAuth' });
                    navigate('/');
                } else {
                    console.log('User is not authorized');
                }
            })
            .catch(error => {
                console.error('Error checking authorization:', error);
            })
    }

    return (
        <div className='flex flex-col items-center justify-center w-[30%] gap-lg_gap'>
            <Logo />
            <div className='flex flex-col items-center justify-center w-full gap-lg_gap rounded-sm_radius p-xl_p shadow-2xl'>
                <div className='text-[18px]'>Authorisation</div>
                <div className='flex flex-col items-center justify-center w-full gap-md_gap'>
                    <div className='relative h-[50px] w-full'>
                        <input
                            className='h-full w-full text-dark text-md_text bg-transparent border border-1 border-solid border-gray rounded-sm_radius outline-none p-md_p'
                            type='text'
                            placeholder='Username'
                            value={signInData.username}
                            onChange={e => setSignInData({ ...signInData, username: e.target.value })}
                            required />
                    </div>
                    <div className='relative h-[50px] w-full'>
                        <input
                            className='h-full w-full text-dark text-md_text bg-transparent border border-1 border-solid border-gray rounded-sm_radius outline-none p-md_p'
                            type='password'
                            placeholder='Password'
                            value={signInData.password}
                            onChange={e => setSignInData({ ...signInData, password: e.target.value })}
                            required />
                    </div>
                    <Button className='w-full h-[50px] text-light hover:bg-primary2 bg-primary' onClick={handleAuthRequest}>Sign In</Button>
                    <Button className='w-full h-[50px] text-light hover:bg-gray bg-light_gray' onClick={() => setCurrentForm('signUp')}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

//() => getDataFromServer()