import React from "react";
import img1 from "@/public/img/sportif-sport.avif";

const page = () => {
  return (
    <>
      <div className="container  pageAbonnement">
        {" "}
        <h1 className="titreAbonnement text-center">
          {" "}
          TROUVE FACILEMENT L’ABONNEMENT QUI TE CONVIENT.
        </h1>
        <p className="txtAbonnement text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          libero at blanditiis quidem est odit, commodi similique dignissimos
          illum eum nisi officia quisquam distinctio iure.
        </p>
        <h2 className="pt-5 text-center">NOS OFFRES AVEC ENGAGEMENT</h2>
      </div>

      <div className="cardAbonnement container  ">
        <div className=" carteAbonnement d-flex text-center  justify-content-center ">
          <div className="cardTarifs col-lg-4    ">
            <div className="typeAbonnement">
              <p>Classic</p>
            </div>
            <div className="prixAbonnement pt-4">
              <p className="fw-bold">
                <span className="prix"> 29.99€ </span> /4 semaines*
              </p>
            </div>
            <div>
              <p>
                Les 4 premières semaines à{" "}
                <span className="prixCarte">19€</span>{" "}
              </p>
            </div>
            <div>
              <p>Frais d'adhésion de 25€</p>

              <p>Plateforme tonicité et minceur</p>
            </div>
          </div>
          {/*  */}
          <div className="cardTarifs col-lg-4   ">
            <div className="typeAbonnement ">
              <p>Classic</p>
            </div>
            <div className="prixAbonnement pt-4">
              <p className="fw-bold">
                <span className="prix"> 35.99€ </span> /4 semaines*
              </p>
            </div>
            <div>
              <p>
                Les 4 premières semaines à{" "}
                <span className="prixCarte">19€</span>{" "}
              </p>
            </div>
            <div>
              <p>Frais d'adhésion de 25€</p>

              <p>Plateforme tonicité et minceur</p>
            </div>
          </div>

          <div className="cardTarifs col-lg-4   ">
            <div className="typeAbonnement">
              <p>Classic</p>
            </div>
            <div className="prixAbonnement pt-4">
              <p className="fw-bold">
                <span className="prix"> 40.99€ </span> /4 semaines*
              </p>
            </div>
            <div>
              <p>
                Les 4 premières semaines à{" "}
                <span className="prixCarte">19€</span>{" "}
              </p>
            </div>
            <div>
              <p>Frais d'adhésion de 25€</p>

              <p>Plateforme tonicité et minceur</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <h2 className="text-center pb-3">
          {" "}
          FAÇONNE TES ENTRAÎNEMENTS SELON TES ENVIES.
        </h2>
        <div className="trait"></div>
        <p className=" text-center pt-4 pb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem porro
          dicta inventore tempora sed quibusdam repellendus dolores veniam
          saepe, ad sunt, id nesciunt corporis laborum? Repudiandae mollitia
          ipsam ullam voluptate. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur laborum consequatur laboriosam odit sunt,
          explicabo fugit. Sequi explicabo vel repudiandae.{" "}
        </p>
        {/* img */}
        <div className="container d-flex justify-content-center">
          <div className="imgGroupe w-75   ">
            <img className="img-fluid " src="/img/groupe.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="pb-5">
        <h2 className="text-center">
          Viens allier sport et plaisir avec la communauté
        </h2>
      </div> */}

      {/* <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          

            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default page;
