import React from 'react';
import { useLocation } from 'react-router-dom';
import './Crawler.css';

interface LocationState {
  images: string[];
  formattedResponse: string;
}

const Crawler: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  if (!state) {
    return <div>데이터를 불러오지 못했습니다.</div>;
  }

  const { images, formattedResponse } = state;

  console.log("Received Images:", images); // 전달받은 이미지 로그 출력
  console.log("Received Formatted Response:", formattedResponse); // 전달받은 포맷된 응답 로그 출력

  // 배열 셔플링 함수
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // 셔플된 배열에서 상위 5개의 이미지를 선택
  const randomImages = shuffleArray(images).slice(0, 5);

  return (
    <div className="CrawlerBody">
      <div className="CrawlerTitle">추천결과</div>
      <div dangerouslySetInnerHTML={{ __html: formattedResponse }}></div>
      <h2>Images</h2>
      <div className="CrawlerFrame">
        {randomImages.map((src, index) => (
          <div key={index} className="ImageContainer">
            <img src={src} alt={`이미지 ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
      <div className="CrawlerControls">
        <button className="ArrowButton left"></button>
        <button className="SelectButton">선택</button>
        <button className="ArrowButton right"></button>
      </div>
    </div>
  );
};

export default Crawler;