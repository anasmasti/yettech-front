import React from "react";
import headerStyle from "../../styles/shared/Header.module.scss";
import Link from "next/link";

function NavLink(props) {
  return (
        <li>
          <Link href={props.href} >
            <a className={[headerStyle.hover_line].join(" ")}>
              <strong> {props.title} </strong>
            </a>
          </Link>
        </li>
  );
}

export default NavLink;
