import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { BookAdderProps } from "../../types/types";

const BookAdder = ({ postRef, user }: BookAdderProps) => {
  const [book, setBook] = useState({ title: "", author: "" });

  const addBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(postRef, { ...book, owner: user?.uid });
      setBook({ title: "", author: "" });
      console.log(book);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={addBook} className="my-8">
      <input
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        className="border-2 outline-0 p-1"
        type="text"
        value={book.title}
        placeholder="title"
      />
      <input
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        className="border-2 outline-0 mx-4 p-1"
        type="text"
        value={book.author}
        placeholder="author"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookAdder;
