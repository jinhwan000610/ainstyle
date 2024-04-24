import React from 'react';
import './Header.css';

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };
  const handleNoticeClick = () => {
    window.location.href = '/notice';
  };
  const handleAistyleClick = () => {
    window.location.href = '/ai-style';
  };
  const handleBoardClick = () => {
    window.location.href = '/board';
  };
  const handleMypageClick = () => {
    window.location.href = '/mypage';
  };
  const handleLoginClick = () => {
    // 로그인 클릭 시 LoginPage로 이동합니다.
    window.location.href = '/login'; // 페이지를 이동시킵니다.
  };

  return (
    <div id="Header">
      <div className="Logo" onClick={handleLogoClick}>Ai In Style</div>
      <div className="Navigation">
        <div className="Menu" onClick={handleNoticeClick}>공지사항</div>
        <div className="Menu" onClick={handleAistyleClick}>AI 코디</div>
        <div className="Menu" onClick={handleBoardClick}>게시판</div>
        <div className="Menu" onClick={handleMypageClick}>마이 페이지</div>
      </div>
      <div id="Login" onClick={handleLoginClick}>
        Login
      </div>
    </div>
  );
}

export default Header;