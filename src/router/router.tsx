import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignUpPage } from "@/pages/SignUpPage";
import { SignInPage } from "@/pages/SignInPage";
import { FuncPage } from "@/pages/FuncPage";
import { IsAuthContext } from '@/App'
import { routes } from "@/router/routes";



export const Router = () => {
    const IsAuthContextCheck = useContext(IsAuthContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={IsAuthContextCheck.isAuth ? <FuncPage /> : <Navigate to={routes.authSignIn.route} />} />
                <Route path="/sign_up" element={<SignUpPage />} />
                <Route path="/sign_in" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>
    )
}