import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const router = useRouter();
  const create = async () => {
    const res = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({ name, title, message, recipient }),
    });
    if (res.status >= 300) {
      alert("Error: " + (await res.json()));
      return;
    }
    const { id } = await res.json();
    router.push(`/card/${id}`);
    setName("");
    setTitle("");
    setMessage("");
  };
  return (
    <main className="min-h-screen bg-blue-100 w-full py-16 px-8">
      <section className="max-w-2xl mx-auto space-y-6">
        <label className="block">
          <p>Your Name</p>
          <input
            placeholder="Santa Claus"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full px-2 py-1"
          />
        </label>
        <label className="block">
          <p>Recipient's Name</p>
          <input
            placeholder="Rudolph"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            type="text"
            className="w-full px-2 py-1"
          />
        </label>
        <label className="block">
          <p>Title</p>
          <input
            placeholder="hacky holidays"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full px-2 py-1"
          />
        </label>
        <label className="block">
          <p>Message</p>
          <textarea
            placeholder="Hacky Holidays, Rudolph!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-24 px-2 py-1"
          />
        </label>
        <button
          className="w-full px-2 py-1 hover:bg-blue-600 bg-blue-500 text-white font-medium"
          onClick={() => create()}
        >
          Create
        </button>
      </section>
      <Card name={name} title={title} message={message} />
    </main>
  );
}
