import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignUpPage } from "@/pages/SignUpPage";
import { SignInPage } from "@/pages/SignInPage";
import { FuncPage } from "@/pages/FuncPage";
import { IsAuthContext } from '@/App'
import { routes } from "@/routes";



export const Router = () => {
    const isAuth = useContext(IsAuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isAuth ? <FuncPage /> : <Navigate to={routes.authSignIn.route} />} />
                <Route path="/auth/sign_up" element={<SignUpPage />} />
                <Route path="/auth/sign_in" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>
    )
}