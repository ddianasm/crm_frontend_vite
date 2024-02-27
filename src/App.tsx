import { Router } from "@/router/router"
import React, { createContext, useContext, useState } from 'react';

export const IsAuthContext = createContext(false)

type pageStateType = {
    openedPage: 'signUp' | 'signIn' | 'func'
    setOpenedPage: React.Dispatch<React.SetStateAction<pageStateType["openedPage"]>>
}
export const OpenedPageContext = createContext<pageStateType>({
    openedPage: 'signIn',
    setOpenedPage: () => { }
})

const isCookie = () => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name] = cookie.trim().split('=');
        if (name === 'username') {
            return true;
        }
    }
    return false;
}


export const App = () => {
    const [openedPage, setOpenedPage] = useState<pageStateType["openedPage"]>('signIn')

    return (
        <IsAuthContext.Provider value={isCookie()}>
            <OpenedPageContext.Provider value={{ openedPage, setOpenedPage }}>
                <Router />
            </OpenedPageContext.Provider>
        </IsAuthContext.Provider>

    )
}