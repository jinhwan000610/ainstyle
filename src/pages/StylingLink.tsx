import React from 'react';
import './StylingLink.css';
import aistyling1Img from '../assets/img/AiStyling.png'; // 이미지 파일 import

const StylingLink = () => {
  return (
    <a href="링크주소" className="StylingButton"> {/* 링크 주소를 href 속성에 넣으세요 */}
      <div className="Background" />
      <img className="Aistyling1" src={aistyling1Img} alt="Aistyling1" />
      <div className="AiStyling">Ai Styling</div>
    </a>
  );
}

export default StylingLink;

