import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignUpPage } from "@/pages/SignUpPage";
import { SignInPage } from "@/pages/SignInPage";
import { MainPage } from "@/pages/MainPage";
import { IsAuthContext } from '@/App'
import { routes } from "@/router/routes";
import { AuthPage } from "@/pages/AuthPage";



export const Router = () => {
    const IsAuthContextCheck = useContext(IsAuthContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.main.route} element={IsAuthContextCheck.isAuth ? <MainPage /> : <Navigate to={routes.auth.route} />} />
                <Route path={routes.auth.route} element={<AuthPage />} />
                {/* <Route path={routes.authSignUp.route} element={<SignUpPage />} />
                <Route path={routes.authSignIn.route} element={<SignInPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}