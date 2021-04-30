import "./FlipCard.css";
import { useState } from "react";

export default function FlipCard(props) {
  const [front, setFront] = useState(true);
  const { term, details, nextSlide, prevSlide } = props;

  const handleClick = () => {
    setFront(!front);
  };

  return (
    <div className="slideshow-card">
      <p className="left-arrow arrow" onClick={prevSlide}>←</p>
      <div className="flipcard-div" onClick={handleClick}>
        {front ? (
          <div className="term-side">{term}</div>
        ) : (
          <div className="details-side">{details}</div>
        )}
      </div>
      <p className="right-arrow arrow" onClick={nextSlide}>→</p>
    </div>
  );
}
