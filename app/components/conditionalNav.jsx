"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ButtonOut from "./buttonOut";
import styles from "../../styles/header.module.css";

const ConditionalNav = () => {
  const { data: session, status, token } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href={"/"} className="nav-link ">
              {" "}
              Accueil
            </Link>
          </li>

          <li className="nav-item">
            <Link href={"/"} className="nav-link ">
              Concept
            </Link>
          </li>

          <li className="nav-item">
            <Link href={"/"} className="nav-link ">
              Notre Club
            </Link>
          </li>

          <li className="nav-item">
            <Link href={"/abonnement"} className="nav-link ">
              Abonnement
            </Link>
          </li>
          <li className="nav-item">
            <Link href={"/profil"} className="nav-link ">
              {session?.user.email}
            </Link>
          </li>
        </ul>

        <ButtonOut />
      </>
    );
  } else {
    return (
      <>
        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/" className="nav-link ">
              Accueil
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link href="/" className="nav-link ">
              Concept
            </Link>
          </li> */}

          <li className="nav-item">
            <Link href="/" className="nav-link ">
              Notre Club
            </Link>
          </li>

          <li className="nav-item">
            <Link href={"/abonnement"} className="nav-link ">
              Abonnement
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav d-flex  align-items-center  ">
          <li className="nav-item navigationBoutons ">
            <Link href={"/register"} className={` ${styles.btnInscription}  `}>
              S'inscrire
            </Link>
          </li>

          <li className="nav-item ">
            <Link href="/" className="  nav-Link">
              <img src="img/Icon.png" alt="Logo " className={styles.imgLogo} />
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href={"/login"}
              className={`nav-link ${styles.btnConnection} `}
            >
              Se connecter
            </Link>
          </li>
        </ul>
      </>
    );
  }
};

export default ConditionalNav;
