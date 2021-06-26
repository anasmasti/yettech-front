import Link from 'next/link'
import style from '../../styles/shared/NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={style.navbar_box}>
            <nav className="navbar navbar-light bg-transparent d-flex justify-content-between p-4">
                <div >
                    <Link href="/">
                        <a className="navbar-brand main-title" >
                            <strong> YetTeck </strong>
                        </a>
                    </Link>

                </div>
                <div>
                    <Link href="/about">
                        <a className="navbar-brand" >
                            <strong> About us </strong>
                        </a>
                    </Link>
                    <Link href="/our-services">
                        <a className="navbar-brand" >
                            <strong> Our services </strong>
                        </a>
                    </Link>
                    <Link href="/our-team">
                        <a className="navbar-brand" >
                            <strong> Our Team </strong>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="navbar-brand" >
                            <strong> Contact </strong>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
