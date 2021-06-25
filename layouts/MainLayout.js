import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import style from '../styles/layouts/MainLayout.module.scss'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={[style.content_box, 'container'].join(' ')}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout