"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/form.module.css";
import { toast } from "react-hot-toast";

const RegisterPage = () => {
  // on utilise un router
  const router = useRouter();

  const [data, setData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    phone: "",
  });

  const registerUser = async () => {
    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // stringify convertit du javascript en json
      body: JSON.stringify({ data }),
    })
      .then(() => toast.success("Membre enregistré"))
      .catch(() => toast.error("Erreur d'enregistrement"));
    // si l utilisateur a bien été enregistré on passe à la page login
    router.push("/login");
  };

  // quand on soumet les donnees on apelle fonction registerUser qui va communiquer avec l'api qu on a construit dans app.api
  return (
    <div className={styles.container_formul}>
      <h1 className={` text-center ${styles.formInscription}`}>S'inscrire</h1>

      {/*formulaire*/}
      <form
        className={styles.main}
        onSubmit={(e) => {
          e.preventDefault();
          registerUser();
        }}
      >
        <div className={styles.inputGroup}>
          <label htmlFor="prenom" className="form-label">
            Prenom*
          </label>
          <input
            type="text"
            placeholder="Votre Prénom"
            id="prenom"
            className={`  ${styles.inputField}`}
            onChange={(e) => {
              setData({ ...data, firstname: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="nom" className="form-label">
            Nom*
          </label>
          <input
            type="text"
            placeholder="Votre Nom"
            id="nom"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, lastname: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="prenom" className="form-label">
            Email*
          </label>
          <input
            type="email"
            placeholder="Votre Email"
            id="email"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, email: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="telephone" className="form-label">
            Téléphone portable*
          </label>
          <input
            type="text"
            placeholder="Votre numéro"
            id="phone"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, phone: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="mot de passe" className="form-label">
            Mot de Passe*
          </label>
          <input
            type="text"
            placeholder="Votre Mot de passe"
            id="mot de passe"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, password: e.currentTarget.value });
            }}
            required="required"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className="form-label"></label>
          <input
            type="submit"
            name="Enregister"
            className={styles.submitButton}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
