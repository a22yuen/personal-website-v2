import "./App.css";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Experience from "./components/experience";
import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles";
import { createGlobalStyle } from "styled-components";

export const ThemeContext = createContext();

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

function App() {
  const [isDark, setDark] = useState(false);
  const toggleDark = () => {
    setDark((dark) => !dark);
  };

  return (
    <ThemeProvider
      theme={
        isDark
          ? { ...dark, setDark: toggleDark }
          : { ...light, setDark: toggleDark }
      }
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
