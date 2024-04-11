import { auth, googleProvider } from "../firebase/firebase"; // Update the path accordingly
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle} className="bg-black text-white p-2">
        Continue with Google
      </button>
    </div>
  );
};

export default SignIn;
