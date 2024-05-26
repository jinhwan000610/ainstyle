import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BoardBody from "./BoardBody";
import "./BoardPage.css";
import BoardWrite from "./BoardWrite";
import CardDetail from "./CardDetail";

interface Card {
    id: number;
    image: string;
    category: string;
    season: string;
    style: string;
}

const BoardPage: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<string>("BoardBody");
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const handleShowBoardWrite = () => {
        setActiveComponent("BoardWrite");
    };

    const handleShowCardDetail = (card: Card) => {
        setSelectedCard(card);
        setActiveComponent("CardDetail");
    };

    return (
        <div className="BoardPage">
            <Header />
            {activeComponent === "BoardBody" && (
                <BoardBody
                    onPlusClick={handleShowBoardWrite}
                    onCardClick={handleShowCardDetail}
                />
            )}
            {activeComponent === "BoardWrite" && <BoardWrite />}
            {activeComponent === "CardDetail" && selectedCard && (
                <CardDetail card={selectedCard} />
            )}
            <Footer />
        </div>
    );
};

export default BoardPage;
