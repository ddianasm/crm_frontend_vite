import { serverRequests } from "@/API/server.requests";
import { UserState } from "@/store/UserState";

export type authData = { username: string; password: string; }

export const signIn = (data: authData) => {
    serverRequests.sendSignInData(data)
        .then(response => {
            if (response.status === 200) {
                UserState.setUser(response.data.username)
            }
        })
        .catch(error => {
            console.error('Error signing in:', error);
        })
}

export const signUp = (data: authData) => {
    serverRequests.sendSignUpData(data)
        .then(response => {
            if (response.status === 200) {
                UserState.setUser(response.data.username)
            }
        })
        .catch(error => {
            console.error('Error signing up:', error);
        })
}