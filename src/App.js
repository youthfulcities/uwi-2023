import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Widgets from "./components/Widgets.js";
import Home from "./pages/Home.js";
import Socials from "./components/Socials.js";

function App() {
  const [url, setUrl] = useState({
    full: window.location.href,
    query: window.location.search,
  });

  console.log(url);

  return (
    <Router>
      <h2>Nav Bar</h2>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/info/"
            element={<Widgets url={url} setUrl={setUrl} />}
          ></Route>
        </Routes>
        <Socials url={url} />
      </div>
    </Router>
  );
}

export default App;
