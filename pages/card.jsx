import Head from "next/head";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Happy Holidays!!</title>
        <meta name="description" content="A Next.js + TailwindCSS starter" />
      </Head>
      <main className="min-h-screen bg-blue-100">
        <Card />
      </main>
    </div>
  );
}
