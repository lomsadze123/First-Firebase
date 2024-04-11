import SignOut from "../signout/SignOut";
import SignIn from "../signin/SignIn";
import Books from "../books/Books";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const Main = () => {
  const [user] = useAuthState(auth);

  return (
    <main className="text-3xl mt-8 pl-4">
      <div className="flex items-center gap-10">
        {user ? <h1>Hello {user.displayName}</h1> : <SignIn />}
        {auth.currentUser && <SignOut />}
      </div>
      {auth.currentUser && <Books user={user} />}
    </main>
  );
};

export default Main;
