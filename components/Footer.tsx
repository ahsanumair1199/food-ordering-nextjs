import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:24 p-4 lg:px-20 xl:px-40 text-red-500 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <p>&copy; ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
