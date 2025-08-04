import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="bg-[#121212] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
