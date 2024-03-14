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

export const LeftPanelMainPage = () => {
    // тестовий функціонал / видалити
    const IsAuthContextCheck = useContext(IsAuthContext)
    console.log(IsAuthContextCheck.isAuth);

    return (
        <div className='col-span-1 row-span-2 flex flex-col justify-between p-lg_p bg-light shadow-lg'>
            <div className='flex flex-col justify-center gap-xs_gap'>
                {/* <Logo /> */}
                <div className='flex flex-col gap-xs_gap'>
                    <div className={classNames('flex items-center text-md_text p-lg_p gap-sm_gap rounded-sm_radius cursor-pointer', { 'bg-primary': true })}>
                        <AiFillHome className={classNames('h-[20px] w-[20px]', { 'text-light': true })} />
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-col justify-center gap-xs_gap'>
                <div className='flex flex-col gap-xs_gap'>
                    <div className='flex items-center text-md_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer' onClick={() => console.log('hi')}>
                        <IoIosInformationCircle className='h-[20px] w-[20px]' />
                    </div>
                    <div className='flex items-center text-md_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer'>
                        <RiMessage2Fill className='h-[20px] w-[20px]' />
                    </div>
                </div>
            </div> */}
        </div >
    )
}