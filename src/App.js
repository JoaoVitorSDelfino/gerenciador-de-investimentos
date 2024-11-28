import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import UserMenu from "./components/UserMenu"
import AddInvestment from "./components/AddInvestment"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<UserMenu />} />
          <Route path="/addInvestment" element={<AddInvestment />} />
        </Routes>
      </Router>
  );
}

export default App;
