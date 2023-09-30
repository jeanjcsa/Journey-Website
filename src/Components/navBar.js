import React, { useEffect, useState } from "react";
import "./navBar.css";
import { Fade as Hamburger } from "hamburger-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../mainScript";

const NavBar = () => {
  // isSticy is a function that verifies if the scroll of the page is zero or not
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update the isSticky state based on scroll position
      setIsSticky(window.scrollY > 0);
    };

    // Attach the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    // It is, when you go back to the top, isSticky is set as false again
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // A variable that defines if the menu is open or not
  const [isOPen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
        <div className={`navbar-inner ${isSticky ? "sticky-inner" : ""}`}>
          <div className="logo-box">
            <a className={`logo ${isSticky ? "typewriter" : ""}`}>Journey.</a>
          </div>
          <div className={`menu-expand-icon ${isSticky ? "whitebg" : ""}`}>
            <Hamburger
              toggled={isOPen}
              toggle={setIsOpen}
              color={`${isSticky ? "#610068" : "#fff"}`}
            />
          </div>
        </div>
      </div>
      <div className={`backdrop-menu ${isOPen ? "backdrop-show" : ""}`}>
        <div className="nav-buttons">
          <ul>
            <li>
              <a href="#" className="menu-button">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="menu-button">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="menu-button">
                Trabalho
              </a>
            </li>
            <li>
              <a href="#" className="menu-button">
                Equipe
              </a>
            </li>
            <li>
              <a href="#" className="menu-button">
                Contatos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
