import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";

const GithubPage = () => {
  const [user, setUser] = useState({});

  const auth = getAuth(app);
  const provider = new GithubAuthProvider();

  const handleGithubLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const githubUser = result.user;
        setUser(githubUser);
        console.log(githubUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-primary my-6">
        This is Github Pages
      </h2>

      <h3 className="text-2xl font-bold text-primary my-6">
        User Name: {user?.displayName}
      </h3>

      <div>
        {user ? (
          <button onClick={handleSignOut} className="btn btn-secondary ml-4">
            Git Logout
          </button>
        ) : (
          <button onClick={handleGithubLogin} className="btn btn-primary">
            Github Login
          </button>
        )}
      </div>
    </div>
  );
};

export default GithubPage;
