import "@/styles/globals.css";
import Head from "next/head";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Michael Clark</title>
        <meta name="description" content="Full-stack developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="./preview.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={manrope.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
