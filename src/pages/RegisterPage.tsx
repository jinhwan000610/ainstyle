import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './RegisterPage.css';
import Terms from '../assets/text/terms';
import Header from './Header';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber1: '',
    phoneNumber2: '',
    phoneNumber3: '',
    email: '',
    emailCode: ''
  });

  const [allAgreeChecked, setAllAgreeChecked] = useState(false);
  const [termsAgreeChecked, setTermsAgreeChecked] = useState(false);
  const [personalAgreeChecked, setPersonalAgreeChecked] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState<string | null>(null);
  const [isTimer, setIsTimer] = useState(false);
  const [isGetCode, setIsGetCode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState<number>(180);
  const [codeValue, setCodeValue] = useState<string>('');

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleAllAgreeChange = () => {
    const newValue = !allAgreeChecked;
    setAllAgreeChecked(newValue);
    setTermsAgreeChecked(newValue);
    setPersonalAgreeChecked(newValue);
  };

  const handleTermsAgreeChange = () => {
    setTermsAgreeChecked(!termsAgreeChecked);
  };

  const handlePersonalAgreeChange = () => {
    setPersonalAgreeChecked(!personalAgreeChecked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'password' || name === 'confirmPassword') {
      if (name === 'confirmPassword' && value !== formData.password) {
        setPasswordMatch('비밀번호가 일치하지 않습니다');
      } else if (name === 'confirmPassword' && value === formData.password) {
        setPasswordMatch('비밀번호가 일치합니다');
      } else if (name === 'password' && value === formData.confirmPassword) {
        setPasswordMatch('비밀번호가 일치합니다');
      } else {
        setPasswordMatch(null);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const onValidMail = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      fetch('http://localhost:8080/api/send-email-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          userEmail: formData.email,
        }),
      }).then(res => {
        if (res.status === 200) {
          alert('인증 코드가 발송되었습니다.');
          setIsGetCode(true);
          setIsTimer(true);
          setCount(180);
        } else if (res.status === 401) {
          alert('이미 존재하는 이메일입니다.');
        } else if (res.status === 402) {
          alert('이미 인증이 진행중입니다.');
        }
      });
    },
    [formData.email]
  );

  const onValidCode = () => {
    fetch('http://localhost:8080/api/verify-email-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        userEmail: formData.email,
        code: codeValue,
      }),
    }).then(res => {
      if (res.status === 200) {
        setIsChecked(true);
        alert('이메일 인증이 성공적으로 완료되었습니다.');
      } else if (res.status === 401) {
        alert('인증번호가 일치하지 않습니다.');
      }
    });
  };

  const handleEmailCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!isChecked) {
      alert('이메일 인증을 완료해주세요.');
      return;
    }

    if (termsAgreeChecked && personalAgreeChecked) {
      const completeFormData = {
        user_name: formData.fullName,
        username: formData.username,
        password: formData.password,
        email: formData.email,
        phone_number: `${formData.phoneNumber1}-${formData.phoneNumber2}-${formData.phoneNumber3}`
      };

      console.log('Submitting form data:', completeFormData);

      axios.post('http://localhost:8080/api/register', completeFormData)
        .then(response => {
          console.log('Registration successful:', response.data);
          alert("회원가입이 성공적으로 완료되었습니다!");
        })
        .catch(error => {
          console.error('Registration failed:', error);
          alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        });
    } else {
      alert("등록하려면 모든 약관에 동의해야 합니다.");
    }
  };

  return (
    <div className="RegisterPage">
      <Header />
      <form className="RegisterForm" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <table className="FormTable">
          <tbody>
            <tr>
              <th>아이디<span>*</span></th>
              <td>
                <input type="username" name="username" value={formData.username} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>비밀번호<span>*</span></th>
              <td>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인<span>*</span></th>
              <td>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                {passwordMatch && <span style={{ marginLeft: '10px', color: passwordMatch === '비밀번호가 일치하지 않습니다' ? 'red' : 'green' }}>{passwordMatch}</span>}
              </td>
            </tr>
            <tr>
              <th>이름<span>*</span></th>
              <td>
                <input type="name" name="fullName" value={formData.fullName} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>휴대전화<span>*</span></th>
              <td>
                <input type="tel" name="phoneNumber1" value={formData.phoneNumber1} onChange={handleChange} maxLength={3} pattern="[0-9]*" onKeyPress={handleKeyPress} /> -
                <input type="tel" name="phoneNumber2" value={formData.phoneNumber2} onChange={handleChange} maxLength={4} pattern="[0-9]*" onKeyPress={handleKeyPress} /> -
                <input type="tel" name="phoneNumber3" value={formData.phoneNumber3} onChange={handleChange} maxLength={4} pattern="[0-9]*" onKeyPress={handleKeyPress} />
              </td>
            </tr>
            <tr>
              <th>이메일<span>*</span></th>
              <td>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <button className="emailCheckBtn" onClick={onValidMail} disabled={!emailRegExp.test(formData.email) || isChecked}>이메일 인증</button>
                {isTimer && !isChecked ? <Timer count={count} setCount={setCount} /> : null}
                {isGetCode ? (
                  <>
                    <div className="signUpHeader">
                      <div className="signUpModalText">인증코드</div>
                    </div>
                    <input
                      name="emailCode"
                      value={codeValue}
                      className="codeInput"
                      placeholder="인증코드 4자리를 입력해주세요"
                      onChange={handleEmailCode}
                    />
                    {isChecked ? (
                      <img
                        src="img/checkImg.png" // 이미지 소스 변경 필요
                        alt="확인 완료"
                        className="codeCheckImage"
                      />
                    ) : (
                      <button
                        className="codeCheckBtn"
                        onClick={onValidCode}
                        disabled={!(codeValue && codeValue.length >= 4)}
                      >
                        확인
                      </button>
                    )}
                  </>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="All">전체 동의</div>
        <div className="AllAgree">
          <div className="CheckboxContainer">
            <input type="checkbox" checked={allAgreeChecked} onChange={handleAllAgreeChange} />
            <span>모든 약관을 확인하고 전체 동의합니다.</span>
          </div>
        </div>
        <div className="TermsUse">[필수] 이용약관 동의</div>
        <div className="TermUse"><Terms /></div>
        <div className="TermsAgree">
          <div className="CheckboxContainer">
            <span>이용약관의 동의하십니까?</span>
            <input type="checkbox" checked={termsAgreeChecked} onChange={handleTermsAgreeChange} />
            <span>동의함</span>
          </div>
        </div>
        <div className="PerUse">[필수] 개인정보 수집 및 동의</div>
        <div className="PersonalUse"><Terms /></div>
        <div className="PersonalAgree">
          <div className="CheckboxContainer">
            <span>개인정보 수집 및 이용에 동의하십니까?</span>
            <input type="checkbox" checked={personalAgreeChecked} onChange={handlePersonalAgreeChange} />
            <span>동의함</span>
          </div>
        </div>
        <div className="Button">
          <button className="ContinueButton" onClick={handleSubmit} type="button">계속하기</button>
        </div>
      </form>
    </div>
  );
}

interface TimerProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ count, setCount }) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count => count - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [count, setCount]);

  return (
    <div className="timerContainer">
      <span className="timerText">{formatTime(count)}</span>
    </div>
  );
};

export default RegisterPage;