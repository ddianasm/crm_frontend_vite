import React, { createContext, useReducer, useEffect } from 'react';
import { Router } from "@/router/router"
import { ServerRequests } from '@/API/server.requests';

type AuthContextType = {
    isAuth: boolean;
    dispatch: React.Dispatch<{ type: 'isAuth' | 'noAuth' }>;
}

export const IsAuthContext = createContext<AuthContextType>({ isAuth: false, dispatch: () => { } })


//reducer
const authReducer = (state: boolean, action: { type: 'isAuth' | 'noAuth' }) => {
    switch (action.type) {
        case 'isAuth':
            return true;
        case 'noAuth':
            return false;
        default:
            return state;
    }
}

export const App = () => {
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
    }, [])

    return (
        <IsAuthContext.Provider value={{ isAuth, dispatch }}>
            <Router />
        </IsAuthContext.Provider>
    )
}