import PostCard from "@/components/card/post-card";
import AuthenticatedLayout from "@/components/layout/authenticated";
import Head from "next/head";
import { useEffect, useState } from "react";
import { env } from "@/config/env";
import PostTable from "@/components/post-table";
import { api } from "@/api/api";
export default function Dashboard() {
  const [posts, setPosts] = useState<any>([]);
  useEffect(() => {
    getOwnPosts();
  }, []);

  const getOwnPosts = async () => {
    const res = await api.get("/posts/own", { baseURL: env.API_URL });
    setPosts(res.data.posts);
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Feed</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AuthenticatedLayout>
        <main className="min-h-screen flex flex-col pt-32 place-items-center gap-6">
          <div className="px-6">
            <PostTable posts={posts} />
          </div>
        </main>
      </AuthenticatedLayout>
    </>
  );
}
