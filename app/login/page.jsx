"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import styles from "../../styles/form.module.css";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }
      if (callback?.ok) {
        toast.success("vous êtes connecté");
      }
    });
    router.push("/dashboard");
  };

  return (
    <div className={styles.container_formul}>
      <h1 className={`pt-5 text-center ${styles.formInscription}`}>
        S&apos;enregistrer
      </h1>
      {/*formulaire*/}
      <form
        className={styles.main}
        onSubmit={(e) => {
          e.preventDefault();
          loginUser();
        }}
      >
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Votre Email"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, email: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Votre Mot de passe"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, password: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="submit"
            name="Se connecter"
            className={styles.submitButton}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
