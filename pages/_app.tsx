import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href="/">Home</Link>
      <br></br>
      <Link href="/about">About</Link>
      <br></br>
      <Link href="/redir">Redit</Link>
      <hr></hr>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
