'use client'
import { Logo } from '@/components/logo/Logo';
import { AuthButton } from '@/components/buttons/auth_button/AuthButton';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { z } from 'zod';

const schema = z.object({
    username: z.string().min(2, 'Username must be at least 2 characters').max(20, 'Username must be at most 20 characters'),
    password: z.string().min(8, 'Password must be at least 8 characters').max(20, 'Password must be at most 20 characters'),
});

const validate = (values: Record<string, any>) => {
    try {
        schema.parse(values); // Перевіряємо дані форми
        return {}; // Якщо все коректно, повертаємо пустий об'єкт помилок
    } catch (error: any) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
            errors[err.path[0]] = err.message; // Перетворюємо помилки Zod у формат Formik
        });
        return errors;
    }
};


export const SignInForm = () => {
    const navigate = useNavigate();

    const goToSignUpPage = () => {
        navigate('/sign-up');
    };

    // const handleAuthRequest = () => {
    //     serverRequests.sendSignInData(signInData)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 console.log(response.data.user);
    //                 UserState.setUser(response.data.user)
    //             } else {
    //                 console.log('User is not authorized');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error checking authorization:', error);
    //         })
    // }

    return (
        <div className='flex flex-col items-center justify-center w-[30%] gap-lg_gap'>
            <Logo />
            <div className='flex flex-col items-center justify-center w-full gap-lg_gap rounded-sm_radius p-xl_p shadow-2xl'>
                <div className='text-[18px]'>Authorisation</div>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validate={validate}
                    onSubmit={(values) => console.log(values)}
                >
                    {formik => (
                        <form
                            onSubmit={formik.handleSubmit}
                            className='flex flex-col items-center justify-center w-full gap-md_gap'>
                            <div className='relative w-full flex flex-col gap-xs_gap'>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder='username'
                                    className='h-[50px] w-full text-dark text-md_text bg-transparent border border-1 border-solid border-gray rounded-sm_radius outline-none p-md_p'
                                    {...formik.getFieldProps('username')}
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <div className='text-sm_text text-error'>{formik.errors.username}</div>
                                ) : null}
                            </div>
                            <div className='relative w-full'>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder='password'
                                    className='h-[50px] w-full text-dark text-md_text bg-transparent border border-1 border-solid border-gray rounded-sm_radius outline-none p-md_p'
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className='text-sm_text text-error'>{formik.errors.password}</div>
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