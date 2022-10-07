import "./App.css";
import React from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Experiences from "./components/experiences";
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
