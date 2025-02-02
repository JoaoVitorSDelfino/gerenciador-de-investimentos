import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import UserMenu from "./components/UserMenu"
import AddInvestment from "./components/AddInvestment"
import InvestmentDetails from "./components/InvestmentDetails"
import AppRoutes from "./paginas6/Rotas/routes"

function App() {
  return (
    <Router>
      <AppRoutes />
        <Routes>
          <Route path="/" element={<UserMenu />} />
          <Route path="/addInvestment" element={<AddInvestment />} />
          <Route path="/investments/:id" element={<InvestmentDetails />} />
        </Routes>
    </Router>
  );
}

export default App;