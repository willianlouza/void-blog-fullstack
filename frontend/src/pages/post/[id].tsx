import AuthenticatedLayout from "@/components/layout/authenticated";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ButtonPrimary from "@/components/button/primary";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";
import { api } from "@/api/api";
import axios from "axios";
import { useRouter } from "next/router";

export default function PostReader() {
  const router = useRouter();
  const { id } = router.query;
  const [mounted, setMounted] = useState(false);
  const [post, setPost] = useState<any>(null);

  const getPost = async () => {
    const post = (await (await api.get(`/post/${id}`)).data.post) as IPostData;
    setPost(post);
    setMounted(true);
  };
  useEffect(() => {
    if (!id) return;
    getPost();
  }, [id]);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AuthenticatedLayout>
        <main className="min-h-screen pt-20">
          <div className="max-w-max m-auto flex flex-col place-items-center gap-6 p-6 lg:px-48">
            <h1 className="text-3xl font-semibold text-center">{post.title}</h1>
            <div className="flex place-items-center gap-2">
              <div className="overflow-hidden rounded-full w-10 h-10">
                <Image
                  className="w-full h-full object-cover"
                  src={post.author.photo}
                  alt={post.title}
                  width={150}
                  height={150}
                />
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                {post.author.fullName}
              </span>
            </div>
            <div className="w-full">
              <Image
                className="w-full h-full object-cover"
                src={post.photo}
                alt={post.title}
                width={500}
                height={500}
              />
            </div>

            <div className="text-start w-full">
              <span className="whitespace-pre-wrap">{post.content}</span>
            </div>
          </div>
        </main>
      </AuthenticatedLayout>
    </>
  );
}

interface IPostData {
  id: number;
  photo: string;
  title: string;
  content: string;
  author: IAuthorData;
}
interface IAuthorData {
  id: number;
  fullName: string;
  photo: string;
}
