import { useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  return (
    <main className="min-h-screen bg-blue-100 w-full space-y-6 py-16 px-8">
      <section>
        <label className="block w-full max-w-2xl mx-auto">
          <p>Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full px-2 py-1"
          />
        </label>
        <label className="block w-full max-w-2xl mx-auto">
          <p>Title</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full px-2 py-1"
          />
        </label>
        <label className="block w-full max-w-2xl mx-auto">
          <p>Message</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-24 px-2 py-1"
          />
        </label>
      </section>
      <Card name={name} title={title} message={message} />
    </main>
  );
}
