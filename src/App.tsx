import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPage } from "@/pages/AuthPage";
import { FuncPage } from "@/pages/FuncPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/about" element={<FuncPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App