import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyHeart.css';
const MyHeart = () =>{
  const navigate = useNavigate();
   
  const navigateTo = (path : string) =>{
  
    navigate(path);
  }
 return(
  <div className = "heartStyle">
    <div className='heartWrapper'>
    <div className = "heartHeader"> 나의 하트 스타일 </div>
    <div className="more"  onClick={() => navigateTo('./MyheartPage')}>+ More </div>
    </div>
    
    <div className="imageLine">
        <img className = "img_Box" src = "img/styleimg1.jpg" alt ="heartFashion"/>
        <img className = "img_Box" src = "img/styleimg2.jpg" alt ="heartFashion"/>
        <img className = "img_Box" src = "img/styleimg3.jpg" alt ="heartFashion"/>
        <img className = "img_Box" src = "img/styleimg4.jpg" alt ="heartFashion"/>
    </div>
 
  </div>
)
}  

export default MyHeart;