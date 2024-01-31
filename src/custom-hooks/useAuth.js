import { useState } from "react";
import { auth } from "../firebase.config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });
  // console.log("currentuser->", currentUser.photoURL);
  return {
    currentUser,
  };
};

export default useAuth;
