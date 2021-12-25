import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.png" />
          <script
            async
            defer
            data-website-id="23cd4efb-d878-43d7-92e0-4e8e89ffa24e"
            src="https://umami.maggieliu.dev/umami.js"
          />
        </Head>
        <body className="bg-blue-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
