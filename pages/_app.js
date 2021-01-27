import Home from '../components/home/index';
import Header from '../components/common/header/header';
import '../styles/globals.scss'
import '../public/glider/glider.min.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header></Header>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
