import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import style from '../styles/layouts/MainLayout.module.scss'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={[style.content_box].join(' ')}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout