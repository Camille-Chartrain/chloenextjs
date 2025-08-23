// app/components/BurgerMenu/MenuNav.js

import Link from "next/link";
import "./style.scss";

export default function MenuNav({ isOpen, showNav, hideNav }) {
  return (
    <>
      <nav className={`menu ${isOpen ? "open" : ""}`} onMouseEnter={showNav}>
        <ul>
          <li>
            <Link href="/Prestations" onClick={hideNav}>
              TYPES DE PRESTATIONS
            </Link>
          </li>
          <li>
            <Link href="/Realisations" onClick={hideNav}>
              RÉALISATIONS
            </Link>
          </li>
          <li>
            <Link href="/Partenaires" onClick={hideNav}>
              PARTENAIRES
            </Link>
          </li>
          <li>
            <Link href="/Devis" onClick={hideNav}>
              DEMANDE DE DEVIS
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`menu_closer ${isOpen ? "open" : ""}`}
        onMouseEnter={hideNav}
      ></div>
    </>
  );
}
