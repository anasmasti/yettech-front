import React, { useEffect } from "react";
import NavLinks from "../header/NavLinks";
import headerStyle from "../../styles/shared/Header.module.scss";
import Logo from "../shared/Logo";

const Header = () => {
  useEffect(() => {}, []);

  const getHeaderClass = (test) => {
    if (typeof window !== "undefined") {
      if (window.location.href != "http://localhost:3000/") {
        console.log(window.location.href);
        return headerStyle.header_box;
      }
    }
    return headerStyle.header_box_;
  };

  return (
    <div className={getHeaderClass("trest")}>
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
