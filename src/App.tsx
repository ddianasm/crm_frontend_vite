import React, { createContext, useReducer, useEffect, useState } from 'react';
import { Router } from "@/router/router"
import { serverRequests } from '@/API/server.requests';
import { authReducer } from '@/authReducer';
import './global.css'

type AuthContextType = {
    isAuth: boolean;
    dispatch: React.Dispatch<{ type: 'isAuth' | 'noAuth' }>;
}

export const IsAuthContext = createContext<AuthContextType>({ isAuth: false, dispatch: () => { } })


export const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAuth, dispatch] = useReducer(authReducer, false);

    useEffect(() => {
        serverRequests.checkAuthAsync()
            .then(response => {
                if (response.status === 200) {
                    dispatch({ type: 'isAuth' });
                    console.log('User is authorized');
                } else {
                    console.log('User is not authorized');
                }
            })
            .catch(error => {
                console.error('Error checking authorization:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [])

    if (!isLoading) {
        return (
            <IsAuthContext.Provider value={{ isAuth, dispatch }}>
                <Router />
            </IsAuthContext.Provider>
        )
    }

}