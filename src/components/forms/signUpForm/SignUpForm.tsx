'use client'
import { Logo } from '@/components/logo/Logo';
import { AuthButton } from '@/components/buttons/auth_button/AuthButton';
import { serverRequests } from "@/API/server.requests";
import { UserState } from '@/store/UserState';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { validateAuthForm } from "@/utils/authValidation";
import { FormErrorMessage } from '@/components/errorMessage/ErrorMessage';

export type signUpData = { username: string; password: string; }

export const SignUpForm = () => {
    const navigate = useNavigate();

    const handleAuthRequest = (data: signUpData) => {
        serverRequests.sendSignUpData(data)
            .then(response => {
                console.log(data, 'data');
                if (response.status === 200) {
                    console.log(response.data.username, 'response.data.username');
                    UserState.setUser(response.data.username)
                    console.log(UserState.user, 'UserState.user')
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
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validate={validateAuthForm}
                    onSubmit={(values) => handleAuthRequest(values)}
                >
                    {formik => (
                        <form
                            onSubmit={formik.handleSubmit}
                            className='flex flex-col items-center justify-center w-full gap-md_gap'>
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
                            <AuthButton type="submit" className='w-full h-[50px] text-light hover:bg-primary2 bg-primary'>Sign Up</AuthButton>
                            <AuthButton type="button" className='w-full h-[50px] text-light hover:bg-gray bg-light_gray' onClick={goToSignInPage}>Sign In</AuthButton>
                        </form>
                    )}
                </Formik>
            </div>
        </div >
    )
}