"use client"
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <Link href="/">Home</Link>
        <Link href="/Devis">Devis-Contact</Link>
        <Link href="/Prestations">Types-de-prestations</Link>
        <Link href="/Realisations">Réalisations</Link>
        <Link href="/Partenaires">Partenaires</Link>
      </main>

    </div>
  );
}
