import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainLayout from '../layouts/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
