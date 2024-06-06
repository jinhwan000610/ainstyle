import React, { useState, useContext, useEffect } from 'react';
import './RegisterBody.css';
import Terms from '../assets/text/terms'; // terms.tsx 파일을 import합니다.
import '../assets/fonts/Font.css';
import { FormDataContext } from './RegisterTop'; // FormDataContext를 import합니다.

const RegisterBody = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('FormDataContext must be used within its Provider');
  }

  const { formData, formValid, errors, setErrors, setAlertMessage } = context;
  const [allAgreeChecked, setAllAgreeChecked] = useState(false);
  const [termsAgreeChecked, setTermsAgreeChecked] = useState(false);
  const [personalAgreeChecked, setPersonalAgreeChecked] = useState(false);
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreementErrors, setAgreementErrors] = useState({
    terms: '',
    personal: ''
  });

  useEffect(() => {
    setAllAgreed(formValid && termsAgreeChecked && personalAgreeChecked);
  }, [formValid, termsAgreeChecked, personalAgreeChecked]);

  const handleAllAgreeChange = () => {
    const newValue = !allAgreeChecked;
    setAllAgreeChecked(newValue);
    setTermsAgreeChecked(newValue);
    setPersonalAgreeChecked(newValue);
    setAgreementErrors({
      terms: '',
      personal: ''
    });
  };

  const handleTermsAgreeChange = () => {
    setTermsAgreeChecked(!termsAgreeChecked);
    setAgreementErrors({
      ...agreementErrors,
      terms: ''
    });
  };

  const handlePersonalAgreeChange = () => {
    setPersonalAgreeChecked(!personalAgreeChecked);
    setAgreementErrors({
      ...agreementErrors,
      personal: ''
    });
  };

  const handleSubmit = () => {
    if (!termsAgreeChecked) {
      setAgreementErrors(prev => ({ ...prev, terms: '이용약관에 동의해주세요.' }));
    }
    if (!personalAgreeChecked) {
      setAgreementErrors(prev => ({ ...prev, personal: '개인정보 수집 및 이용에 동의해주세요.' }));
    }

    if (allAgreed) {
      console.log("Submitting form data to backend:", formData);
      // 여기서 axios 등을 사용하여 formData를 백엔드에 전송합니다.
    } else {
      setAlertMessage('모든 필드를 올바르게 입력하고, 약관에 동의해주세요.');
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
        {agreementErrors.terms && <span className="error">{agreementErrors.terms}</span>}
      </div>
      <div className="PerUse">[필수] 개인정보 수집 및 동의</div>
      <div className="PersonalUse"><Terms /></div>
      <div className="PersonalAgree">
        <div className="CheckboxContainer">
          <span>개인정보 수집 및 이용에 동의하십니까?</span>
          <input type="checkbox" checked={personalAgreeChecked} onChange={handlePersonalAgreeChange} />
          <span>동의함</span>
        </div>
        {agreementErrors.personal && <span className="error">{agreementErrors.personal}</span>}
      </div>
      <div className="Button">
        <button className="ContinueButton" onClick={handleSubmit} type="button">계속하기</button>
      </div>
    </div>
  );
};

export default RegisterBody;