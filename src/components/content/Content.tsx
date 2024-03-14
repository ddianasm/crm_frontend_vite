import React, { ReactNode } from 'react';
type Props = {
    children: ReactNode;
};

export const Content: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex items-center justify-center bg-light rounded-sm_radius shadow-lg bg-[#009865] m-[10px] box-border">
            {children}
        </div >
    )
}