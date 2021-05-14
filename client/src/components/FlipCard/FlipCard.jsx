import "./FlipCard.css";

export default function FlipCard(props) {
  const { term, details, current, index, deck, setFront, front } = props;

  const handleClick = () => {
    setFront(!front);
  };

  return (
    <div
      className="flipcard-space"
      style={{ display: current === index ? "flex" : "none" }}
    >
    <div
        className="flipcard-div"
        onClick={handleClick}
    >
        {front ? (
          <h3 className="term-side">{term}</h3>
        ) : (
          <p className="details-side">{details}</p>
        )} 
      </div>
      <p className="flipcard-count">{`${index+1}/${deck.length}`}</p>
    </div>
  );
}
