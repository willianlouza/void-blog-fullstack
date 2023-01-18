import ProfileCard from "@/components/card/profile-card";
import AuthenticatedLayout from "@/components/layout/authenticated";
import { AuthContext } from "@/contexts/auth-context";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (user) {
      setMounted(true);
    }
  }, [user]);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{user?.fullName}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AuthenticatedLayout>
        <main className="min-h-screen flex flex-col place-content-center place-items-center">
          <ProfileCard />
        </main>
      </AuthenticatedLayout>
    </>
  );
}
