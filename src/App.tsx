import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";
import { auth } from "./firebase/firebase";
import SignOut from "./components/SignOut";
import Books from "./components/Books";

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="text-3xl">
      {user ? "Hello" : <SignIn />}
      {auth.currentUser && <SignOut />}
      {auth.currentUser && <Books user={user} />}
    </div>
  );
};

export default App;
