import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

import BoardPage from "./pages/BoardPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/board" element={<BoardPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
