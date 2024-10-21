import classNames from 'classnames';
import { AiFillHome } from 'react-icons/ai';
import { MdLogout } from "react-icons/md";
import { NavigationButton } from '../buttons/navigation_button/NavigationButton';
import { serverRequests } from "@/API/server.requests";
import { TableState } from '@/store/TableState';
import { useNavigate } from "react-router-dom";
import { routes } from '@/router/routes';
import { UserState } from '@/store/UserState';

export const LeftPanel = () => {
    function logout() {
        serverRequests.logout()
            .then(response => {
                if (response.status === 200) {
                    UserState.logout()
                    // serverRequests.checkAuthAsync()
                    // console.log(TableState.rows)
                    // navigate(routes.auth.route, { replace: true });
                } else {
                    console.log('error logout');
                }
            })
            .catch(error => {
                console.error('Error logouttt:', error);
            })
    }

    return (
        <div className='flex flex-col justify-between p-md_p bg-light shadow-lg w-[65px]'>
            <NavigationButton onClick={() => console.log('home')}><AiFillHome className='h-[20px] w-[20px] text-primary' /></NavigationButton>
            <NavigationButton onClick={logout}><MdLogout className='h-[20px] w-[20px] text-primary' /></NavigationButton>
        </div >
    )
}