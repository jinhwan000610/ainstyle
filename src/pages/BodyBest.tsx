import React from 'react';
import './BodyBest.css';
import BestImage1 from '../assets/img/Best1.jpg';
import BestImage2 from '../assets/img/Best2.jpg';
import BestImage3 from '../assets/img/Best3.jpg';
import BestImage4 from '../assets/img/Best4.jpg';

const BodyBest = () => {
  return (
    <div className="BodyBest">
      <div className="BestText">베스트 코디</div>
      <div className="BestStyle">
      <div className="Best1">
        <img className="BestImage" src={BestImage1} alt="Best 1" />
        <div className="Hashtag">#해시태그1</div>
      </div>
      <div className="Best2">
        <img className="BestImage" src={BestImage2} alt="Best 2" />
        <div className="Hashtag">#해시태그2</div>
      </div>
      <div className="Best3">
        <img className="BestImage" src={BestImage3} alt="Best 3" />
        <div className="Hashtag">#해시태그3</div>
      </div>
      <div className="Best4">
        <img className="BestImage" src={BestImage4} alt="Best 4" />
        <div className="Hashtag">#해시태그4</div>
      </div>
      </div>
    </div>
  );
}

export default BodyBest;

