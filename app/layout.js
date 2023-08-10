import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Head from "./common/Head";
import Provider from "@/context/Provider";
import ToasterContext from "@/context/ToasterContext";
import Main from "./common/Main";
import Section from "./common/Section";
import Article from "./common/Article";
import Section2 from "./common/Section2";

// const inter = Inter({ subsets: ['latin'] })
// layout fichier principale

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
          integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Provider>
        <body>
          <ToasterContext />
          <Header />
          <Main />
          <Section />
          <Article />
          <Section2 />
          <Footer />
          {children}
        </body>
      </Provider>
    </html>
  );
}
