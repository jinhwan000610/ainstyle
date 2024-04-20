import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BoardBody from './BoardBody';
import './BoardPage.css';

const BoardPage = () => {
  return (
    <div className="BoardPage"> {/* CSS 클래스를 적용합니다. */}
      <Header />
      <BoardBody />
      <Footer />
    </div>
  );
}

export default BoardPage;