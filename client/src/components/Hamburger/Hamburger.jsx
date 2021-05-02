export default function Hamburger(props) {
  return (
    <svg
      viewBox="00 -65 100 400"
      width="60"
      height="70"
      onClick={props.handleClick}
      className="hamburger-image"
    >
    <circle
      cx="50"
            cy="50"
            r="35"
            fill="#FAFF81"
    />
    <circle
      cx="50"
            cy="175"
            r="35"
            fill="#FAFF81"
    />
    <circle
      cx="50"
      cy="300"
      r="35"
      fill="#FAFF81"
    />
  </svg>
  )
}