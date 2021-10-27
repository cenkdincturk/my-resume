import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function About() {
  return (
    <div>
      <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Hakkımda</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Ben Cenk Dinçtürk. Yaklaşık 2 yıllık front-end çalışma deneyimine sahibim. Bugüne kadar 3 firmada çalıştım. İlk iş tecrübem Adcropper adlı bir firmadaydı. Burada haftalık olarak firmaya gelen reklamları Pure CSS,Pure JS ve HTML kullanarak Single Page Application'lara dönüştürdüm. İkinci iş deneyimim Nuevo Softwarehouse adlı firmadaydı. Burada kullandığım teknolojiler: React, Javascript, Bootstrap, Gulp, Webpack, HTML, CSS, SASS. Şu anda Nexum Boğaziçi şirketinde Frontend Developer olarak çalışmaktayım. Değişen front-end dünyasında her daim güncel kalmaya çalışarak, kendimi geliştirmek ve bir basamak ileriye götürebilmek adına çalışmalarım devam ediyor. </p>

    </div>
  </div>

    </div>

  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}