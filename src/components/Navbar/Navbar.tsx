// // "use client";
// // import React from 'react';
// // import Image from "next/image";
// // import FluxLogo from "../../../public/flux-no-bg.png";
// // import Link from "next/link";

// // const Navbar = () => {
// //   return (
// //     <div>
// //       <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
// //         <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
// //           {/* Logo on the left */}
// //           <div className="flex-shrink-0">
// //             <Image src={FluxLogo} alt="Flux Logo" width={32} height={32} />
// //           </div>

// //           {/* "Flux" text centered */}
// //           <div className="flex-grow text-center">
// //             <Link href="/" passHref className="text-2xl font-semibold whitespace-nowrap dark:text-white pl-7 cursor-pointer">Flux
// //             </Link>
// //           </div>

// //           {/* "Login" button on the right */}
// //           <div className="flex-shrink-0">
// //             <Link href="/Login" passHref>
// //               <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;


// "use client";
// import React, { useEffect, useState } from 'react';
// import Image from "next/image";
// import FluxLogo from "../../../public/flux-no-bg.png";
// import Link from "next/link";
// import { auth } from "@/firebase/clientApp"; // Adjust the import path according to your project structure
// import { onAuthStateChanged, signOut } from "firebase/auth";

// const Navbar = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Listen for auth state changes
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in
//         setUser(user);
//       } else {
//         // User is signed out
//         setUser(null);
//       }
//     });
//     return () => unsubscribe(); // Cleanup subscription on unmount
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth); // Sign out the user
//       console.log('User signed out');
//     } catch (error) {
//       console.error('Error signing out: ', error);
//     }
//   };

//   return (
//     <div>
//       <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
//           {/* Logo on the left */}
//           <div className="flex-shrink-0">
//             <Image src={FluxLogo} alt="Flux Logo" width={32} height={32} />
//           </div>

//           {/* "Flux" text centered */}
//           <div className="flex-grow text-center">
//             <Link href="/" passHref className="text-2xl font-semibold whitespace-nowrap dark:text-white pl-7 cursor-pointer">Flux</Link>
//           </div>

//           {/* User information and logout button OR "Login" button on the right */}
//           <div className="flex-shrink-0">
//             {user ? (
//               <div className="flex items-center space-x-4">
//                 <span className="text-gray-800 dark:text-white">Logged in as: {user.displayName || user.email}</span>
//                 <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-700">Log out</button>
//               </div>
//             ) : (
//               <Link href="/Login" passHref>
//                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// "use client";
// import React, { useEffect, useState } from 'react';
// import Image from "next/image";
// import FluxLogo from "../../../public/flux-no-bg.png";
// import Link from "next/link";
// import { auth } from "@/firebase/clientApp"; // Adjust the import path according to your project structure
// import { User, onAuthStateChanged, signOut } from "firebase/auth";

// const Navbar = () => {

//   const [user, setUser] = useState<User|null>(null);


//   useEffect(() => {
//     // Listen for auth state changes
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in
//         setUser(user);
//       } else {
//         // User is signed out
//         setUser(null);
//       }
//     });
//     return () => unsubscribe(); // Cleanup subscription on unmount
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth); // Sign out the user
//       console.log('User signed out');
//     } catch (error) {
//       console.error('Error signing out: ', error);
//     }
//   };

//   return (
//     <div>
//       <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
//           {/* Logo and "Flux" text grouped together on the left */}
//           <div className="flex items-center flex-shrink-0">
//             <Image src={FluxLogo} alt="Flux Logo" width={32} height={32} />
//             <Link href="/" passHref className="text-2xl font-semibold whitespace-nowrap dark:text-white pl-2 cursor-pointer">Flux
//             </Link>
//           </div>

//           {/* Spacer */}
//           <div className="flex-grow"></div>

//           {/* User information and logout button OR "Login" button on the right */}
//           <div className="flex-shrink-0">
//             {user ? (
//               <div className="flex items-center space-x-4">
//                 <span className="text-gray-800 dark:text-white">Logged in as: {user.displayName || user.email}</span>
//                 <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-700">Log out</button>
//               </div>
//             ) : (
//               <Link href="/Login" passHref>
//                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import { auth } from "@/firebase/clientApp"; // Adjust the import path according to your project structure
// import { User, onAuthStateChanged, signOut } from "firebase/auth";

// const Navbar = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isMenuVisible, setIsMenuVisible] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       console.log('User signed out');
//     } catch (error) {
//       console.error('Error signing out: ', error);
//     }
//   };

//   const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

//   return (
//     <div>
//       <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
//           <div className="flex items-center flex-shrink-0">
//             <Image src={FluxLogo} alt="Flux Logo" width={32} height={32} />
//             <Link href="/" passHref className="text-2xl font-semibold whitespace-nowrap dark:text-white pl-2 cursor-pointer">Flux</Link>
//           </div>

//           <button onClick={toggleMenu} className="md:hidden">
//             {/* Hamburger icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>

//           {isMenuVisible && (
//             <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-md rounded-md">
//               {user ? (
//                 <div className="flex flex-col">
//                   <span className="p-2 text-gray-800 dark:text-white">Logged in as: {user.displayName || user.email}</span>
//                   <Link href="/account-settings" passHref>
//                     <a className="p-2 text-blue-700 hover:bg-blue-100">Account Settings</a>
//                   </Link>
//                   <button onClick={handleLogout} className="p-2 text-red-500 hover:bg-red-100">Log out</button>
//                   {/* Language selection, assuming a function to handle language change */}
//                   <button className="p-2 text-gray-800 hover:bg-gray-100">English</button>
//                   <button className="p-2 text-gray-800 hover:bg-gray-100">Español</button>
//                 </div>
//               ) : (
//                 <Link href="/Login" passHref>
//                   <a className="p-2 text-blue-700 hover:bg-blue-100">Login</a>
//                 </Link>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import { auth } from "@/firebase/clientApp"; // Adjust the import path according to your project structure
// import { User, onAuthStateChanged, signOut } from "firebase/auth";
// import FluxLogo from "../../../public/flux-no-bg.png";

// const Navbar = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isMenuVisible, setIsMenuVisible] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       console.log('User signed out');
//     } catch (error) {
//       console.error('Error signing out: ', error);
//     }
//   };

//   const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

//   return (
//     <div>
//       <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
//           <div className="flex items-center flex-shrink-0">
//             <Image src={FluxLogo} alt="Flux Logo" width={32} height={32} />
//             <Link href="/" passHref className="text-2xl font-semibold whitespace-nowrap dark:text-white pl-2 cursor-pointer">Flux
//             </Link>
//           </div>

//           <div className="md:hidden">
//             <button onClick={toggleMenu}>
//               {/* Correct SVG for Hamburger icon */}
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>

//           {/* Menu content */}
//           {isMenuVisible && (
//             <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800">
//               {user ? (
//                 <div className="flex flex-col">
//                   <span className="px-4 py-2 text-gray-800 dark:text-white">Logged in as: {user.displayName || user.email}</span>
//                   <Link href="/account-settings" passHref className="px-4 py-2 text-blue-700 hover:bg-blue-100 dark:hover:bg-gray-700">Account Settings
//                   </Link>
//                   <button onClick={handleLogout} className="px-4 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-gray-700">Log out</button>
//                   <button className="px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">English</button>
//                   <button className="px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">Español</button>
//                 </div>
//               ) : (
//                 <Link href="/login" passHref className="px-4 py-2 text-blue-700 hover:bg-blue-100 dark:hover:bg-gray-700">Login
//                 </Link>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import { auth } from "@/firebase/clientApp"; // Adjust the import path according to your project structure
// import { User, onAuthStateChanged, signOut } from "firebase/auth";
// import FluxLogo from "../../../public/flux-no-bg.png";

// const Navbar = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isMenuVisible, setIsMenuVisible] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       console.log('User signed out');
//     } catch (error) {
//       console.error('Error signing out: ', error);
//     }
//   };

//   const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

//   return (
//     <div>
//       <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
//           <div className="flex items-center flex-shrink-0">
//             <Image src={FluxLogo} alt="Flux Logo" width={32} height={32} />
//             <Link href="/" passHref className="text-2xl font-semibold whitespace-nowrap dark:text-white pl-2 cursor-pointer">Flux
//             </Link>
//           </div>

//           {/* Conditionally render the hamburger menu for logged-in users */}
//           {user ? (
//             <button onClick={toggleMenu} className="md:hidden">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           ) : (
//             <Link href="/Login" passHref>
//               <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                 Login
//               </button>
//             </Link>
//           )}

//           {/* Menu content for logged-in users */}
//           {isMenuVisible && user && (
//             <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800">
//               <div className="flex flex-col">
//                 <span className="px-4 py-2 text-gray-800 dark:text-white">{user.displayName || user.email}</span>
//                 <Link href="/account-settings" passHref className="px-4 py-2 text-gray-800 dark:text-white">Account Settings
//                 </Link>
//                 <button onClick={handleLogout} className="px-4 py-2 text-gray-800 dark:text-white">Log out</button>
//                 <button className="px-4 py-2 text-gray-800 dark:text-white">English</button>
//                 {/* <button className="px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">Español</button> */}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/firebase/clientApp"; // Adjust the import path according to your project structure
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import FluxLogo from "../../../public/flux-no-bg.png";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <Image src={FluxLogo} alt="Flux Logo" width={32} height={32} />
            <Link href="/" passHref className="text-2xl font-semibold whitespace-nowrap dark:text-white pl-2 cursor-pointer">Flux
            </Link>
          </div>

          {/* Hamburger menu button always visible */}
          <button onClick={toggleMenu} className="">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Menu content */}
          {isMenuVisible && (
            <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800">
              {user ? (
                <div className="flex flex-col">
                  <span className="px-4 py-2 text-gray-800 dark:text-white">Logged in as: {user.displayName || user.email}</span>
                  <Link href="/account-settings" passHref className="px-4 py-2 text-blue-700 hover:bg-blue-100 dark:hover:bg-gray-700">Account Settings
                  </Link>
                  <button onClick={handleLogout} className="px-4 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-gray-700">Log out</button>
                  <button className="px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">Translating to: English</button>
                  {/* <button className="px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">Español</button> */}
                </div>
              ) : (
                <Link href="/login" passHref className="px-4 py-2 text-blue-700 hover:bg-blue-100 dark:hover:bg-gray-700">Login
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
