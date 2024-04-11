import { auth } from "../firebase/firebase";

const SignOut = () => {
  const singOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={singOut} className="text-3xl bg-slate-700 p-2">
      SignOut
    </button>
  );
};

export default SignOut;
