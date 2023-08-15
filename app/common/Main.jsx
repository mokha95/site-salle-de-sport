import React from "react";
import styles from "../../styles/main.module.css";
import Link from "next/link";

const Main = () => {
  return (
    <main className={styles.menu}>
      <div className="container p-5  ">
        <div className="row pt-5  ">
          <div className=" col-lg-6 ">
            <div className="partieGauche mw-25">
              <h1>
                Donne Toi A fond et atteins
                <span className={styles.objectifsSport}>
                  {" "}
                  <br /> tes objectifs !{" "}
                </span>
              </h1>
              <p className="">Viens t’entrainer au club Power Gym</p>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur
                <br />
                adipisicing elit. Repudiandae natus
                <br />
                nulla in minus, ullam nam!
              </p>
              <div className="btn1 mt-5">
                <Link href="/">
                  {" "}
                  <button className={`btn  ${styles.btnPage}`}>
                    {" "}
                    S'INSCRIRE CHEZ MPOWER GYM
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="img/salle.png"
              alt=" intérieur de la salle de sport"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
