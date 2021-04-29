export default function Hamburger(props) {
  return (
    <svg viewBox="-100 -80 100 450" width="80" height="60" onClick={props.handleClick}>
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