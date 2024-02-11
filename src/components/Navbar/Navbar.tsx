"use client";
import React from 'react';
import Image from "next/image";
import FluxLogo from "../../../public/flux-no-bg.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Image src={FluxLogo} alt="Flux Logo" width={32} height={32} />
          </div>

          {/* "Flux" text centered */}
          <div className="flex-grow text-center">
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white pl-6">Flux</span>
          </div>

          {/* "Login" button on the right, wrapped with Link for navigation */}
          <div className="flex-shrink-0">
            <Link href="/Login" passHref>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
