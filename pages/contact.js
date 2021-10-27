import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <div className="container">
      <div class="row g-5">
        <div class="col-md-12">
          <h1>İletişim</h1>
          <p>Bana ulaşabileceğiniz sosyal medya adresleri:</p>
          <ul class="icon-list">
            <li>
              <a
                href="https://www.linkedin.com/in/cenkdincturk"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/cenkdincturk" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="mailto:dincturkcenk@gmail.com" target="_blank">
                Mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
