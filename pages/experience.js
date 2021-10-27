import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import truckMarket from "../styles/truckmarket-logo.svg";
import evdeSaglik from "../styles/kizilay-saglik-logo.svg";
import enterprise from "../styles/enterprise.svg";
import ifm from "../styles/ifm.svg";

import Layout from "../components/Layout";

export default function Experience() {
  return (
    <div className="container">
      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">Enterprise</h3>
              <p class="card-text mb-auto">
                Frontend tarafında destek oluyorum.
              </p>
            </div>
            <div class="col-auto d-none d-lg-block p-3">
              <Image
                src={enterprise}
                alt="Enterprise"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">IFM</h3>
              <p class="card-text mb-auto">
                Sayfaların UI tarafı pixel perfect şekilde kodlandı. (Yayında
                Değil)
              </p>
            </div>
            <div class="col-auto d-none d-lg-block p-3">
              <Image src={ifm} alt="TruckMarket" width={150} height={150} />
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">TruckMarket</h3>
              <p class="card-text mb-auto">
                Sayfaların UI tarafı pixel perfect şekilde kodlandı.{" "}
              </p>
              <a href="http://www.truckmarket.com.tr/" class="stretched-link">
                Siteyi Gör
              </a>
            </div>

            <div class="col-auto d-none d-lg-block p-3">
              <Image
                src={truckMarket}
                alt="TruckMarket"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">Kızılay Evde Sağlık</h3>
              <p class="card-text mb-auto">
                Sayfaların UI tarafı pixel perfect şekilde kodlandı.{" "}
              </p>
            </div>

            <div class="col-auto d-none d-lg-block p-3">
              <Image
                src={evdeSaglik}
                alt="Kızılay Evde Sağlık"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Experience.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
