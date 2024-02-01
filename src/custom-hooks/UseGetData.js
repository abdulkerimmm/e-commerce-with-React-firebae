import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const UseGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = collection(db, collectionName);

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, [collectionName]); // Include only collectionName in the dependency array

  return { data, loading };
};

export default UseGetData;
