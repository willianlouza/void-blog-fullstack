import RegisterForm from "@/components/form/register";
import GuestLayout from "@/components/layout/guest";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function SignUp() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Criar conta</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <GuestLayout>
        <main className="min-h-screen flex flex-col place-content-center place-items-center">
          <RegisterForm />
        </main>
      </GuestLayout>
    </>
  );
}
