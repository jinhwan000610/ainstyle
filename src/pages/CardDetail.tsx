import React from "react";
import "./CardDetail.css";

interface Card {
    id: number;
    image: string;
    category: string;
    season: string;
    style: string;
}

interface CardDetailProps {
    card: Card;
}

const CardDetail: React.FC<CardDetailProps> = ({ card }) => {
    const styleTags = card.style.split(",").map((tag) => `#${tag.trim()}`);

    return (
        <div className="card-detail">
            <div className="style-img">
                <img src={card.image} alt="" />
            </div>
            <div className="divide-line"></div>
            <div className="style-tag-container">
                <div className="style-tag">#{card.category}</div>
                <div className="style-tag">#{card.season}</div>
                {styleTags.map((tag, index) => (
                    <div key={index} className="style-tag">
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardDetail;
