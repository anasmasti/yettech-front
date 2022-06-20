import NavLinks from "../header/NavLinks.jsx";
import Logo from "../shared/Logo.jsx";

const Header = () => {
  return (
    <header className="px-5 py-2">
      <nav className="navbar d-flex justify-content-between">
        <div>
          <Logo />
        </div>
        <div>
          <NavLinks />
        </div>
      </nav>
    </header>
  );
};

export default Header;
