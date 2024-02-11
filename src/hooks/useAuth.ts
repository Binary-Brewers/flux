"use client";
import { auth } from "../firebase/clientApp"; // Adjust the path according to your project structure
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // The sign-in was successful. You can access the signed-in user via result.user.
    // Firebase automatically handles the session, and the user is now either logged in or signed up.
    console.log("User signed in: ", result.user);
    // Here, you can redirect the user or perform other actions as needed.
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    // Handle errors here, such as displaying an error message to the user.
  }
};
