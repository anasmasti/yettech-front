import NavLinks from "../header/NavLinks";
import headerStyle from "../../styles/shared/Header.module.scss";
import Logo from '../shared/Logo'

const Header = () => {
  return (
    <div className={[headerStyle.header_box, "bg-danger"].join(' ')}>
      <nav className="navbar d-flex justify-content-between p-4">
        <div>
          <Logo />
        </div>
        <div>
          <NavLinks />
        </div>
      </nav>
    </div>
  );
};

export default Header;
