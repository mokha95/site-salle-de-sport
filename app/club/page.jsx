import React from "react";

const MonClub = () => {
  return (
    <div className="container">
      <h1 className=" blocClub pt-2 text-center">
        Sculptez Votre Succès : Équipements de Fitness Haut de Gamme
      </h1>
      <h2 className="text-center">Révolutionnez Votre Entraînement </h2>
      <div className="container">
        <div className="row text-center pt-4">
          <div className="">
            <img
              className="img-fluid w-50 Salle1"
              src="img/salle-grande.jpg"
              alt="installation salle de sport"
            />
          </div>
        </div>

        <div className="texteClub pt-5 ">
          <h3 className="text-center">DES ESPACES UNIQUES</h3>
          <p className=" text-justify lh-2   ">
            Rappelez-vous, chaque petit pas compte. Chaque goutte de sueur est
            une victoire. Chaque jour où vous vous poussez un peu plus loin,
            vous créez une base solide pour un avenir plus sain et plus
            épanouissant. Alors, êtes-vous prêt à vous engager dans ce voyage
            excitant ? Relevez le défi, repoussez les limites et découvrez le
            pouvoir qui sommeille en vous. Rejoignez-nous dans notre salle de
            sport, où les rêves deviennent des réalités et où la persévérance
            construit des destins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonClub;
