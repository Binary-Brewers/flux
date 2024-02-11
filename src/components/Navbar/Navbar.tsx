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

"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import FluxLogo from "../../../public/flux-no-bg.png";
import Link from "next/link";
import { auth } from "@/firebase/clientApp"; // Adjust the import path according to your project structure
import { User, onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {

  const [user, setUser] = useState<User|null>(null);


  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          {/* Logo and "Flux" text grouped together on the left */}
          <div className="flex items-center flex-shrink-0">
            <Image src={FluxLogo} alt="Flux Logo" width={32} height={32} />
            <Link href="/" passHref className="text-2xl font-semibold whitespace-nowrap dark:text-white pl-2 cursor-pointer">Flux
            </Link>
          </div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* User information and logout button OR "Login" button on the right */}
          <div className="flex-shrink-0">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-800 dark:text-white">Logged in as: {user.displayName || user.email}</span>
                <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-700">Log out</button>
              </div>
            ) : (
              <Link href="/Login" passHref>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
