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

            <ul>

              <Link href="/Prestations/Betons" onClick={hideNav}>
                LES BETONS CIRES
              </Link>

              <ul>
                <Link href="/Prestations/Betons/BetonCireClassic" onClick={hideNav}>
                  <li>CLASSIC</li>
                </Link>
                <Link href="/Prestations/Betons/BetonCireMineral" onClick={hideNav}>
                  <li>MINERAL</li>
                </Link>
                <Link href="/Prestations/Betons/BetonCireFerre" onClick={hideNav}>
                  <li>FERRE</li>
                </Link>
              </ul>

              <Link href="/Prestations/EnduitsDecoratifs" onClick={hideNav}>
                LES ENDUITS DECORATIFS
              </Link>

              <ul>
                <Link href="/Prestations/EnduitsDecoratifs/BetonMuralClassic" onClick={hideNav}>
                  <li>BETON MURAL CLASSIC</li>
                </Link>
                <Link href="/Prestations/EnduitsDecoratifs/BetonMuralTexture" onClick={hideNav}>
                  <li>BETON MURAL TEXTURE</li>
                </Link>
                <Link href="/Prestations/EnduitsDecoratifs/EnduitMarmorino" onClick={hideNav}>
                  <li>ENDUIT DE CHAUX MARMORINO</li>
                </Link>
                <Link href="/Prestations/EnduitsDecoratifs/ChauxFine" onClick={hideNav}>
                  <li>ENDUIT DE CHAUX FINE</li>
                </Link>
              </ul>

            </ul>

            <Link href="/Realisations" onClick={hideNav}>
              RÉALISATIONS
            </Link>
          </li>
          {/* <li>
            <Link href="/Partenaires" onClick={hideNav}>
              PARTENAIRES
            </Link>
          </li> */}
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
