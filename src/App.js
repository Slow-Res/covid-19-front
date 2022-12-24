import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Home from "./screens/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All_Countries from "./screens/All_Countries";
import Records from "./screens/Records";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/all" element={<All_Countries />} />
        </Routes>

        <Routes>
          <Route path="/records" element={<Records />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
