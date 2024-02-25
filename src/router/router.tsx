import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "@/pages/main/MainPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}