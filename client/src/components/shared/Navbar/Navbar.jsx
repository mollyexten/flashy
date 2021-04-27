import "./Navbar.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Navbar(props) {
  const [windowDimension, setWindowDimension] = useState(null);
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);

  // Set windowDimension to figure out which layout to render
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  // If screen is resized, reset windowDimension
  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Control whether hamburger links are visible through handleClick
  const handleClick = (e) => {
    e.preventDefault();
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  // Use isMobile to determine which layout to render
  const isMobile = windowDimension <= 640;
  return (
    <nav>
      <h1>flashy</h1>
      {isMobile ? (
        <div className="mobile-nav">
          <svg
            viewBox="0 0 200 160"
            width="40"
            height="40"
            className="hamburger"
            onClick={handleClick}
          >
            <rect width="200" ry="20" height="30"></rect>
            <rect y="50" ry="20" width="200" height="30"></rect>
            <rect y="100" ry="20" width="200" height="30"></rect>
          </svg>
          <div
            className="hamburger-links"
            style={{ display: hamburger && visible ? "flex" : "none" }}
          >
            <div className="no-auth-nav">
              <Link to="/sign-in">sign in</Link>
              <Link to="/sign-up">sign up</Link>
            </div>
            <div className="auth-nav">
              <Link to="/flashcards">home</Link>
              <Link to="/flashcards/create-deck">create deck</Link>
              <Link to="/sign-out">sign out</Link>
            </div>
          </div>
          </div>
      ): (
          <div className="desktop-nav">
            <div className="no-auth-nav">
              <Link to="/sign-in">sign in</Link>
              <Link to="/sign-up">sign up</Link>
            </div>
            <div className="auth-nav">
              <Link to="/flashcards">home</Link>
              <Link to="/flashcards/create-deck">create deck</Link>
              <Link to="/sign-out">sign out</Link>
            </div>
        </div>
      )}
    </nav>
  )
}