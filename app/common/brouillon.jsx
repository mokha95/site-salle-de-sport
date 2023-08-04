import Image from "next/image";
import styles from "../../styles/header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <nav className="navbar bg-dark navbar-dark navbar-expand-md " >
          {/* <div className={styles.imgcontainer}>
            <Image src="/img/logo.png" width={235} height={36} alt="logo" />
          </div> */}
          <div className={styles.imgcontainer}>

          <a href="#"><img className={styles.logo} src="/img/logo.png" alt="logo du site" /></a>
          </div>
          
        
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Concept </a></li>
            <li className="nav-item"><a className="nav-link" href="#">Notre Club </a></li>
            <li className="nav-item"><a className="nav-link" href="#">Abonnnement </a></li>
          </ul>

          <div>
          <div>
            <a href="#">S'inscrire</a>
          </div>
          <div>
            <a href="#">Se connecter</a>
          </div>

          </div>
        </nav>

          
          
          
      </div>
      </header>
  )
}

export default Header