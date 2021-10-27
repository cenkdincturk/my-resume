import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cenk Dinçtürk Portfolio</title>
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C4E03AQFprx1O7zFT4g/profile-displayphoto-shrink_200_200/0/1535713961948?e=1640822400&v=beta&t=rTNbVp03rPPwKEdpOcqSKcgLYDmVAd1PqMAjuzUujGg"
        />
        <meta property="og:title" content="Cenk Dinçtürk Portfolio" />
        <meta property="og:description" content="Cenk Dinçtürk Portfolio" />
        <meta
          name="Cenk Dinçtürk"
          content="Cenk Dinçtürk Frontend Developer"
          key="desc"
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main className="mt-5 mb-5">{children}</main>
      <Footer />
    </>
  );
}
