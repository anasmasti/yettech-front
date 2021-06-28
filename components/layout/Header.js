import Link from 'next/link'
import headerStyle from '../../styles/shared/Header.module.scss'

const NavBar = () => {
    return (
        <div className={headerStyle.header_box}>
            <nav className="navbar navbar-light bg-transparent d-flex justify-content-between p-4">
                <div >
                    <Link href="/">
                        <a className="navbar-brand main-title" >
                            <strong> YetTeck </strong>
                        </a>
                    </Link>

                </div>
                <ul className={headerStyle.navbar_items}>
                    <li>
                        <Link href="/about">
                            <a className={[headerStyle.hover_line].join(' ')} >
                                <strong> About us </strong>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/our-services">
                            <a className={[headerStyle.hover_line, 'px-3'].join(' ')} >
                                <strong> Our services </strong>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className={[headerStyle.hover_line].join(' ')} >
                                <strong> Contact </strong>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
