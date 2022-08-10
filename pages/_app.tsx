import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href="/">Home</Link>
      <br></br>
      <Link href="/about">About (SSR)</Link>
      <br></br>
      <Link href="/redir">Sample Page (Static)</Link>
      <hr></hr>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
