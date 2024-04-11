import { collection, doc, deleteDoc, where, query } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import BooksProps from "../../types/types";
import BookAdder from "../form/BookAdder";

const Books = ({ user }: BooksProps) => {
  const postRef = collection(firestore, "books");
  const queryBooks = query(postRef, where("owner", "==", user?.uid));
  const [books] = useCollection(queryBooks);

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
    <section>
      <BookAdder postRef={postRef} user={user} />
      <ul className="space-y-8">
        <li className="grid grid-cols-3">
          <span className="font-semibold">Author</span>
          <span className="font-semibold">Title</span>
        </li>
        {books?.docs.map((i) => (
          <li className="grid grid-cols-3" key={i.id}>
            <span>{i.data().author}</span>
            <span>{i.data().title}</span>
            <button onClick={() => deleteBook(i.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Books;
