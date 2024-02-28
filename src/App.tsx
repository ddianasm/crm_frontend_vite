import { Router } from "@/router/router"
import React, { createContext, useContext, useState } from 'react';

export const IsAuthContext = createContext(false)

type pageStateType = {
    openedPage: 'signUp' | 'signIn' | 'func'
    setOpenedPage: React.Dispatch<React.SetStateAction<pageStateType["openedPage"]>>
}

export const App = () => {

    return (
        <IsAuthContext.Provider value={false}>
            <Router />
        </IsAuthContext.Provider>

    )
}