import { makeAutoObservable } from "mobx"

class UserStore {
    user: string | null = null;
    isAuthenticated: boolean = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setUser(user: string) {
        this.user = user;
        this.isAuthenticated = true;
    }

    logout() {
        this.user = null;
        this.isAuthenticated = false;
    }
}

export const UserState = new UserStore();