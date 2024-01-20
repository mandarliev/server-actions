import db from "@/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import adminDb from "@/firebaseAdmin";

export default async function Home() {
  const messagesRef = collection(
    db,
    "chats",
    "enpuou14UqyER0R2Ru21",
    "messages"
  );
  const messagesSnapshot = await getDocs(messagesRef);

  const addMessage = async (formData: FormData) => {
    'use server';

    const message = formData.get('message');
    
    const newMessageRef = await adminDb.collection("chats/enpuou14UqyER0R2Ru21/messages").add({
      content: message,
    })
    // const newMessageRef = await addDoc(messagesRef, {
    //   content: message
    // })

    // console.log("NEW MESSAGE ADDED >>", newMessageRef.id);

  }

  return (
    <main>
      {messagesSnapshot.docs.map((doc) => (
        <p>{doc.data().content}</p>
      ))}

      <form action={addMessage} className="p-5 border flex">
        <input name="message" className="flex-1" placeholder="enter message..." type="text" />
        <button className="">Send Message</button>
      </form>
    </main>
  );
}
