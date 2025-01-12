import { serverRequests } from '@/API/server.requests';
import { makeAutoObservable } from 'mobx'

class AuthStore {
    userId: string | null = null;
    isAuthenticated: boolean = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setUser(userId: string | null) {
        this.userId = userId;
        this.isAuthenticated = !!userId;
    }

    logout() {
        serverRequests.logout()
            .then(() => {
                this.setUser(null);
            })
            .catch(error => {
                console.error('Error during logout:', error);
            });
    }
}

export const AuthState = new AuthStore();

