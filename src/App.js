import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, Grid } from "@mui/material";

import Info from "./pages/Info";
import Home from "./pages/Home.js";
import Socials from "./components/Socials.js";
import Intro from "./pages/Intro";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#3f518c",
      main: "#4F66AF",
      light: "#8493c7",
    },
    secondary: {
      light: "#fcdf94",
      main: "#FBD166",
      dark: "#c9a752",
    },
    error: {
      light: "#f38f8c",
      main: "#EE605B",
      dark: "#be4c49",
    },
    warning: {
      light: "#f9d0cd",
      main: "#F7BCB7",
      dark: "#c69692",
    },
    success: {
      light: "#cde4af",
      main: "#B8D98D",
      dark: "#93ae71",
    },
    info: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Gotham Narrow Book",
    h1: {
      fontFamily: "Gotham Narrow Black",
    },
    h2: {
      fontFamily: "Gotham Narrow Medium",
    },
    h3: {
      fontFamily: "Gotham Narrow Medium",
    },
    h4: {
      fontFamily: "Gotham Narrow Light",
    },
    h5: {
      fontFamily: "Gotham Narrow Medium",
    },
  },
  shape: {
    borderRadius: 35,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "200px",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          position: "fixed",
        },
      },
    },
  },
});

function App() {
  //because ODS controls the search params via angular we can't use react-router-dom to do so
  //instead we'll just keep track of the url statefully
  const [url, setUrl] = useState({
    full: window.location.href,
    query: window.location.search,
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/info/"
            element={<Info url={url} setUrl={setUrl} />}
          ></Route>
          <Route path="/intro" element={<Intro />}></Route>
        </Routes>
        {/* <Socials url={url} /> */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
