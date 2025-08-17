// app/components/BurgerMenu/MenuTitle.js

import Link from "next/link";
import "./style.scss";

export default function MenuTitle({ showNav }) {
  return (
    <>
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
    </>
  );
}
