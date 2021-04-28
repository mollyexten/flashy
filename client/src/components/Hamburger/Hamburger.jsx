export default function Hamburger(props) {
  return (
    <svg viewBox="0 0 100 600" width="150" height="80" onClick={props.handleClick}>
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