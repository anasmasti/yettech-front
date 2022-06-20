import React from "react";
import Link from 'next/link'

function Logo() {
  return (
    <div>
      <Link href="/">
        <a className={["navbar-brand logo"].join(' ')}>
          Yettech
        </a>
      </Link>
    </div>
  );
}

export default Logo;
