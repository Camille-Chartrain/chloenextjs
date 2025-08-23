// app/components/BurgerMenu/MenuTitle.js

import Link from "next/link";
import "./style.scss";

export default function MenuTitle({ showNav, hideNav }) {
  return (
    <>
      <h1 className="menuTitle" onMouseEnter={showNav}>
        <Link
          href="/"
          className="logo"
          aria-label="Retour à l'accueil"
          onClick={hideNav}
        >
          <img
            src="/cc_black.png"
            alt="logo chloé chartrain"
            className="img_CC"
          ></img>
          <p className="titleName">CHLOÉ CHARTRAIN</p>
        </Link>
      </h1>
    </>
  );
}
