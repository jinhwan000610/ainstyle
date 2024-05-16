import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './RegisterPage.css';
import RegisterBody from './RegisterBody';
import RegisterTop from './RegisterTop';
import { FormDataContext } from './RegisterTop';

const RegisterPage = () => {
  // 폼 데이터 상태 초기화
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber1: '',
    phoneNumber2: '',
    phoneNumber3: '',
    email: ''
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      <div className="RegisterPage">
        <Header />
        <RegisterTop />
        <RegisterBody />
        <Footer />
      </div>
    </FormDataContext.Provider>
  );
}

export default RegisterPage;
