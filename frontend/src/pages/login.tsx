import LoginForm from "@/components/form/login";
import GuestLayout from "@/components/layout/guest";
import Navbar from "@/components/navbar";
import { AuthContext } from "@/contexts/auth-context";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Entrar</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <GuestLayout>
        <main className="min-h-screen flex flex-col place-content-center place-items-center">
          <LoginForm />
        </main>
      </GuestLayout>
    </>
  );
}
