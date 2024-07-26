"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width={55} height={55} />
    </Link>
  );
};

export default Logo;