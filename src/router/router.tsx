import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "@/pages/main/MainPage";
import { FuncPage } from "@/pages/FuncPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<MainPage />} />
                <Route path="/" element={<FuncPage />} />
            </Routes>
        </BrowserRouter>
    )
}