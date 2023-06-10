import React, { useState } from "react";
import { useSelector } from "react-redux";
/*19*/
import { selectCards } from "./cardsSlice";
import { Link, useParams } from "react-router-dom";

export default function Card({ id }) {
  /*19*/
  const cards = useSelector(selectCards);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
