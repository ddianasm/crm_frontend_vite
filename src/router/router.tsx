import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
                <Route path={routes.auth.route} element={!IsAuthContextCheck.isAuth ? <AuthPage /> : <Navigate to={routes.main.route} />} />
            </Routes>
        </BrowserRouter>
    )
}