import React, { useState, createContext } from 'react';
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

interface FormDataContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
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

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Remove any existing errors for this field
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      username: formData.username ? '' : '아이디를 입력해주세요.',
      password: formData.password ? '' : '비밀번호를 입력해주세요.',
      confirmPassword: formData.confirmPassword ? '' : '비밀번호 확인을 입력해주세요.',
      fullName: formData.fullName ? '' : '이름을 입력해주세요.',
      phoneNumber: (formData.phoneNumber1 && formData.phoneNumber2 && formData.phoneNumber3) ? '' : '전화번호를 입력해주세요.',
      email: formData.email ? '' : '이메일을 입력해주세요.'
    };
    setErrors(newErrors);

    // Check if there are any errors
    if (!Object.values(newErrors).some(x => x !== '')) {
      console.log('Submitting Data:', formData);
      // Here, you can dispatch formData to your backend
    }
  };

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      <div className="FormBody">
      <form className="RegisterForm" onSubmit={handleSubmit}>
          <div className="FormName">회원가입</div>
          <table className="FormTable">
            <tbody>
              <tr>
                <th>아이디<span>*</span></th>
                <td><input type="username" name="username" value={formData.username} onChange={handleChange} /><span>&nbsp;&nbsp;(영문소문자/숫자, 4 ~ 16자)</span>
                {errors.username && <span className="error">{errors.username}</span>}
                </td>
              </tr>
              <tr>
                <th>비밀번호<span>*</span></th>
                <td><input type="registerpassword" name="password" value={formData.password} onChange={handleChange} /><span>&nbsp;&nbsp;(영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8 ~ 16자)</span>
                {errors.password && <span className="error">{errors.password}</span>}
                </td>
              </tr>
              <tr>
                <th>비밀번호 확인<span>*</span></th>
                <td><input type="passwordcheck" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </td>
              </tr>
              <tr>
                <th>이름<span>*</span></th>
                <td><input type="name" name="fullName" value={formData.fullName} onChange={handleChange} />
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
                <td><input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </FormDataContext.Provider>
  );
};

export default RegisterTop;