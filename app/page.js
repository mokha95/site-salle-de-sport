import Link from "next/link";
import styles from "./page.module.css";
import ButtonOut from "./components/buttonOut";
import Main from "./common/Main";
import Section from "./common/Section";
import Article from "./common/Article";
import Section2 from "./common/Section2";

export default function Home() {
  return (
    <>
      <Main />
      <Section />
      <Article />
      <Section2 />
    </>
  );
}
