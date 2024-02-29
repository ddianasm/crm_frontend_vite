import React, { createContext, useReducer, useEffect, useState } from 'react';
import { Router } from "@/router/router"
import { ServerRequests } from '@/API/server.requests';
import { authReducer } from '@/authReducer';

type AuthContextType = {
    isAuth: boolean;
    dispatch: React.Dispatch<{ type: 'isAuth' | 'noAuth' }>;
}

export const IsAuthContext = createContext<AuthContextType>({ isAuth: false, dispatch: () => { } })


export const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAuth, dispatch] = useReducer(authReducer, false);

    useEffect(() => {
        ServerRequests.checkAuthAsync()
            .then(response => {
                if (response.status === 200) {
                    dispatch({ type: 'isAuth' });
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