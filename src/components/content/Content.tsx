import React, { ReactNode } from "react";

type ContentProps = {
    children: ReactNode;
};

export const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <div className="flex items-center justify-center bg-light rounded-global_radius shadow-lg bg-[#009865] m-[10px] box-border">
            {children}
        </div>
    );
};