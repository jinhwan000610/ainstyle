import React, { useState, createContext, useContext, ReactNode } from 'react';

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

const defaultFormData: FormData = {
  username: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  phoneNumber1: '',
  phoneNumber2: '',
  phoneNumber3: '',
  email: ''
};

export const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

const FormDataProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;