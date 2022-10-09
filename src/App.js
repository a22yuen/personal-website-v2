import "./App.css";
import React from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Experience from "./components/experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
