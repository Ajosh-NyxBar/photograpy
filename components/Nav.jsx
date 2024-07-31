import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const navLink = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/pricing", title: "Pricing" },
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
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
