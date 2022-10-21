import "./App.css";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Experience from "./components/experience";
import { createContext, useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles";
import { createGlobalStyle } from "styled-components";
import vibes from "./assets/its-raining-somewhere-else.mp3";

export const ThemeContext = createContext();

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

function App() {
  const [isDark, setDark] = useState(false);
  const [startMusic, setStartMusic] = useState(false);
  const toggleDark = () => {
    setStartMusic(true);
    setDark((dark) => !dark);
  };

  const music = useRef();

  useEffect(() => {
    music.current.volume = `0.1`;
    isDark ? music.current.play() : music.current.pause();
  }, [isDark]);

  return (
    <ThemeProvider
      theme={
        isDark
          ? { ...dark, toggleDark, isDark }
          : { ...light, toggleDark, isDark }
      }
    >
      <audio src={vibes} ref={music} />
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
