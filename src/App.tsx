import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import TourDetailsPage from "./components/pages/TourDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Páginas individuais dos passeios */}
        <Route path="/passeio/:id" element={<TourDetailsPage />} />
        
        {/* Rota de fallback - redireciona para home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
