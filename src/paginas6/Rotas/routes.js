import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sobre from "../Pages/Sobre";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Investment from "../Pages/Investments";
import VisualInvestment from "../Pages/VisualInvestments";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Redireciona a raiz ("/") para "/sobre" */}
            <Route path="/" element={<Navigate to="/sobre" />} />
            {/* Rota para a página Sobre */}
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/visualinvestment" element={<VisualInvestment />} />
        </Routes>
    );
};

export default AppRoutes;