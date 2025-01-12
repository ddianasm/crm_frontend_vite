import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { routes } from '@/router/routes';
import { observer } from 'mobx-react-lite';
import { AuthState } from '@/store/AuthState';
import { SignUpPage } from '@/pages/SignUpPage';
import { SignInPage } from '@/pages/SignInPage';



export const Router = observer(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.main.route} element={AuthState.isAuthenticated ? <MainPage /> : <Navigate to={routes.signIn.route} />} />
                <Route path={routes.signUp.route} element={!AuthState.isAuthenticated ? <SignUpPage /> : <Navigate to={routes.main.route} />} />
                <Route path={routes.signIn.route} element={!AuthState.isAuthenticated ? <SignInPage /> : <Navigate to={routes.main.route} />} />
            </Routes>
        </BrowserRouter>
    )
})