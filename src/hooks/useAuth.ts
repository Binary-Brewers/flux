import { auth } from "../firebase/clientApp"; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const useAuth = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      // Handle redirection or UI update after successful login
    } catch (error) {
      console.error(error);
      // Handle errors here, such as displaying a notification
    }
  };

  return { signInWithGoogle };
};
