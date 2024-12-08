import { AiFillHome } from 'react-icons/ai';
import { MdLogout } from "react-icons/md";
import { NavigationButton } from '../buttons/navigation_button/NavigationButton';
import { UserState } from '@/store/UserState';

export const LeftPanel = () => {

    return (
        <div className='flex flex-col justify-between p-md_p bg-light shadow-lg w-[65px]'>

            <NavigationButton onClick={() => console.log('home')}>
                <AiFillHome className='h-[20px] w-[20px] text-primary' />
            </NavigationButton>

            <NavigationButton onClick={UserState.logout}>
                <MdLogout className='h-[20px] w-[20px] text-primary' />
            </NavigationButton>

        </div >
    )
}