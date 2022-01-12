import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Widgets from "./components/Widgets.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <Router>
      <h2>Nav Bar</h2>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/info/" element={<Widgets />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
