import React, { useState, useEffect } from 'react';
import './Crawler.css';
import axios from 'axios';
import { useStyleContext } from '../context/StyleContext';

const Crawler: React.FC = () => {
  const { styleType } = useStyleContext();
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async (styleType: string) => {
    try {
      const response = await axios.post('http://localhost:8080/api/crawl/images', { styleType });
      const randomImages = response.data.sort(() => 0.5 - Math.random()).slice(0, 5); // 랜덤으로 5개 선택
      setImages(randomImages);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    }
  };

  useEffect(() => {
    if (styleType) {
      fetchImages(styleType);
    }
  }, [styleType]);

  return (
    <div className="CrawlerBody">
      <div className="CrawlerTitle">추천결과</div>
      <div className="CrawlerFrame">
        {images.map((src, index) => (
          <div key={index} className="ImageContainer">
            <img src={src} alt={`이미지 ${index + 1}`} />
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
