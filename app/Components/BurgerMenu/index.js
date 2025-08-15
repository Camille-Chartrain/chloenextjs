"use client";

import { useState } from "react";
import Link from "next/link";
import "./style.scss";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Inverse l'état du menu
    console.log("isOpen", isOpen);
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
        <nav className={`menu ${isOpen ? "open" : ""}`} onMouseEnter={showNav}>
          <ul>
            <li>
              <Link href="/Prestations">TYPES DE PRESTATIONS</Link>
            </li>
            <li>
              <Link href="/Realisations">RÉALISATIONS</Link>
            </li>
            <li>
              <Link href="/Partenaires">PARTENAIRES</Link>
            </li>
            <li>
              <Link href="/Devis">DEMANDE DE DEVIS</Link>
            </li>
          </ul>
        </nav>
        <div
          className={`menu_closer ${isOpen ? "open" : ""}`}
          onMouseEnter={hideNav}
        ></div>

        {
          // 1 }
        }
        <div
          className={`burgerIcon ${isOpen ? "open" : ""}`}
          onMouseEnter={showNav}
          onClick={toggleMenu}
        >
          <div className={`line line1 ${isOpen ? "open" : ""}`}></div>
          <div className={`line line2 ${isOpen ? "open" : ""}`}></div>
          <div className={`line line3 ${isOpen ? "open" : ""}`}></div>
        </div>

        {
          // 2 }
        }
        <div
          className={`burgerIcon ${isOpen ? "open" : ""}`}
          onMouseEnter={showNav}
          onClick={toggleMenu}
        >
          <div className={`line_2 line1 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_2 line2 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_2 line3 ${isOpen ? "open" : ""}`}></div>
        </div>

        {
          // 3
        }
        <div
          className={`burgerIcon ${isOpen ? "open" : ""}`}
          onMouseEnter={showNav}
          onClick={toggleMenu}
        >
          <div className={`line_3 line1 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_3 line2 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_3 line3 ${isOpen ? "open" : ""}`}></div>
        </div>

        {
          // 3.2
        }
        <div
          className={`burgerIcon ${isOpen ? "open" : ""}`}
          onMouseEnter={showNav}
          onClick={toggleMenu}
        >
          <div className={`line_32 line1 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_32 line2 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_32 line3 ${isOpen ? "open" : ""}`}></div>
        </div>

        {
          // 3.3
        }
        <div
          className={`burgerIcon ${isOpen ? "open" : ""}`}
          onMouseEnter={showNav}
          onClick={toggleMenu}
        >
          <div className={`line_33 line1 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_33 line2 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_33 line3 ${isOpen ? "open" : ""}`}></div>
        </div>

        {
          // 4
        }
        <div
          className={`burgerIcon ${isOpen ? "open" : ""}`}
          onMouseEnter={showNav}
          onClick={toggleMenu}
        >
          <div className={`line_4 line1 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_4 line2 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_4 line3 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_4 crox1 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_4 crox2 ${isOpen ? "open" : ""}`}></div>
        </div>

        {
          // 5
        }
        <div
          className={`burgerIcon ${isOpen ? "open" : ""}`}
          onMouseEnter={showNav}
          onClick={toggleMenu}
        >
          <div className={`line_5 line1 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_5 line2 ${isOpen ? "open" : ""}`}></div>
          <div className={`line_5 line3 ${isOpen ? "open" : ""}`}></div>
        </div>

        <h1 className="menuTitle" onMouseEnter={showNav}>
          <Link href="/" className="logo" aria-label="Retour à l'accueil">
            <img
              src="/cc_black.png"
              alt="logo chloé chartrain"
              className="img_CC"
            ></img>
            CHLOÉ CHARTRAIN
          </Link>
        </h1>
      </header>
    </div>
  );
};

export default BurgerMenu;
