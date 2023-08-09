import React from "react";
import styles from "../../styles/article.module.css";
import Link from "next/link";

const Article = () => {
  return (
    <article>
      <div className={styles.actu}>
        <h2 className="text-center">ACTUALITÉS MPOWER GYM</h2>

        <p className="mt-3 text-center">DÉCOUVREZ NOS DERNIERS ARTICLES</p>
        <div className={styles.trait}></div>
      </div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-lg-4  ">
            <img className="img-fluid" src=" img/food-1.jpg " alt="" />
            <h4>Lorem ipsum dolor sit amet.</h4>
            <div className="trait-2"></div>
            <p>Lire la suite</p>
          </div>
          <div className="col-lg-4  ">
            <img className="img-fluid" src=" img/food-1.jpg " alt="" />
            <h4>Lorem ipsum dolor sit amet.</h4>
            <div className="trait-2"></div>
            <p>Lire la suite</p>
          </div>
          <div className="col-lg-4  ">
            <img className="img-fluid" src=" img/food-1.jpg " alt="" />
            <h4>Lorem ipsum dolor sit amet.</h4>
            <div className="trait-2"></div>
            <p>Lire la suite</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
