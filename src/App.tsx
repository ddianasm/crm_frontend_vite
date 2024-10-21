import React, { createContext, useReducer, useEffect, useState } from 'react';
import { Router } from "@/router/router"
import { serverRequests } from '@/API/server.requests';
import { authReducer } from '@/authReducer';
import './global.css'
import { UserState } from "@/store/UserState";


export const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        serverRequests.checkAuthAsync()
            .then(response => {
                if (response.status === 200) {
                    UserState.setUser(response.data.user)
                    console.log(response.data.user);
                } else {
                    console.log('User is not authorised');
                    console.log(response.data.user);
                }
            })
            .catch(error => {
                console.error('Error checking authorisation:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [])

    if (!isLoading) {
        return (
            <Router />
        )
    }

}