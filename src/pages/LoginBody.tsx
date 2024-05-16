import React from 'react';
import './LoginBody.css'; // 스타일 파일을 import 합니다.

const LoginBody = () => {
  const handleFindidClick = () => {
    window.location.href = '/findid';
  };
  const handleFindpassClick = () => {
    window.location.href = '/findpass';
  };
  const handleRegisterClick = () => {
    window.location.href = '/register';
  };


return (
    <div className="Loginbody">
      <div className="Bodyframe">
        <div className="Logintext">
          <div className="Logina">LOGIN</div>
        </div>
        <div className="Loginframe">
          <div className="Idpass">
            {/* 아이디 입력란 */}
            <input type="text" className="IdInput" placeholder="아이디" />
            {/* 패스워드 입력란 */}
            <input type="password" className="PassInput" placeholder="패스워드" />
          </div>
          <div className="Loginbutton">
            <div className="Loginb">Login</div>
          </div>
        </div>
        <div className="Membership">
          <div onClick={handleFindidClick}>아이디 찾기</div>
          <div onClick={handleFindpassClick}>비밀번호 찾기</div>
          <div onClick={handleRegisterClick}>회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default LoginBody;