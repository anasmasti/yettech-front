import React from "react";
import NavLink from "./NavLink";
import headerStyle from "../../styles/shared/Header.module.scss";

function NavLinks() {
  let links = [
    {
      id: 1,
      title: "Home",
      href: "/home",
    },
    {
      id: 2,
      title: "About us",
      href: "/about",
    },
    {
      id: 3,
      title: "Our services",
      href: "/services",
    },
    {
      id: 4,
      title: "Our team",
      href: "/team",
    },
    {
      id: 5,
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div>
      <ul className={[headerStyle.navbar_items, " p-3 my-auto "].join(" ")}>
        {links.map((link) => (
          <NavLink key={link.id} title={link.title} href={link.href} />
        ))}
      </ul>
    </div>
  );
}

export default NavLinks;
