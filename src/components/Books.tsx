import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  where,
  query,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState } from "react";

const Books = ({ user }: any) => {
  const postRef = collection(firestore, "books");
  const queryBooks = query(postRef, where("owner", "==", user.uid));
  const [books] = useCollection(queryBooks);
  const [book, setBook] = useState({ title: "", author: "" });

  const addBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(postRef, { ...book, owner: user.uid });
      setBook({ title: "", author: "" });
      console.log(book);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (bookId: string) => {
    try {
      const docRef = doc(postRef, bookId);
      await deleteDoc(docRef);
      console.log("book deleted " + bookId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <form onSubmit={addBook}>
        <input
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          className="border-2 outline-0"
          type="text"
          placeholder="title"
        />
        <input
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          className="border-2 outline-0 ml-4"
          type="text"
          placeholder="author"
        />
        <button type="submit">Submit</button>
      </form>
      <ul className="space-y-8">
        {books?.docs.map((i) => (
          <li className="grid grid-cols-3" key={i.id}>
            <span>{i.data().author}</span>
            <span>{i.data().title}</span>
            <button onClick={() => deleteBook(i.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Books;
