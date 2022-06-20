import '../styles/globals.css'
import Layout from '../Components/Layout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-modal-video/css/modal-video.css"
import "react-modal-video/css/modal-video.min.css"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )

}

export default MyApp
