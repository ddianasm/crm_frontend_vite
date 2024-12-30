import { serverRequests } from "@/API/server.requests";
import { UserState } from "@/store/UserState";
import { errorMessages } from "@/constants/errorMessages";

export type authData = { username: string; password: string; }

export const signIn = (data: authData, setErrorMessage: (message: string) => void) => {
    serverRequests.sendSignInData(data)
        .then(response => {
            if (response.status === 200) {
                UserState.setUser(response.data.username)
            } else {
                setErrorMessage(errorMessages.signin.USER_NOT_FOUND);
            }
        })
        .catch(error => {
            console.error(errorMessages.signin.USER_NOT_FOUND, error);
            setErrorMessage(errorMessages.signin.USER_NOT_FOUND);
        })
}

export const signUp = (data: authData, setErrorMessage: (message: string) => void) => {
    serverRequests.sendSignUpData(data)
        .then(response => {
            if (response.status === 200) {
                UserState.setUser(response.data.username)
            } else {
                setErrorMessage(errorMessages.signin.USER_NOT_FOUND);
            }
        })
        .catch(error => {
            console.error(errorMessages.signin.USER_NOT_FOUND, error);
            setErrorMessage(errorMessages.signin.USER_NOT_FOUND);
        })
}