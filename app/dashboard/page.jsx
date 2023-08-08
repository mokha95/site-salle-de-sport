
"use client";
import ConditionalNav from '../components/conditionalNav'
import { useSession } from "next-auth/react";
import styles from "../page.module.css";
import ButtonOut from "../components/buttonout";

const DashboardPage = () => {
  const { data: session, status, update } = useSession();

  if (session?.user.email) {
    return (
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <br /> <ButtonOut />
        <ConditionalNav />
      </main>
    );
  }
};

