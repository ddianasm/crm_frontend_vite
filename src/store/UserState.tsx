import { serverRequests } from "@/API/server.requests";
import { makeAutoObservable } from "mobx"

class UserStore {
    userId: string | null = null;
    isAuthenticated: boolean = false;

    constructor() {
        makeAutoObservable(this, {
            setUser: true, // Позначаємо як дію
            logout: true,  // Позначаємо як дію
        }, { autoBind: true });
    }

    // getUser(signUpData: TAuthData) {
    //     serverRequests.sendSignUpData(signUpData)
    //         .then(response => {
    //             this.setUser(response.data.user); // Передаємо отриманого користувача
    //         })
    //         .catch(error => {
    //             console.error('Error checking authorization:', error);
    //         });
    // }

    setUser(userId: string | null) {
        this.userId = userId;
        this.isAuthenticated = !!userId;
        console.log(this.userId);
        console.log(this.isAuthenticated);
    }

    logout() {
        serverRequests.logout()
            .then(() => {
                this.setUser(null); // Використовуємо метод для скидання
                // console.log(this.isAuthenticated);
            })
            .catch(error => {
                console.error('Error during logout:', error);
            });
    }
}

export const UserState = new UserStore();

