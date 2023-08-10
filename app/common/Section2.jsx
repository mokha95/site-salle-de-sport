import React from "react";
import styles from "../../styles/section2.module.css";

const Section2 = () => {
  return (
    <section className={`container-fluid mt-5 pb-5 ${styles.couleurFond}`}>
      <div>
        <h2 className={`pt-5 text-center ${styles.titrePage}`}>
          RELÂCHEZ LA PRESSION CHEZ MPOWER GYM
        </h2>
        <div className={styles.trait}></div>

        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore at
          libero sed harum accusantium exercitationem impedit <br /> aspernatur
          sequi? Facere accusamus numquam impedit temporibus illum libero
          necessitatibus omnis ipsa sequi vitae. <br /> accusamus numquam
          impedit temporibus illum libero necessitatibus omnis ipsa sequi vitae.
        </p>
        <h2 className={` text-center ${styles.titrePage}`}>
          VOTRE CLUB DE MUSCULATION ET DE FITNESS
        </h2>
        <div className={styles.trait}></div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="partieGauche">
                <h3>UN COMPLEXE SPORTIF</h3>
                <div className={styles.trait2}></div>
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore at libero sed harum accusantium exercitationem impedit
                  aspernatur sequi? Facere accusamus numquam impedit temporibus
                  illum libero necessitatibus omnis ipsa sequi vitae. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  reiciendis illo eum ad corporis aliquam deleniti corrupti
                  voluptatum dolorum eaque voluptate unde, iusto odio{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="partieDroite">
                <img
                  className="img-fluid"
                  src="img/sportif-Corde1.jpg"
                  alt="sportif qui s'entraine"
                />
              </div>
            </div>
            {/* part 2  */}
          </div>
        </div>
        <div className="d-flex container mt-5">
          <div className="row">
            <div className="col-lg-6 order-2">
              <div className="partieGauche ">
                <h3>UN COMPLEXE SPORTIF</h3>
                <div className={styles.trait2}></div>
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore at libero sed harum accusantium exercitationem impedit
                  aspernatur sequi? Facere accusamus numquam impedit temporibus
                  illum libero necessitatibus omnis ipsa sequi vitae. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  reiciendis illo eum ad corporis aliquam deleniti corrupti
                  voluptatum dolorum eaque voluptate unde, iusto odio{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-1">
              <div className="partieDroite ">
                <img
                  className="img-fluid"
                  src="img/sportif-Corde1.jpg"
                  alt="sportif qui s'entraine"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="partieGauche">
                <h3>UN COMPLEXE SPORTIF</h3>
                <div className={styles.trait2}></div>
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore at libero sed harum accusantium exercitationem impedit
                  aspernatur sequi? Facere accusamus numquam impedit temporibus
                  illum libero necessitatibus omnis ipsa sequi vitae. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  reiciendis illo eum ad corporis aliquam deleniti corrupti
                  voluptatum dolorum eaque voluptate unde, iusto odio{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="partieDroite">
                <img
                  className="img-fluid"
                  src="img/halteres.png"
                  alt="sportif qui s'entraine"
                />
              </div>
            </div>
            {/* part 2  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
