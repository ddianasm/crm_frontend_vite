import { Router } from "@/router/router"
import React, { createContext, useContext, useState } from 'react';

export const IsAuthContext = createContext(false)
type authStateType = {
    openedPage: 'signUp' | 'signIn' | 'func'
    setOpenedPage: React.Dispatch<React.SetStateAction<authStateType["openedPage"]>>
}
export const OpenedPageContext = createContext<authStateType>({
    openedPage: 'signUp',
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
    const [openedPage, setOpenedPage] = useState<authStateType["openedPage"]>('signUp')

    return (
        <IsAuthContext.Provider value={isCookie()}>
            <OpenedPageContext.Provider value={{ openedPage, setOpenedPage }}>
                <Router />
            </OpenedPageContext.Provider>
        </IsAuthContext.Provider>

    )
}