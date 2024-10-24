"use client"
import Link from 'next/link';
import styles from "./page.module.css";
import BurgerMenu from './BurgerMenu';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <BurgerMenu />
        <Link href="/">Home</Link>

      </main>

    </div>
  );
}
