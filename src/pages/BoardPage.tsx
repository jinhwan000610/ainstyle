import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BoardBody from "./BoardBody";
import CardDetail from "./CardDetail";
import "./BoardPage.css";
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

const BoardPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    useEffect(() => {
        if (id) {
            const card = cards.find((card) => card.id === parseInt(id));
            if (card) {
                setSelectedCard(card);
            }
        } else {
            setSelectedCard(null);
        }
    }, [id]);

    const handleShowBoardWrite = () => {
        navigate("/board/write");
    };

    const handleShowCardDetail = (card: Card) => {
        setSelectedCard(card);
        navigate(`/board/${card.id}`);
    };

    const handleBackToBoard = () => {
        setSelectedCard(null);
        navigate("/board");
    };

    return (
        <div className="BoardPage">
            <Header />
            {selectedCard ? (
                <CardDetail card={selectedCard} />
            ) : (
                <BoardBody
                    onPlusClick={handleShowBoardWrite}
                    onCardClick={handleShowCardDetail}
                    cards={cards}
                />
            )}
            <Footer />
        </div>
    );
};

export default BoardPage;
