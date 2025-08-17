"use client";

import { useState } from "react";
import "./style.scss";
import MenuNav from "./MenuNav";
import BurgerIcon from "./BurgerIcon";
import MenuTitle from "./MenuTitle";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Inverse l'état du menu
  };

  const showNav = () => {
    setIsOpen(true);
  };

  const hideNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="burgerMenu">
      <header className="burger_logo">
        <MenuNav isOpen={isOpen} showNav={showNav} hideNav={hideNav} />
        <BurgerIcon isOpen={isOpen} showNav={showNav} toggleMenu={toggleMenu} />
        <MenuTitle showNav={showNav} />
      </header>
    </div>
  );
};

export default BurgerMenu;
