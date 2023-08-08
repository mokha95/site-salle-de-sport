"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ButtonOut from "./buttonout";
import styles from "../../styles/header.module.css";

const ConditionalNav = () => {
  const { data: session, status, token } = useSession();
  if (status === "authenticated") {
    return (
      <div className="{styles.contenedor styles.barre}">
        <Link href={"/"} className="{styles.navigation">
          Accueil
        </Link>
        <Link href={"/club"} className="{styles.navigation">
          Notre Club
        </Link>
        <div>
          <Link href={"/profil"} className="{styles.navigation">
            {session?.user.email}
          </Link>
          <ButtonOut />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`contenedor ${styles.barre}`}>
        <Link href={"/"} className="{styles.navigation">
          Accueil
        </Link>

        <div>
          <Link href={"/register"}>Inscription</Link>
          <Link href={"/login"}>Connexion</Link>
        </div>
      </div>
    );
  }
};

export default ConditionalNav;




