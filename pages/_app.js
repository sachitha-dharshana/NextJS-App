// add bootstrap css 
import { useLayoutEffect, useState } from 'react'
import '../styles/customTheme.scss'
import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/shared/header/header'
import Footer from '../components/shared/footer/footer'

function MyApp({ Component, pageProps }) {
  const [photos, setPhotos] = useState([]);

  useLayoutEffect(() => {
    fetch('/mocks/items.json')
      .then(response => response.json())
      .then(formatted => setPhotos(formatted))
  }, []);

  return (
    <>
      <Header />
      <div className="menu-padding container">
        <Component data={photos} {...pageProps} />
      </div>
      <Footer />
    </>
  )

}

export default MyApp
