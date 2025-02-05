import { serverRequests } from '@/API/server.requests';
import { AuthState } from '@/store/AuthState';
import { authFormErrorMessages } from '@/constants/authFormErrorMessages';

type authData = { username: string; password: string; }

export const signIn = (
    data: authData,
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
) => {
    serverRequests.sendSignInData(data)
        .then(response => {
            if (response.status === 200) {
                AuthState.setUser(response.data.userId)
            }
            if (response.status === 401) {
                setErrorMessage(authFormErrorMessages.signIn.INVALID_CREDENTIALS)
            }
        })
        .catch(error => {
            console.error('Error during sign-in:', error);
        })
}

export const signUp = (
    data: authData,
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
) => {
    serverRequests.sendSignUpData(data)
        .then(response => {
            if (response.status === 200) {
                AuthState.setUser(response.data.userId)
            }
            if (response.status === 401) {
                setErrorMessage(authFormErrorMessages.signUp.USERNAME_UNAVAILABLE)
            }
        })
        .catch(error => {
            console.error('Error during sign-up:', error);
        })
}