import React from "react";
import Link from 'next/link'

function Logo() {
  return (
    <div>
      <Link href="/">
        <a className="navbar-brand main-title">
          <strong> YetTech </strong>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
