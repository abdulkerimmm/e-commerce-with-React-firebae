import { db } from "../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const UseGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, collectionName);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      //=======firebase firestore realtime data update=====
      await onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      });
    };

    getData();
  }, [collection]);

  return { data, loading };
};

export default UseGetData;
