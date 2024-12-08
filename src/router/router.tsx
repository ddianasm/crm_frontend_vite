import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { routes } from "@/router/routes";
import { observer } from "mobx-react-lite";
import { UserState } from "@/store/UserState";
import { SignUpPage } from "@/pages/SignupPage";
import { SignInPage } from "@/pages/SignInPage";



export const Router = observer(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.main.route} element={UserState.isAuthenticated ? <MainPage /> : <Navigate to={routes.signIn.route} />} />
                <Route path={routes.signUp.route} element={!UserState.isAuthenticated ? <SignUpPage /> : <Navigate to={routes.main.route} />} />
                <Route path={routes.signIn.route} element={!UserState.isAuthenticated ? <SignInPage /> : <Navigate to={routes.main.route} />} />
            </Routes>
        </BrowserRouter>
    )
})