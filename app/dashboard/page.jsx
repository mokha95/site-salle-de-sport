"use client";

import { useSession } from "next-auth/react";
import styles from "../page.module.css";

const DashboardPage = () => {
  const { data: session, status, update } = useSession();

  if (session?.user.email) {
    return (
      <main className={styles.main}>
        <h1>Dashboard</h1>
      </main>
    );
  } else {
    return (
      <main className={styles.main}>
        <h1>vous n etes pas connecter</h1>
      </main>
    );
  }
};

export default DashboardPage;
