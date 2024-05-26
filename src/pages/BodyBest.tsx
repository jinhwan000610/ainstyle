import React, { useState, useEffect } from 'react';
import './BodyBest.css';
import BestImage1 from '../assets/img/Best1.jpg';
import BestImage2 from '../assets/img/Best2.jpg';
import BestImage3 from '../assets/img/Best3.jpg';
import BestImage4 from '../assets/img/Best4.jpg';
import BestImage5 from '../assets/img/Best5.jpg'; // 추가 이미지
import BestImage6 from '../assets/img/Best6.jpg'; // 추가 이미지
import BestImage7 from '../assets/img/Best7.jpg'; // 추가 이미지
import BestImage8 from '../assets/img/Best8.jpg'; // 추가 이미지
import BestImage9 from '../assets/img/Best9.jpg'; // 추가 이미지
import BestImage10 from '../assets/img/Best10.jpg'; // 추가 이미지

const images = [
  { src: BestImage1, hashtag: "#해시태그1" },
  { src: BestImage2, hashtag: "#해시태그2" },
  { src: BestImage3, hashtag: "#해시태그3" },
  { src: BestImage4, hashtag: "#해시태그4" },
  { src: BestImage5, hashtag: "#해시태그5" },
  { src: BestImage6, hashtag: "#해시태그6" },
  { src: BestImage7, hashtag: "#해시태그7" },
  { src: BestImage8, hashtag: "#해시태그8" },
  { src: BestImage9, hashtag: "#해시태그9" },
  { src: BestImage10, hashtag: "#해시태그10" },
];

const BodyBest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(interval);
  }, []);

  const displayedImages = [
    images[(currentIndex) % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length],
  ];

  return (
    <div className="BodyBest">
      <div className="BestText">베스트 코디</div>
      <div className="BestStyle">
        {displayedImages.map((image, index) => (
          <div key={index} className="Best">
            <img className="BestImage" src={image.src} alt={`Best ${index + 1}`} />
            <div className="Hashtag">{image.hashtag}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodyBest;