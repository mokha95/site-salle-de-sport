import React from "react";
import styles from "../../styles/section.module.css";
import Link from "next/link";

const Section = () => {
  return (
    <section>
      <div className="container p-5 d-flex align-items-center">
        <div className="row">
          <div className="col-lg-6">
            <div className="imgGauche">
              <img
                className="img-fluid sportifEntrainement"
                src="/img/perso-focus.jpg"
                alt="sportif qui s'entraine"
              />
            </div>
          </div>

          {/* partie droite */}
          <div className="col-lg-6 ">
            <div className="ptexte p-5">
              <h2>
                Mpower gym <br /> Club de Sport
              </h2>

              <div className="texteDroite mt-4">
                <p>
                  {" "}
                  <span className={styles.texteGras}>Lorem, ipsum dolor </span>
                  sit amet consectetur adipisicing elit. Repudiandae natus nulla
                  in minus, ullam nam! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quia asperiores totam delectus quaerat!
                </p>

                <p>
                  Unde assumenda tenetur atque, corrupti illum dignissimos.
                  Molestiae exercitationem quam ipsum facilis, eaque eos qui
                  quae sunt voluptatem, esse libero. Maxime dolorem commodi
                  ratione, libero aliquid in distinctio reiciendis dolor.
                </p>
              </div>

              <div className="btn2 ">
                <Link href="/">
                  {" "}
                  <button className="btnGlobal mt-2">
                    RÉSERVE TA SÉANCE D’ESSAI{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
