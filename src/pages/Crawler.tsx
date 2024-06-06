import React from 'react';
import './Crawler.css';

const Crawler = () => {
  return (
    <div className="CrawlerBody">
      <div className="CrawlerTitle">추천결과</div>
      <div className="CrawlerFrame">
        <div className="ImageContainer">이미지 1</div>
        <div className="ImageContainer">이미지 2</div>
        <div className="ImageContainer">이미지 3</div>
        <div className="ImageContainer">이미지 4</div>
        <div className="ImageContainer">이미지 5</div>
      </div>
      <div className="CrawlerControls">
        <button className="ArrowButton.left"></button>
        <button className="SelectButton">선택</button>
        <button className="ArrowButton.right"></button>
      </div>
    </div>
  );
};

export default Crawler;
