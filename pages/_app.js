import Head from 'next/head' 
import Header from '../components/Header'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Home</title>
          <meta name="description" content="This is home description" />
          <link rel="icon"  href="/favicon.ico" />
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
