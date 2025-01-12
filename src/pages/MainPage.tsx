import { LeftPanel } from '@/components/leftPanel/LeftPanel'
import { TableView } from '@/components/tableView/TableView'
import { observer } from 'mobx-react-lite'
import cn from 'classnames'
import { ProductErrorMesssage } from '@/components/productErrorMessage/ProductErrorMessage'
import React, { useState } from 'react'

type TPageContainer = {
    className?: string;
    children: React.ReactNode;
};

export enum EProductStatus {
    NEW = 'new',
    IN_PROCESS = 'in process',
    COMPLETED = 'completed'
}

export const MainPage = observer(() => {
    const [productErrorMessage, setProductErrorMessage] = useState<string | null>(null);

    return (
        <div className='flex flex-row w-screen h-screen relative'>
            <LeftPanel />
            <PageContainer>
                {productErrorMessage &&
                    <ProductErrorMesssage productErrorMessage={productErrorMessage} setProductErrorMessage={setProductErrorMessage}></ProductErrorMesssage>
                }
                <TableView setProductErrorMessage={setProductErrorMessage} />
            </PageContainer >
        </div>
    )
})

const PageContainer: React.FC<TPageContainer> = ({ children, className, ...props }) => {

    return (
        <div
            {...props}
            className={cn('flex flex-col gap-[40px] justify-center items-center w-[95%] mx-[40px] relative', className)}
        >
            {children}
        </div>
    )
}
