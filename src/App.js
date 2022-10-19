import "./App.css";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Experience from "./components/experience";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

function App() {

  const [isDark, setDark] = useState(false);
  const toggleDark = () => {
    console.log("toggleDark", isDark);
    setDark(dark => !dark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, setDark: toggleDark }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
