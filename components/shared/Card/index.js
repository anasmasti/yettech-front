import React, { useState, useEffect } from "react";
import Card from "./Card";
import * as cardData from "../../../helper/data/card.json";

function index() {
  const [check, setcheck] = useState(false);
  const [cardInfo, setCardInfo] = useState(cardData.default);
  let cardInfo_ = cardData.default;

  useEffect(() => {
    setCardInfo(cardData);
    console.log("cardData", cardData);
    console.log("cardInfo", cardInfo);
    if (cardData.length % 2 > 0) {
      setcheck(true);
    }
  }, []);

  return (
    <div className="cards-container mt-3 d-flex w-75">
      {cardData.map((card, i) => (
        <Card
          title={card.title}
          description={card.description}
          image={card.image}
          key={i}
          checkStyle={cardData.length - 1 == i && check ? true : false}
        />
      ))}
    </div>
  );
}

export default index;
