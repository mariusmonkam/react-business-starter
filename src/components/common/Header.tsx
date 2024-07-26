import React, { useState } from "react";
import "../../styles/Header.css";
import { appData } from "../../data/appData";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="container">
        <div className="logo">{appData.companyName}</div>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="menu-icon"></span>
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          {appData.navigation.map((item, index) => (
            <a key={index} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
