import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { IsAuthContext } from '@/App'
import { routes } from "@/router/routes";
import { AuthPage } from "@/pages/AuthPage";
import { observer } from "mobx-react-lite";
import { UserState } from "@/store/UserState";



export const Router = observer(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.main.route} element={UserState.isAuthenticated ? <MainPage /> : <Navigate to={routes.auth.route} />} />
                <Route path={routes.auth.route} element={!UserState.isAuthenticated ? <AuthPage /> : <Navigate to={routes.main.route} />} />
            </Routes>
        </BrowserRouter>
    )
})