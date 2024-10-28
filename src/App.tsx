import { useEffect, useState } from 'react';
import { Router } from "@/router/router"
import { serverRequests } from '@/API/server.requests';
import '@/global.css'
import { UserState } from "@/store/UserState";


export const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
            <Router />
        )
    }
}