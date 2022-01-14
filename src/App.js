import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Info from "./pages/Info";
import Home from "./pages/Home.js";
import Socials from "./components/Socials.js";

function App() {
  //because ODS controls the search params via angular we can't use react-router-dom to do so
  //instead we'll just keep track of the url statefully
  const [url, setUrl] = useState({
    full: window.location.href,
    query: window.location.search,
  });

  return (
    <Router>
      <h2>Nav Bar</h2>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/info/"
            element={<Info url={url} setUrl={setUrl} />}
          ></Route>
        </Routes>
        <Socials url={url} />
      </div>
    </Router>
  );
}

export default App;
