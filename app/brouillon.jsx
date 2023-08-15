import React from "react";

const page = () => {
  return (
    <>
      <div className="container mt-5">
        {" "}
        <h1> TROUVE FACILEMENT L’ABONNEMENT QUI TE CONVIENT.</h1>
        <h2>NOS OFFRES AVEC ENGAGEMENT</h2>
      </div>

      <div className=" mt-5 cardAbonnement container">
        <div className="row d-flex ">
          <div className="cardTarifs col-lg-4    ">
            <p>
              {" "}
              <span> 29.99€ </span> /4 semaines*
            </p>
            <p>
              Les 4 premières semaines à <span>19€</span>{" "}
            </p>
            <p>Frais d'adhésion de 25€</p>

            <p>Plateforme tonicité et minceur</p>
          </div>
          <div className="cardTarifs col-lg-4  ">
            <p>
              {" "}
              <span> 29.99€ </span> /4 semaines*
            </p>
            <p>
              Les 4 premières semaines à <span>19€</span>{" "}
            </p>
            <p>Frais d'adhésion de 25€</p>

            <p>Plateforme tonicité et minceur</p>
          </div>
          <div className="cardTarifs col-lg-4 ">
            <p>
              {" "}
              <span> 29.99€ </span> /4 semaines*
            </p>
            <p>
              Les 4 premières semaines à <span>19€</span>{" "}
            </p>
            <p>Frais d'adhésion de 25€</p>

            <p>Plateforme tonicité et minceur</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

// next regles les images 

import Image from "next/image";
import styles from "../../styles/header.module.css";
import ConditionalNav from "../components/conditionalNav";

const Header = ({ currentUser }) => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.imgcontainer}>
          <Image src="/img/logo.png" width={235} height={36} alt="logo" />
        </div>
        <ConditionalNav currentUser={currentUser} />
      </nav>
    </header>
  );
};

export default Header;
