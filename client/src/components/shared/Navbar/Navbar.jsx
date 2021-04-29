import "./Navbar.css";
import AuthOptions from "./NavAuth/AuthOptions";
import UnAuthOptions from "./NavAuth/UnAuthOptions";
import Hamburger from "../../Hamburger/Hamburger";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar(props) {
  const [windowDimension, setWindowDimension] = useState(null);
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);
  const { handleLogout, currentUser } = props;

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
  const handleClick = () => {
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  // Use isMobile to determine which layout to render
  const isMobile = windowDimension <= 640;
  return (
    <nav>
      {isMobile ? (
        <div className="mobile-nav">
          <h1 className="nav-header">flashy</h1>
          <Hamburger className="hamburger-image" handleClick={handleClick} />
          <div
            className="hamburger-dropdown"
            style={{ display: hamburger && visible ? "flex" : "none" }}
          >
            <p onClick={handleClick} className="hamburger-close">
              ✕
            </p>
            {props.currentUser ? (
              <AuthOptions
                currentUser={currentUser}
                handleLogout={handleLogout}
              />
            ) : (
              <UnAuthOptions />
            )}
          </div>
        </div>
      ) : (
        <div className="desktop-nav">
          <h1 className="nav-header">flashy</h1>
          <div className="desktop-console">
            {props.currentUser ? (
              <AuthOptions
                currentUser={currentUser}
                handleLogout={handleLogout}
              />
            ) : (
              <UnAuthOptions />
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
