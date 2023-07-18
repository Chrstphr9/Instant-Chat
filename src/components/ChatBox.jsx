import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
    const [messages, setMassages] = useState([]);  

  useEffect(() => {
    const q = query(
        collection(db, "messgaes")
        );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMassages(messages);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="pb-44 pt-28 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
