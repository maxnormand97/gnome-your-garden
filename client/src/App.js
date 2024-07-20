import React from "react";
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PlantsPage from "./PlantsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<PlantsPage />} />
      </Routes>
    </Router>
  );
}

export default App;