import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}