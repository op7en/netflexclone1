import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db, signup as firebaseSignup, doc, getDoc } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (name, email, password) => {
    return firebaseSignup(name, email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword
      ? auth.signInWithEmailAndPassword(email, password)
      : null;
  };

  const logout = () => auth.signOut();

  const loadUserData = async (user) => {
    try {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) return userDoc.data();
      return {};
    } catch (err) {
      console.error("Error loading user data:", err);
      return {};
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.exists()
          ? userDoc.data()
          : { name: user.email };
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          name: user.displayName, 
        });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ setCurrentUser, currentUser, signup, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
