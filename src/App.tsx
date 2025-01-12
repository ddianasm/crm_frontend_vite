import { useEffect, useState } from 'react';
import { Router } from '@/router/router'
import { serverRequests } from '@/API/server.requests';
import '@/global.css'
import { AuthState } from '@/store/AuthState';

export const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        serverRequests.checkAuth()
            .then(response => {
                if (response.status === 200) {
                    AuthState.setUser(response.data.userId)
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
            < Router />
        )
    }
}