import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import style from '../styles/layouts/MainLayout.module.scss'

const MainLayout = ({ children }) => {
    return (
        <div className={style.app_container} >
            <Header />
            <div className={[style.content_box].join(' ')}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout