import { useState } from "react";
import { auth, googleProvider } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmailAndPasswordHandler = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signUpWithEmailAndPasswordHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-8">
      <div>
        <input
          className="border-2 outline-0 p-1"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 outline-0 p-1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={signInWithEmailAndPasswordHandler}
          className="bg-black text-white p-2"
        >
          Sign In
        </button>
        <button
          onClick={signUpWithEmailAndPasswordHandler}
          className="bg-black text-white p-2"
        >
          Sign Up
        </button>
        <button onClick={signInWithGoogle} className="bg-black text-white p-2">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
