import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLink = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/services", title: "Services" },
  { path: "/portfolio", title: "Portfolio" },
  { path: "/contact", title: "Contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={containerStyles}>
      {navLink.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles} ${path === link.path ? underlineStyles : ""}`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;