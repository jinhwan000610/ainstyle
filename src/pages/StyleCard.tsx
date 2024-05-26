import React from "react";
import "./StyleCard.css";

interface Card {
    id: number;
    image: string;
    category: string;
    season: string;
    style: string;
}

interface StyleCardProps {
    cards: Card[];
    onCardClick: (card: Card) => void;
}

const StyleCard: React.FC<StyleCardProps> = ({ cards, onCardClick }) => {
    const rows = [];
    for (let i = 0; i < cards.length; i += 4) {
        rows.push(cards.slice(i, i + 4));
    }

    return (
        <div className="StyleCard">
            {rows.map((row, rowIndex) => (
                <div className="style-card-row" key={rowIndex}>
                    {row.map((card) => (
                        <div
                            className="style-card"
                            key={card.id}
                            onClick={() => onCardClick(card)}
                        >
                            <img src={card.image} alt={card.category} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default StyleCard;
