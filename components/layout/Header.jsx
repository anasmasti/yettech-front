import NavLinks from "../header/NavLinks.jsx";
import Logo from "../shared/Logo.jsx";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar d-flex justify-content-between">
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
