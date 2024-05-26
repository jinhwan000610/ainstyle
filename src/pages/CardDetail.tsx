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
    // Split the style string into an array of hashtags
    const styleTags = card.style.split(",").map((tag) => `#${tag.trim()}`);

    return (
        <div className="card-detail">
            <div className="style-img">
                <img src={card.image} alt="" />
            </div>
            <div className="divide-line"></div>
            <div className="style-tag-container">
                {/* Display category and season as hashtags */}
                <div className="style-tag">#{card.category}</div>
                <div className="style-tag">#{card.season}</div>
                {/* Display style tags */}
                {styleTags.map((tag, index) => (
                    <div className="style-tag" key={index}>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardDetail;
