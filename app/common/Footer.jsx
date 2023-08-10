import React from "react";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="contaainer">
        <div className="row">
          <div className="col-lg-4">Mpower Gym</div>
          <div className={styles.trait}>
            <ul>
              <li> Adresse : Rue Théroigne</li>
              <li> de Méricourt, 75000 Paris</li>
              <li> numéros : 01 20 65 75 89</li>
              <li> email : mpowergym@gmail.com</li>
            </ul>
          </div>

          <div className="col-lg-4">Aide & Informations</div>
          <div className={styles.trait}>
            <ul>
              <li> FAQ</li>
              <li> Abonnements</li>
              <li> Contact</li>
              <li> Blog</li>
              <li> La Franchise</li>
            </ul>
          </div>
          <div className="col-lg-4">Horaires</div>
          <div className={styles.trait}>
            <ul>
              <li> Lundi - 06h00 - 23h00</li>
              <li> Mardi - 06h00 - 23h00</li>
              <li> Mercredi - 06h00 - 23h00</li>
              <li>Jeudi - 06h00 - 23h00</li>
              <li>Vendredi - 06h00 - 23h00</li>
              <li>Samedi - 06h00 - 23h00</li>
              <li>Dimanche - 06h00 - 23h00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
