import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Logo } from '@/components/logo/Logo';
import { IsAuthContext } from '@/App';
import { AiFillHome } from 'react-icons/ai';
import { RxEnter } from 'react-icons/rx';
import { HiUserAdd } from 'react-icons/hi';
import { IoIosInformationCircle } from 'react-icons/io';
import { RiMessage2Fill } from 'react-icons/ri';
import { routes } from '@/router/routes';

export const LeftPanel = () => {
    // тестовий функціонал / видалити
    const IsAuthContextCheck = useContext(IsAuthContext)
    console.log(IsAuthContextCheck.isAuth);

    return (
        <div className='col-span-1 row-span-2 flex flex-col justify-between p-lg_p bg-light shadow-lg'>
            <div className='flex flex-col justify-center gap-xs_gap'>
                <Logo />
                <div className='flex flex-col gap-xs_gap'>
                    {IsAuthContextCheck.isAuth ? (
                        <div className={classNames('flex items-center text-md_text p-sm_p gap-sm_gap rounded-sm_radius cursor-pointer', { 'bg-primary': true })} >
                            <AiFillHome className={classNames('h-[20px] w-[20px]', { 'text-light': true })} />
                            <div className={classNames('text-md_text text-dark', { 'text-light': true })}>Головна</div>
                        </div>
                    ) : (
                        <>
                            <Link to={routes.authSignIn.route} className={classNames('flex items-center text-md_text p-sm_p gap-sm_gap rounded-sm_radius cursor-pointer', { 'bg-primary': routes.authSignIn.route === window.location.pathname })}>
                                <RxEnter className={classNames('h-[20px] w-[20px]', { 'text-light': routes.authSignIn.route === window.location.pathname })} />
                                <div className={classNames('text-md_text text-dark', { 'text-light': routes.authSignIn.route === window.location.pathname })}>Авторизація</div>
                            </Link>
                            <Link to={routes.authSignUp.route} className={classNames('flex items-center text-md_text p-sm_p gap-sm_gap rounded-sm_radius cursor-pointer', { 'bg-primary': routes.authSignUp.route === window.location.pathname })}>
                                <HiUserAdd className={classNames('h-[20px] w-[20px]', { 'text-light': routes.authSignUp.route === window.location.pathname })} />
                                <div className={classNames('text-md_text text-dark', { 'text-light': routes.authSignUp.route === window.location.pathname })}>Реєстрація</div>
                            </Link>
                        </>
                    )
                    }
                </div>
            </div>
            <div className='flex flex-col justify-center gap-xs_gap'>
                <div className='flex flex-col gap-xs_gap'>
                    <div className='flex items-center text-md_text p-sm_p gap-sm_gap rounded-sm_radius cursor-pointer' onClick={() => console.log('hi')}>
                        <IoIosInformationCircle className='h-[20px] w-[20px]' />
                        <div>Інтеграції</div>
                    </div>
                    <div className='flex items-center text-md_text p-sm_p gap-sm_gap rounded-sm_radius cursor-pointer'>
                        <RiMessage2Fill className='h-[20px] w-[20px]' />
                        <div>Підтримка</div>
                    </div>
                </div>
                <div className='flex items-center text-sm_text gap-sm_gap'>Founder:<span className='text-primary cursor-pointer'>NS13</span>
                </div>
            </div>
        </div >
    )
}