import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Front-end dünyasında kendini geliştirmeye çalışan, yeni ve güncel
            teknolojileri takip eden bir geliştiriciyim. Kendimi güncel tutup
            yeni teknolojileri öğrenmek için her zaman çaba içindeyim. Yazılımın
            benim için sadece bir iş değil, üretim ve eğlence alanı olması için
            gayret içindeyim.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior Web Developer & Dijital Pazarlama</h3>
              <div className="subheading mb-3">Depar Akademi</div>
              <p>
                Çalıştığım süre boyunca sadece yazılım kategorisinde olmaksızın
                birçok bilgi öğrendim. Dijital pazarlama(SEO, SEM, İçerik
                yönetimi), teklif hazırlama, yazılım metodolojileri ve
                uygulanması gibi konularda ekiple beraber çalışmalar yürüttüm.
                Aynı zamanda besyirmi.com sitesini baştan sona HTML, CSS ve
                Bootstrap kullanarak koda döktüm. Bir hukuk firmasına yaptığımız
                projede API'ların yazılmasında görev aldım.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Eylül 2019 - Nisan 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Staj (Backend Developer) </h3>
              <div className="subheading mb-3">UBIT</div>
              <p>
                Staj süresince verilen ödevleri yerine getirdim. Ödevler
                arasında HTML, CSS gibi ön uç geliştirmenin temellerini
                oluşturan ödevler yaptım. Sürecin devamında PHP dilini
                kullanarak geliştirmeler yaptım. Framework kültürünü
                kavrayabilmek adına Laravel ile bir giriş yaptım. Laravel
                kullanarak MySQL veritabanı yönetim sistemi üzerinde çalıştım.
                Veriler nasıl çekilir, çekilen veriler nasıl sunulur gibi
                süreçleri deneyimleyerek sektöre bir başlangıç yaptım.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Mart 2019 - Haziran 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Kodluyoruz</h3>
              <div className="subheading mb-3">React Bootcamp</div>
              <div>
                Kodluyoruz.org tarafından yaklaşık 2 aylık uygulamalı bir eğitim
                aldım. ReactJS'in tüm detaylarını projelerle pekiştirdim. Redux
                ile state management gibi karışık konuların sektörde nasıl
                uygulandığını öğrendim. Aynı zamanda deploy ve array
                methodlarıyla ilgili birçok pratik yapma fırsatı buldum.{' '}
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Nisan 2020 - Mayıs 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">İstanbul Şehir Üniversitesi</h3>
              <div className="subheading mb-3">
                Bilgisayar Mühendisliği(Ingilizce)
              </div>
              <p>
                Okulda gösterilen küçük projeler yaptığım, structure'ı anlatılan
                dil ve Frameworkler: Python, Django, Java
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
