"use client";
import { signOut } from "next-auth/react";
import styles from "../../styles/form.module.css";
import Button from "react-bootstrap/Button";
const ButtonOut = () => {
  return (
    <>
      <Button
        variant="warning"
        onClick={() =>
          signOut({
            callbackUrl: `${window.location.origin}`,
          })
        }
      >
        Se déconnecter
      </Button>
    </>
  );
};

export default ButtonOut;


