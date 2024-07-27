import Link from "next/link";
import React from "react";
import {
  RiPaypalFill,
  RiSnapchatFill,
  RiInstagramFill,
  RiFacebookFill,
  RiSkypeFill,
} from "react-icons/ri";

const icons = [
  {
    path: "/",
    name: <RiPaypalFill />,
  },
  {
    path: "/",
    name: <RiSnapchatFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiSkypeFill />,
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
