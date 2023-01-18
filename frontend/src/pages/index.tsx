import PostCard from "@/components/card/post-card";
import AuthenticatedLayout from "@/components/layout/authenticated";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { env } from "@/config/env";
export default function Home() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get("/posts/all", { baseURL: env.API_URL });
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
        <main className="min-h-screen flex flex-col pt-32 place-items-center gap-6 px-8 lg:px-0">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 flex-wrap place-content-center gap-6 lg:flex-row lg:place-content-start lg:px-10">
            {posts.map((p: any) => {
              return (
                <PostCard
                  key={p.id}
                  id={p.id}
                  authorName={p.author.fullName}
                  authorPhoto={p.author.photo}
                  photo={p.photo}
                  title={p.title}
                />
              );
            })}
          </div>
        </main>
      </AuthenticatedLayout>
    </>
  );
}
