import { Router } from "@/router/router"
import React, { createContext, useContext } from 'react';

export const isAuthContext = createContext(false)

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

    return (
        <isAuthContext.Provider value={isCookie()}>
            <Router />
        </isAuthContext.Provider>

    )
}