import React, { useEffect, useState } from "react";
import NavLinks from "../header/NavLinks.jsx";
import headerStyle from "../../styles/shared/Header.module.scss";
import Logo from "../shared/Logo.jsx";

const Header = () => {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    checkHrefType();
  }, []);

  function checkHrefType() {
    if (typeof window !== "undefined") {
      if (window.location.href != "http://localhost:3000/") {
        setIsHome(true);
        console.log(window.location.href, true);
      }
      if (window.location.href == "http://localhost:3000/") {
        setIsHome(false);
        console.log(false);
      }
    }
  }

  const getHeaderClass = () => {
    if (isHome) {
      return headerStyle.header_box;
    }

    return headerStyle.header_box_;
  };

  return (
    <div className={getHeaderClass("trest")}>
      <nav className="navbar d-flex justify-content-between p-2">
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

// class Header extends React.Component {
//   componentDidMount() {
//     console.log(window.location.href);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Hello world!</h3>
//       </div>
//     );
//   }
// }

export default Header;
