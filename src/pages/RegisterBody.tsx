import React, { useState, useContext } from 'react';
import './RegisterBody.css';
import Terms from '../assets/text/terms'; // terms.tsx 파일을 import합니다.
import '../assets/fonts/Font.css';
import { FormDataContext } from './RegisterTop'; // FormDataContext를 import합니다.

const RegisterBody = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('FormDataContext must be used within its Provider');
  }

  const { formData } = context;
  const [allAgreeChecked, setAllAgreeChecked] = useState(false);
  const [termsAgreeChecked, setTermsAgreeChecked] = useState(false);
  const [personalAgreeChecked, setPersonalAgreeChecked] = useState(false);

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

  const handleSubmit = () => {
    if (termsAgreeChecked && personalAgreeChecked) {
      console.log("Submitting form data to backend:", formData);
      // 여기서 axios 등을 사용하여 formData를 백엔드에 전송합니다.
    } else {
      alert("등록하려면 모든 약관에 동의해야 합니다.");
    }
  };

  return (
    <div className="Registerbody">
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
    </div>
  );
};

export default RegisterBody;