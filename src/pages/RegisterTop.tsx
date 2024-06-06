import React, { useState, createContext, useEffect, useContext } from 'react';
import './RegisterTop.css';

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;
  email: string;
}

interface Errors {
  username: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phoneNumber: string;
  email: string;
}

interface FormDataContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formValid: boolean;
  setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  errors: Errors;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

const RegisterTop = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber1: '',
    phoneNumber2: '',
    phoneNumber3: '',
    email: ''
  });

  const [errors, setErrors] = useState<Errors>({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    email: ''
  });

  const [formValid, setFormValid] = useState(false);

  const context = useContext(FormDataContext);

  if (!context) {
    throw new Error('FormDataContext must be used within a provider');
  }

  const { setAlertMessage } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {
        username: formData.username ? '' : '아이디를 입력해주세요.',
        password: formData.password ? '' : '비밀번호를 입력해주세요.',
        confirmPassword: formData.confirmPassword ? '' : '비밀번호 확인을 입력해주세요.',
        fullName: formData.fullName ? '' : '이름을 입력해주세요.',
        phoneNumber: (formData.phoneNumber1 && formData.phoneNumber2 && formData.phoneNumber3) ? '' : '전화번호를 입력해주세요.',
        email: formData.email ? '' : '이메일을 입력해주세요.'
      };
      setErrors(newErrors);
      setFormValid(!Object.values(newErrors).some(x => x !== ''));
    };

    validateForm();
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValid) {
      console.log('Submitting Data:', formData);
      // Here, you can dispatch formData to your backend
    } else {
      // Update errors state to show validation messages
      const newErrors = {
        username: formData.username ? '' : '아이디를 입력해주세요.',
        password: formData.password ? '' : '비밀번호를 입력해주세요.',
        confirmPassword: formData.confirmPassword ? '' : '비밀번호 확인을 입력해주세요.',
        fullName: formData.fullName ? '' : '이름을 입력해주세요.',
        phoneNumber: (formData.phoneNumber1 && formData.phoneNumber2 && formData.phoneNumber3) ? '' : '전화번호를 입력해주세요.',
        email: formData.email ? '' : '이메일을 입력해주세요.'
      };
      setErrors(newErrors);
      setAlertMessage('모든 필드를 올바르게 입력해주세요.');
    }
  };

  return (
    <div className="FormBody">
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <div className="FormName">회원가입</div>
        <table className="FormTable">
          <tbody>
            <tr>
              <th>아이디<span>*</span></th>
              <td>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                <span>&nbsp;&nbsp;(영문소문자/숫자, 4 ~ 16자)</span>
                {errors.username && <span className="error">{errors.username}</span>}
              </td>
            </tr>
            <tr>
              <th>비밀번호<span>*</span></th>
              <td>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <span>&nbsp;&nbsp;(영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8 ~ 16자)</span>
                {errors.password && <span className="error">{errors.password}</span>}
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인<span>*</span></th>
              <td>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </td>
            </tr>
            <tr>
              <th>이름<span>*</span></th>
              <td>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
              </td>
            </tr>
            <tr>
              <th>휴대전화<span>*</span></th>
              <td>
                <input type="tel" name="phoneNumber1" value={formData.phoneNumber1} onChange={handleChange} maxLength={3} /> <span>-</span>
                <input type="tel" name="phoneNumber2" value={formData.phoneNumber2} onChange={handleChange} maxLength={4} /> <span>-</span>
                <input type="tel" name="phoneNumber3" value={formData.phoneNumber3} onChange={handleChange} maxLength={4} />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
              </td>
            </tr>
            <tr>
              <th>이메일<span>*</span></th>
              <td>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default RegisterTop;