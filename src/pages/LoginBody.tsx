import React, { useState } from 'react';
import './LoginBody.css'; // 스타일 파일을 import 합니다.
import axios from 'axios';

const LoginBody = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    axios.post('http://localhost:8080/api/login', formData)
      .then(response => {
        
        window.location.href = '/'; // 성공 시 메인페이지로 리다이렉트
      })
      .catch(error => {
        console.error('Login failed:', error);
        setError('로그인 실패. 아이디와 비밀번호를 확인해주세요.');
      });
  };

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
            <input
              type="text"
              className="IdInput"
              placeholder="아이디"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {/* 패스워드 입력란 */}
            <input
              type="password"
              className="PassInput"
              placeholder="패스워드"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="Loginbutton" onClick={handleLogin}>
            <div className="Loginb">Login</div>
          </div>
          {error && <div className="Error">{error}</div>}
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
