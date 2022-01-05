import Layout from '../Layouts/Default'
import '../css/index.css'
import '../assets/boxicons-2.0.7/css/boxicons.min.css'

function MyApp({ Component, pageProps }) {
  return (
    

        <Layout>
          <Component {...pageProps} />

        </Layout>
    )
}

export default MyApp
