import { Link } from 'react-router-dom';
import { Logo } from '@/components/logo/Logo';
import { AiFillHome } from 'react-icons/ai';
import { RxEnter } from 'react-icons/rx';
import { HiUserAdd } from 'react-icons/hi';
import { IoIosInformationCircle } from 'react-icons/io';
import { RiMessage2Fill } from 'react-icons/ri';
import { OpenedPageContext } from '@/App';
import { useContext } from 'react';
import classNames from 'classnames';

export const LeftPanel = () => {

    const openedPage = useContext(OpenedPageContext)
    console.log(openedPage);


    return (
        <div className='col-span-1 row-span-2 flex flex-col justify-between p-lg_p bg-light shadow-lg'>
            <div className='flex flex-col justify-center gap-xs_gap'>
                <Logo />
                <div className='flex flex-col gap-xs_gap'>
                    <Link to="/" className={classNames('flex items-center text-base_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer', { 'bg-primary': openedPage === 'signUp' })}>
                        <AiFillHome className={classNames('h-[20px] w-[20px]', { 'text-light': openedPage === 'signUp' })} />
                        <div className={classNames('text-base_text text-dark', { 'text-light': openedPage === 'signUp' })}>Головна</div>
                    </Link>
                    <Link to="/auth/sign_in" className='flex items-center text-base_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer'>
                        <RxEnter className={classNames('h-[20px] w-[20px]', { 'text-light': openedPage === 'signUp' })} />
                        <div className={classNames('text-base_text text-dark', { 'text-light': openedPage === 'signUp' })}>Авторизація</div>
                    </Link>
                    <Link to="/auth/sign_up" className='flex items-center text-base_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer'>
                        <HiUserAdd className={classNames('h-[20px] w-[20px]', { 'text-light': openedPage === 'signUp' })} />
                        <div className={classNames('text-base_text text-dark', { 'text-light': openedPage === 'signUp' })}>Реєстрація</div>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col justify-center gap-xs_gap'>
                <div className='flex flex-col gap-xs_gap'>
                    <div className='flex items-center text-base_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer'>
                        <IoIosInformationCircle className='h-[20px] w-[20px]' />
                        <div>Інтеграції</div>
                    </div>
                    <div className='flex items-center text-base_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer'>
                        <RiMessage2Fill className='h-[20px] w-[20px]' />
                        <div>Підтримка</div>
                    </div>
                </div>
                <div className='flex items-center text-middle_text gap-sm_gap'>Founder:<span className='text-primary cursor-pointer'>NS13</span>
                </div>
            </div>
        </div >
    )
}