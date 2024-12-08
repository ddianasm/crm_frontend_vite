import { serverRequests } from "@/API/server.requests";
import { makeAutoObservable } from "mobx"
import { signUpData } from "@/components/forms/SignUpForm"

class UserStore {
    user: string | null = null;
    isAuthenticated: boolean = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    getUser(signUpData: signUpData) {
        serverRequests.sendSignUpData(signUpData)
            .then(response => {
                UserState.setUser(response.data.user)
            })
            .catch(error => {
                console.error('Error checking authorization:', error);
            })
    }

    setUser(user: string) {
        this.user = user;
        this.isAuthenticated = true;
    }

    logout() {
        serverRequests.logout()
            .then(() => {
                this.user = null;
                this.isAuthenticated = false;
            })
    }
}

export const UserState = new UserStore();