import "./FlipCard.css";
import { useState } from "react";

export default function FlipCard(props) {
  const [front, setFront] = useState(true);
  const { term, details, current, index, deck } = props;

  const handleClick = () => {
    setFront(!front);
  };

  return (
    <>
    <div
      className="flipcard-div"
      onClick={handleClick}
      style={{ display: current === index ? "flex" : "none"}}
    >
        {front ? (
          <h3 className="term-side">{term}</h3>
        ) : (
          <p className="details-side">{details}</p>
        )}
        <p className="flipcard-count">{`${index+1}/${deck.length}`}</p>
      </div>
      </>
  );
}
