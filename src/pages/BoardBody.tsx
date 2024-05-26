import React, { useState } from "react";
import "./BoardBody.css";
import StyleCard from "./StyleCard";
import exampleImg4 from "../assets/img/4.png";
import exampleImg5 from "../assets/img/5.png";
import exampleImg6 from "../assets/img/6.png";
import exampleImg7 from "../assets/img/7.png";
import exampleImg8 from "../assets/img/8.png";
import exampleImg9 from "../assets/img/9.png";
import exampleImg10 from "../assets/img/10.png";
import exampleImg11 from "../assets/img/11.png";
import exampleImg12 from "../assets/img/12.png";
import exampleImg13 from "../assets/img/13.png";
import exampleImg14 from "../assets/img/14.png";
import exampleImg15 from "../assets/img/15.png";

interface Card {
    id: number;
    image: string;
    category: string;
    season: string;
    style: string;
}

interface BoardBodyProps {
    onPlusClick: () => void;
    onCardClick: (card: Card) => void;
    cards: Card[];
}

// Example fetch logic:
// fetch("your_backend_api_url")
//     .then(response => response.json())
//     .then(data => {
//         // Assuming your backend response is an array of cards
//         setCards(data);
//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });

const cards: Card[] = [
    {
        id: 4,
        image: exampleImg4,
        category: "바다",
        season: "봄",
        style: "미니멀",
    },
    {
        id: 5,
        image: exampleImg5,
        category: "여행",
        season: "여름",
        style: "이지캐주얼",
    },
    {
        id: 6,
        image: exampleImg6,
        category: "캠퍼스",
        season: "가을",
        style: "비지니스캐주얼",
    },
    {
        id: 7,
        image: exampleImg7,
        category: "카페",
        season: "겨울",
        style: "아메카지",
    },
    {
        id: 8,
        image: exampleImg8,
        category: "데이트",
        season: "봄",
        style: "스트릿",
    },
    {
        id: 9,
        image: exampleImg9,
        category: "결혼식",
        season: "여름",
        style: "시티보이",
    },
    {
        id: 10,
        image: exampleImg10,
        category: "출근",
        season: "가을",
        style: "원마일웨어",
    },
    {
        id: 11,
        image: exampleImg11,
        category: "데일리",
        season: "겨울",
        style: "스포티",
    },
    {
        id: 12,
        image: exampleImg12,
        category: "스포츠",
        season: "봄",
        style: "유니크",
    },
    {
        id: 13,
        image: exampleImg13,
        category: "바다",
        season: "여름",
        style: "레트로",
    },
    {
        id: 14,
        image: exampleImg14,
        category: "여행",
        season: "가을",
        style: "러블리",
    },
    {
        id: 15,
        image: exampleImg15,
        category: "캠퍼스",
        season: "겨울",
        style: "모던캐주얼",
    },
];

const BoardBody: React.FC<BoardBodyProps> = ({
    onPlusClick,
    onCardClick,
    cards,
}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedSeason, setSelectedSeason] = useState<string>("");
    const [selectedStyle, setSelectedStyle] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const cardsPerPage = 12;

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSeason(e.target.value);
    };

    const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStyle(e.target.value);
    };

    const filteredCards = cards.filter((card) => {
        return (
            (selectedCategory === "" || card.category === selectedCategory) &&
            (selectedSeason === "" || card.season === selectedSeason) &&
            (selectedStyle === "" || card.style === selectedStyle)
        );
    });

    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentCards = filteredCards.slice(
        startIndex,
        startIndex + cardsPerPage
    );

    return (
        <div className="BoardBody">
            <div className="best-div">
                <div className="best-title-wrap">
                    <h4>BEST</h4>
                </div>
                <div className="best-style-card-container">
                    {/* 나중에 베스트 슬라이드배너 추가 예정 */}
                </div>
            </div>
            <div className="filter-div">
                <div className="top-line"></div>
                <div className="filter-button-container">
                    <div className="filter-container">
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="" disabled>
                                카테고리
                            </option>
                            <option value="">전체</option>
                            <option value="바다">바다</option>
                            <option value="여행">여행</option>
                            <option value="캠퍼스">캠퍼스</option>
                            <option value="카페">카페</option>
                            <option value="데이트">데이트</option>
                            <option value="결혼식">결혼식</option>
                            <option value="출근">출근</option>
                            <option value="데일리">데일리</option>
                            <option value="스포츠">스포츠</option>
                        </select>
                        <select
                            value={selectedSeason}
                            onChange={handleSeasonChange}
                        >
                            <option value="" disabled>
                                계절
                            </option>
                            <option value="">전체</option>
                            <option value="봄">봄</option>
                            <option value="여름">여름</option>
                            <option value="가을">가을</option>
                            <option value="겨울">겨울</option>
                        </select>
                        <select
                            value={selectedStyle}
                            onChange={handleStyleChange}
                        >
                            <option value="" disabled>
                                스타일
                            </option>
                            <option value="">전체</option>
                            <option value="미니멀">미니멀</option>
                            <option value="이지캐주얼">이지캐주얼</option>
                            <option value="비지니스캐주얼">
                                비지니스캐주얼
                            </option>
                            <option value="아메카지">아메카지</option>
                            <option value="스트릿">스트릿</option>
                            <option value="시티보이">시티보이</option>
                            <option value="원마일웨어">원마일웨어</option>
                            <option value="스포티">스포티</option>
                            <option value="유니크">유니크</option>
                            <option value="레트로">레트로</option>
                            <option value="러블리">러블리</option>
                            <option value="모던캐주얼">모던캐주얼</option>
                        </select>
                    </div>
                    <div className="filter-plus-button-wrap">
                        <div
                            className="filter-plus-button"
                            onClick={onPlusClick}
                        >
                            +
                        </div>
                    </div>
                </div>
            </div>
            {currentCards.length > 0 ? (
                <StyleCard cards={currentCards} onCardClick={onCardClick} />
            ) : (
                <div className="no-results">해당하는 스타일이 없습니다</div>
            )}
            <div className="pagination">
                <div>
                    <div
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                    >
                        prev
                    </div>
                </div>
                <div>|</div>
                <div className="pagination-number-container">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
                <div>|</div>
                <div>
                    <div
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                    >
                        next
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardBody;
