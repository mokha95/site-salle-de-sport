import Link from "next/link";
import styles from "./page.module.css";
import ButtonOut from "./components/buttonOut";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>NextAuth.js</h1>
      <Link href="/register">Inscription</Link>
      <Link href="/login">Connexion</Link>
      <ButtonOut />
    </main>
  );
}