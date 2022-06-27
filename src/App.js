import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";
import Resume from "./components/Resume.js";
import Error from "./components/Error.js";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Header from "./components/Header";
import { deepOrange, grey } from "@mui/material/colors";
import { AppColors } from "./components/color/AppColors";
function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const getDesignTokens = (mode) => ({
    palette: {
      mode: darkMode ? "dark" : "light",
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: "#1e464a",
            },
            text: {
              primary: "#fff",
              secondary: grey[100],
            },
          }
        : {
            // palette values for dark mode
            primary: grey,
            divider: grey[700],
            background: {
              default: deepOrange[100],
              paper: "#212121",
            },
            text: {
              primary: "#fff",
              secondary: grey[300],
            },
          }),
    },
  });

  const darkModeTheme = createTheme(
    getDesignTokens(darkMode ? "dark" : "light")
  );

  // useEffect(() => {
  //   const themeType = localStorage.getItem("dark") || "dark";
  //   if (themeType != "dark") {
  //     setDarkMode(true);
  //   }
  // }, []);

  const themeChange = (e) => {
    setDarkMode(!darkMode);
    // localStorage.setItem("dark", darkMode ? "light" : "dark");
  };
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkModeTheme}>
          <Paper square>
            <Navbar check={darkMode} change={(e) => themeChange()} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />

              <Route exact path="/about" element={<About />} />
              <Route exact path="/work" element={<Work />} />

              <Route exact path="/contact" element={<Contact />} />
              <Route path="about/resume" element={<Resume />} />
              <Route path="*" element={<Error />} />
            </Routes>
            {/* <Header /> */}
          </Paper>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
