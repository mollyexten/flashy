import "./FlipCard.css";

export default function FlipCard(props) {
  const { entry_id, term, details, username, deck_id } = props;

  return (
    <div className="slideshow-card">
      <p className="left-arrow arrow">←</p>
      <div className="flipcard-div">
        <div className="term-side">{term}</div>
        <div className="details-side">{details}</div>
      </div>
      <p className="right-arrow arrow">→</p>
    </div>
  );
}
