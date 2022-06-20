import React from "react";
import Link from 'next/link'

function Logo() {
  return (
    <div>
      <Link href="/">
        <a className={["navbar-brand logo"].join(' ')}>
          ye<strong>TT</strong>ech
        </a>
      </Link>
    </div>
  );
}

export default Logo;
