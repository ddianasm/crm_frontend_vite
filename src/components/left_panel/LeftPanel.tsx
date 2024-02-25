import { Logo } from '@/components/logo/Logo';
import { AiFillHome } from 'react-icons/ai';
import { RxEnter } from 'react-icons/rx';
import { HiUserAdd } from 'react-icons/hi';
import { IoIosInformationCircle } from 'react-icons/io';
import { RiMessage2Fill } from 'react-icons/ri';

export const LeftPanel = () => {


    return (
        <div className='col-span-1 row-span-2 flex flex-col justify-between p-lg_p bg-light shadow-lg'>
            <div className='flex flex-col justify-center gap-xs_gap'>
                <Logo />
                <div className='flex flex-col gap-xs_gap'>
                    <div className='flex items-center text-base_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer'>
                        <AiFillHome className='h-[20px] w-[20px]' />
                        <div>Головна</div>
                    </div>
                    <div className='flex items-center text-base_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer'>
                        <RxEnter className='h-[20px] w-[20px]' />
                        <div>Авторизація</div>
                    </div>
                    <div className='flex items-center text-base_text p-sm_p gap-sm_gap rounded-global_radius cursor-pointer'>
                        <HiUserAdd className='h-[20px] w-[20px]' />
                        <div>Реєстрація</div>
                    </div>
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
        </div>
    )
}