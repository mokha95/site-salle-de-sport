
import styles from "../../styles/header.module.css";
import Link from "next/link";




const Header = () => {
  return (
    <header>
<div className="container-fluid">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
 
    <Link href="/" className={`navbar-brand ${styles.TitreSite}`}>  Mpower Gym</Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
    <li className="nav-item">
    <Link href="/" className="nav-link ">  Accueil</Link>
    </li>
   
    <li className="nav-item">
    <Link href="/" className="nav-link ">  Concept</Link>
    </li>
   
    <li className="nav-item">
    <Link href="/" className="nav-link ">  Notre Club</Link>
    </li>
   
    <li className="nav-item">
    <Link href="/" className="nav-link ">  Abonnement</Link>
    </li>
  </ul>

  <ul className="navbar-nav d-flex align-items-center ">
<li className="nav-item ">
    <Link href="/" className={` ${styles.btnInscription}  `}>  S'inscrire</Link>
    </li>

<li className="nav-item ">
    <Link href="/" className="  nav-Link"><img src="img/Icon.png" alt="Logo " className={styles.imgLogo} /></Link>
    </li>
   
    <li className="nav-item">
    <Link href="/" className={`nav-link ${styles.btnConnection} `}>  Se connecter</Link>
    </li>
</ul>
    </div>
  </div>
</nav>
</div>
      </header>
  )
}

export default Header