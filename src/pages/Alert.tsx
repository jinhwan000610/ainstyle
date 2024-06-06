import React from 'react';
import './Alert.css';

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="alert">
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>X</button>
    </div>
  );
};

export default Alert;