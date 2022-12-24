import React from "react";
import Search from "./componenets/Search.jsx";
import ResultPage from "./componenets/ResultPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Search />} />
            <Route path="result/:name" element={<ResultPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
