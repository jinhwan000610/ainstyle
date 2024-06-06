import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NoticePage from './pages/NoticePage';
import BoardPage from './pages/BoardPage';
import Myp from './pages/Myp';
import FunctionPage from './pages/FunctionPage';
import MyHeartPage from './pages/MyHeartPage';
import MyClothePage from './pages/MyClothePage';
import MyInfo from './pages/MyInfo';
import SelectButton from './pages/SelectButton';
import StyleCrawlerPage from './pages/StyleCrawlerPage';
import FindIdPage from './pages/FindIdPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Notice" element={<NoticePage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/mypage" element={<Myp />} />
          <Route path="/ai-style" element={<FunctionPage />} />
          <Route path="/SelectButton" element={<SelectButton />} />
          <Route path="/MyHeartPage" element={<MyHeartPage />} />
          <Route path="/MyClothePage" element={<MyClothePage />} />
          <Route path="/MyInfo" element={<MyInfo />} />
          <Route path="/StyleCrawlerPage" element={<StyleCrawlerPage />} /> {/* Ensure the correct path */}
          <Route path="/FindIdPage" element={<FindIdPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
