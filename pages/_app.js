import "@/styles/globals.css";
import Head from "next/head";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Michael Clark</title>
        <meta name="description" content="Full-stack developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
