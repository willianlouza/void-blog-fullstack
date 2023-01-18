import Head from "next/head";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Oops!</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back home</Link>
    </>
  );
}
