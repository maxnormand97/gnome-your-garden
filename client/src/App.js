import React from "react";
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PlantsPage from "./PlantsPage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import PlantDetailsPage from "./PlantDetailsPage";
import MyGardenPage from "./MyGardenPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/plants/:plantId" element={<PlantDetailsPage />} />
        <Route path="/my-garden" element={<MyGardenPage />} />
      </Routes>
    </Router>
  );
}

export default App;