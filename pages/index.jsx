import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
const Snow = dynamic(() => import("react-snowfall"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Happy Holidays!!</title>
      </Head>
      <main className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
        <h1 className="font-script text-4xl">happy holidays</h1>
        <h2 className="font-serif">
          by{" "}
          <a
            href="https://maggieliu.dev"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            maggie
          </a>
        </h2>
        <Link href="/create">
          <a className="font-serif mt-4 bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 w-36 text-center">
            Create
          </a>
        </Link>
      </main>
      <Snow color="white" />
    </div>
  );
}
