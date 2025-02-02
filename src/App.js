import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import UserMenu from "./components/UserMenu"
import AddInvestment from "./components/AddInvestment"
import InvestmentDetails from "./paginas6/Pages/VisualInvestments/index"
import AppRoutes from "./paginas6/Rotas/routes"

function App() {
  return (
    <Router>
      <AppRoutes />
        <Routes>
          <Route path="/" element={<Navigate to = "/home" />} />
          <Route path="/addInvestment" element={<AddInvestment />} />
          <Route path="/investments/:id" element={<InvestmentDetails />} />
        </Routes>
    </Router>
  );
}

export default App;