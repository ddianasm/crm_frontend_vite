import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignUpPage } from "@/pages/SignUpPage";
import { SignInPage } from "@/pages/SignInPage";
import { FuncPage } from "@/pages/FuncPage";
import { useContext } from "react";
import { isAuthContext } from '@/App'



export const Router = () => {
    const isAuth = useContext(isAuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isAuth ? <FuncPage /> : <Navigate to="/auth/sign_up" />} />
                <Route path="/auth/sign_up" element={<SignUpPage />} />
                <Route path="/auth/sign_in" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>
    )
}