"use client";

import { useState } from "react";
import "./style.scss";
import MenuNav from "./MenuNav";
import BurgerIcon from "./BurgerIcon";
import MenuTitle from "./MenuTitle";
import { usePathname } from "next/navigation";

const BurgerMenu = () => {
  const getBurgerMenuClass = () => {
    const pathname = usePathname();
    if (pathname === "/") return "home_burgerMenu";
    if (pathname === "/Devis") return "devis_burgerMenu";
    if (pathname === "/Partenaires") return "partenaires_burgerMenu";
    if (pathname === "/Prestations") return "prestations_burgerMenu";
    if (pathname === "/Realisations") return "realisations_burgerMenu";
    return ""; // Default class
  };
  const burgerMenuPathClass = getBurgerMenuClass();

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
    <div className={`burgerMenu ${burgerMenuPathClass}`}>
      <MenuNav isOpen={isOpen} showNav={showNav} hideNav={hideNav} />
      <header className="burger_logo">
        <BurgerIcon isOpen={isOpen} showNav={showNav} toggleMenu={toggleMenu} />
        <MenuTitle showNav={showNav} />
      </header>
    </div>
  );
};

export default BurgerMenu;
