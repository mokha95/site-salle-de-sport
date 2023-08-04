
import styles from "../../styles/header.module.css";



const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {/* <nav  >
          <div className={styles.imgcontainer}>
            <Image src="/img/logo.png" width={235} height={36} alt="logo" />
          </div>
        </nav>
       */}
          
          <nav className={styles.navbar}>
            <div className="logo-site">
            <img className={styles.logo} src="/img/logo.png" alt="logo" />
            </div>

            <div >
              <ul className={styles.navigation}>
                <li><a href="#Accueil">Accueil</a></li>
                <li><a href="#Concept">Concept</a></li>
                <li><a href="#Notre Club">Notre Club</a></li>
                <li><a href="#Abonnement">Abonnement</a></li>
              </ul>
            </div>

            <div className={styles.boutons}>
             <button className={styles.btnInscription}>S'inscrire</button>
             <div className={styles.iconeSport}>
             <img src="img/icon.png" alt="" />
             </div>
             <div className={styles.btnConnection}>
              <button>Se Connecter</button>
             </div>
            </div>
          </nav>


      </div>
      </header>
  )
}

export default Header