'use client'
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { Logo } from '@/components/logo/Logo';
import { Button } from '@/components/buttons/auth_button/Button';
import { serverRequests } from "@/API/server.requests";
import { IsAuthContext } from "@/App";

export const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState<{ username: string; password: string; }>({ username: '', password: '' })
    const IsAuthContextCheck = useContext(IsAuthContext)

    const navigate = useNavigate();

    const handleAuthRequest = () => {
        serverRequests.sendSignUpDataAsync(signUpData)
            .then(response => {
                if (response.status === 200) {
                    IsAuthContextCheck.dispatch({ type: 'isAuth' });
                    navigate('/');
                }
            })
            .catch(error => {
                console.error('Error checking authorization:', error);
            })
    }

    return (
        <div className='flex flex-col items-center justify-center w-[40%] gap-lg_gap'>
            <div className='flex flex-col items-center justify-center gap-lg_gap'>
                <Logo />
                <div className='text-md_text'>Реєстрація</div>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-md_gap'>
                <div className='relative h-[40px] w-full'>
                    <input
                        className='h-full w-full text-dark text-middle_text bg-transparent border border-1 border-solid border-passive rounded-sm_radius outline-none p-lg_p'
                        type='text'
                        value={signUpData.username}
                        onChange={e => setSignUpData({ ...signUpData, username: e.target.value })}
                        required />
                    {/* <span className='absolute left-0 p-[10px] pointer-events-none text-middle_text text-passive'>Username</span> */}
                </div>
                <div className='relative h-[40px] w-full'>
                    <input
                        className='h-full w-full text-dark text-middle_text bg-transparent border border-1 border-solid border-passive rounded-sm_radius outline-none p-lg_p'
                        type='password'
                        value={signUpData.password}
                        onChange={e => setSignUpData({ ...signUpData, password: e.target.value })}
                        required />
                    {/* <span className='absolute left-0 p-[10px] pointer-events-none text-middle_text text-passive'>Password</span> */}
                </div>
                <Button className='w-full text-light hover:bg-primary2 bg-primary' onClick={handleAuthRequest}>Створити акаунт</Button>
            </div>
            {/* <div className='flex flex-col items-center justify-center text-middle_text text-passive gap-sm_gap'>
            <Link href='#'>Увійти з Google</Link>
            <Link href='#'>Увійти з GitHub</Link>
            <Link href='#'>Увійти з Facebook</Link>
        </div> */}
        </div>
    )
}