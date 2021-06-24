import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'
import style from '../styles/layouts/MainLayout.module.scss'

const MainLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className={style.content_box}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout