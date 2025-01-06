'use client'
import { Logo } from '@/components/logo/Logo';
import { AuthButton } from '@/components/buttons/auth_button/AuthButton';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { FormErrorMessage } from '@/components/formErrorMessage/FormErrorMessage';
import { authSchema } from '@/schemas/auth';
import { validateForm } from '@/utils/formValidation';
import { signIn } from '@/service/authService';
import { useState } from 'react';
import { TAuthData } from '@/types';

export const SignInForm = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSignIn = (values: TAuthData) => {
        setErrorMessage(null)
        signIn(values, setErrorMessage)
    }

    const goToSignUpPage = () => {
        navigate('/sign-up');
    };

    return (
        <div className='flex flex-col items-center justify-center w-[30%] gap-lg_gap'>
            <Logo />
            <div className='flex flex-col items-center justify-center w-full gap-lg_gap rounded-sm_radius p-xl_p shadow-2xl'>
                <div className='text-[18px]'>Authorisation</div>
                {errorMessage ? (
                    <FormErrorMessage>{errorMessage}</FormErrorMessage>
                ) : null}
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validate={(values) => validateForm(authSchema, values)}
                    onSubmit={(values) => handleSignIn(values)}
                >
                    {formik => (
                        <form
                            onSubmit={formik.handleSubmit}
                            className='flex flex-col items-center justify-center w-full gap-md_gap'
                        >
                            <div className='relative w-full flex flex-col gap-xs_gap'>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder='Username'
                                    className='h-[50px] w-full text-dark text-md_text bg-transparent border border-1 border-solid border-gray rounded-sm_radius outline-none p-md_p'
                                    {...formik.getFieldProps('username')}
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                                ) : null}
                            </div>
                            <div className='relative w-full'>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder='Password'
                                    className='h-[50px] w-full text-dark text-md_text bg-transparent border border-1 border-solid border-gray rounded-sm_radius outline-none p-md_p'
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                                ) : null}
                            </div>
                            <AuthButton type="submit" className='w-full h-[50px] text-light hover:bg-primary2 bg-primary'>Sign In</AuthButton>
                            <AuthButton type="button" className='w-full h-[50px] text-light hover:bg-gray bg-light_gray' onClick={goToSignUpPage}>Sign Up</AuthButton>
                        </form>
                    )}
                </Formik>
            </div>
        </div >
    )
}