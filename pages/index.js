import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import profile from "../styles/profile-img.jpg";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="row featurette">
        <div className="col-md-6 align-self-center">
          <h2 className="featurette-heading">
            Cenk Dinçtürk <span className="text-muted">Frontend Developer</span>
          </h2>
          <p className="lead">
            Front-end dünyasında kendini geliştirmeye çalışan, yeni ve güncel
            teknolojileri takip eden bir geliştiriciyim. Kendimi güncel tutup
            yeni teknolojileri öğrenmek için her zaman çaba içindeyim. Yazılım
            benim için sadece bir iş değil, üretim ve eğlence alanıdır.{" "}
          </p>
        </div>
        <div className="col-md-6">
          <Image
            src={profile}
            alt="Cenk Dinçtürk"
            width={500}
            height={500}
            className=" rounded"
          />
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
