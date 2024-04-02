import classNames from 'classnames';
import { AiFillHome } from 'react-icons/ai';

export const LeftPanel = () => {

    return (
        <div className='flex flex-col justify-between p-md_p bg-light shadow-lg w-[65px]'>
            <div className={classNames('flex justify-center items-center p-lg_p gap-sm_gap rounded-sm_radius cursor-pointer', { 'bg-[#e0e0e0]': true })}>
                <AiFillHome className={classNames('h-[20px] w-[20px]', { 'text-primary': true })} />
            </div>
        </div >
    )
}