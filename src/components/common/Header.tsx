import React from "react";
import "../../styles/Header.css";
import { appData } from "../../data/appData";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">{appData.companyName}</div>
        <nav>
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
