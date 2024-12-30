import { createContext, useEffect, useState } from 'react';
import { Router } from "@/router/router"
import { serverRequests } from '@/API/server.requests';
import '@/global.css'
import { UserState } from "@/store/UserState";

export const ErrorMessageContext = createContext<{
    errorMessage: string | null;
    setErrorMessage: (message: string | null) => void;
} | null>(null);



export const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        serverRequests.checkAuth()
            .then(response => {
                if (response.status === 200) {
                    UserState.setUser(response.data.username)
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
            <ErrorMessageContext.Provider value={{ errorMessage, setErrorMessage }}>
                < Router />
            </ErrorMessageContext.Provider >
        )
    }
}