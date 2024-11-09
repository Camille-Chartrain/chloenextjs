"use client"
import Link from 'next/link';
import "./style.scss"
import BurgerMenu from './Components/BurgerMenu';
import React from "react";

export default function Home() {
  return (
    <div className="background">
      <main className="burger_logo">

        <BurgerMenu />
        <Link href="/">CHLOE CHARTRAIN</Link>

      </main>

    </div>
  );
}
