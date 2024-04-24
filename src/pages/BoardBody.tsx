import React from "react";
import "./BoardBody.css";
import StyleCard from "./StyleCard";
import exampleImg1 from "../assets/img/1.png";
import exampleImg2 from "../assets/img/2.png";
import exampleImg3 from "../assets/img/3.png";

const BoardBody = () => {
    return (
        <div className="Boardbody">
            {/* best div */}
            <div className="best-div">
                {/* BEST 제목 div */}
                <div className="best-title-wrap">
                    <h4>BEST</h4>
                </div>
                {/* 스타일카드 div */}
                <div className="best-style-card-container">
                    {/* 카드마다 div로 묶기, 카드안에 이미지넣기 */}
                    {/* size width: 400px , height: 480px */}
                    <div className="best-style-card-wrap">
                        <img src={exampleImg1} alt="" />
                    </div>
                    <div className="best-style-card-wrap">
                        <img src={exampleImg2} alt="" />
                    </div>
                    <div className="best-style-card-wrap">
                        <img src={exampleImg3} alt="" />
                    </div>
                </div>
            </div>
            {/* 필터 div */}
            <div className="filter-div">
                {/* 줄 만드는 div */}
                {/* width: 1460px height: 1px border: 3px solid #000; background: #0D0000;*/}
                <div className="top-line"></div>
                <div className="filter-button-container">
                    {/* 셀렉트 3개 묶는 div */}
                    <div className="filter-container">
                        {/* 성별 */}
                        <select name="" id="">
                            <option value="">성별</option>
                            <option value="">여성</option>
                            <option value="">남성</option>
                        </select>
                        {/* 연령 */}
                        <select name="" id="">
                            <option value="">연령</option>
                            <option value="">10대</option>
                            <option value="">20대</option>
                            <option value="">30대</option>
                        </select>
                        {/* 스타일 */}
                        <select name="" id="">
                            <option value="">스타일</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    {/* 더하기버튼 div */}
                    <div className="filter-plus-button-wrap">
                        {/* border solid black 주기 */}
                        {/* 더하기 이미지 넣기 */}
                        <div className="filter-plus-button">+</div>
                    </div>
                </div>
            </div>
            {/* 전체 스타일카드 div */}
            <StyleCard />
            {/* pagination */}
            <div className="pagination">
                {/* prev button */}
                <div>
                    <div>prev</div>
                </div>
                {/* 구분 슬래시 */}
                <div>|</div>
                {/* number button */}
                <div className="pagination-number-container">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </div>
                {/* 구분 슬래시 */}
                <div>|</div>
                {/* next button */}
                <div>
                    <div>next</div>
                </div>
            </div>
        </div>
    );
};

export default BoardBody;
