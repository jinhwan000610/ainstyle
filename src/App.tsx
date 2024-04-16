import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage'; // LoginPage를 import 합니다.

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* LoginPage로의 라우팅을 추가합니다. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
