import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useState } from "react";
import auth from './../../Firebase/firebase.config';



const Home = () => {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    // console.log('Google btn login')
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
        // console.log(user)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   Handle SignOut

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
      <h1 className="text-3xl font-bold text-primary my-4">This is Home</h1>

      {user ? (
        <button onClick={handleSignOut} className="btn btn-primary mb-6">
          Sign Out
        </button>
      ) : (
        <button onClick={handleGoogle} className="btn btn-secondary mb-6">
          Google Sign in
        </button>
      )}
      <img src={user?.photoURL} alt="" />
      <h2 className="text-3xl font-bold">User Name: {user?.displayName}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Home;
