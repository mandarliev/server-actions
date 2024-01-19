import db from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function Home() {
  const messagesRef = collection(
    db,
    "chats",
    "enpuou14UqyER0R2Ru21",
    "messages"
  );
  const messagesSnapshot = await getDocs(messagesRef);

  return (
    <main>
      {messagesSnapshot.docs.map((doc) => (
        <p>{doc.data().content}</p>
      ))}

      <form className="p-5 border flex">
        <input className="flex-1" placeholder="enter message..." type="text" />
        <button className="">Send Message</button>
      </form>
    </main>
  );
}
