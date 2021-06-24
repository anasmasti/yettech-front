import Link from 'next/link'
import style from '../../styles/shared/NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={style.navbar_box}>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand main-title" >
                            <strong> YetTeck </strong>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
