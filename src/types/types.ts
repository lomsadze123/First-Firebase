import { User } from "firebase/auth";
import { CollectionReference, DocumentData } from "firebase/firestore";

export default interface BooksProps {
  user: User | null | undefined;
}

export interface BookAdderProps {
  postRef: CollectionReference<DocumentData>;
  user: User | null | undefined;
}
