import { LeftPanel } from "@/components/leftPanel/LeftPanel"
import { TableView } from "@/components/tableView/TableView"
import { observer } from "mobx-react-lite"
import cn from "classnames"
import { ErrorMesssage } from "@/components/productErrorMessage/ProductErrorMessage"
import React, { createContext, useState } from "react"

export const ErrorMessageContext = createContext<{
    errorMessage: string | null;
    setErrorMessage: (message: string | null) => void;
} | null>(null);

export enum EProductStatus {
    NEW = 'new',
    IN_PROCESS = 'in process',
    COMPLETED = 'completed'
}

type TProductData = {
    name: string;
    amount: string;
    price: string;
    customer: string;
    email: string;
    phone: string;
    status: EProductStatus;
};

export const MainPage = observer(() => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    return (
        <ErrorMessageContext.Provider value={{ errorMessage, setErrorMessage }}>
            <div className="flex flex-row w-screen h-screen relative">
                <LeftPanel />
                <PageContainer>
                    {errorMessage &&
                        <ErrorMesssage></ErrorMesssage>
                    }
                    <TableView />
                </PageContainer >
            </div>
        </ErrorMessageContext.Provider>
    )
})

type divPropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const PageContainer: React.FC<divPropsType> = ({ children, className, ...props }) => {

    return (
        <div
            {...props}
            className={cn("flex flex-col gap-[40px] justify-center items-center w-[95%] mx-[40px] relative", className)}
        >
            {children}
        </div>
    )
}
