import './MyInfo.css'
import React, { useState } from 'react';
import SelectButton from './SelectButton';
import Header from './Header';
import Footer from './Footer';
const MyInfo = () => {
  // 사용자 정보 상태 관리
  const [name, setName] = useState("최예준");
  const [userId, setUserId] = useState("choijune");
  const [nickname, setNickname] = useState(" ");
  const [newNickname, setNewNickname] = useState("");
  const [password, setPassword] = useState("");

  // 닉네임 중복 확인 핸들러
  const handleNicknameCheck = () => {
    // 닉네임 중복 확인 로직 추가
    console.log("닉네임 중복 확인");
  };

  // 회원 정보 수정 핸들러
  const handleInfoUpdate = () => {
    // 비밀번호 변경 로직 추가
    console.log("비밀번호 변경");
    // 회원 정보 수정 로직 추가
    console.log("회원 정보 수정");
  };

  // 회원 탈퇴 핸들러
  const handleWithdrawal = () => {
    // 회원 탈퇴 로직 추가
    console.log("회원 탈퇴");
  };

  return (
   <div className="myInfoContainer">
    <Header/>
    <div className = "InfoHead">정보 관리</div>
     <SelectButton/>
     <div className="userInfoHeader">
       회원 정보 입력
     </div>
     <div className="userInfoBody">
       <div className="userInfoRow">
         <label>이름</label>
         <span>{name}</span>
       </div>
       <div className="userInfoRow">
         <label>아이디</label>
         <span>{userId}</span>
       </div>
       <div className="userInfoRow">
         <label>닉네임</label>
         <input
           type="text"
           value={newNickname}
           onChange={(e) => setNewNickname(e.target.value)}
         />
         <button className="inlineButton" onClick={handleNicknameCheck}>중복 확인</button>
       </div>
     </div>
     <div className="userInfoFooter">
       <button className = "infoMod" onClick={handleInfoUpdate}>회원 정보 수정</button>
       <button className = "cancel">취소</button>
       <button className = "withDraw"onClick={handleWithdrawal}>회원 탈퇴</button>
     </div>
     <Footer/>
   </div>
 );
}

export default MyInfo;
