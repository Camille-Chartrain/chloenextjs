// app/components/BurgerMenu/BurgerIcon.js

import "./style.scss";

export default function BurgerIcon({ isOpen, showNav, toggleMenu }) {
  return (
    <>
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

      {/* 
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
        */}
    </>
  );
}
