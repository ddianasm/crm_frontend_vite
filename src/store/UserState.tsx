import { serverRequests } from "@/API/server.requests";
import { makeAutoObservable } from "mobx"

class UserStore {
    user: string | null = null;
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

    setUser(user: string | null) {
        this.user = user;
        this.isAuthenticated = !!user; // Встановлюємо true/false залежно від значення user
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

