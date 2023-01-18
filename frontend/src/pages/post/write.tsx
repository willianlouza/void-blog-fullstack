import AuthenticatedLayout from "@/components/layout/authenticated";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ButtonPrimary from "@/components/button/primary";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";
import { api } from "@/api/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";

export default function WritePost() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [image, setImage] = useState("");
  const [displayImage, setDisplayImage] = useState<string | null>(null);

  const cloudImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "upload");

    const img = await axios.post(
      "https://api.cloudinary.com/v1_1/dsd9hrqmo/image/upload",
      formData
    );

    return img.data.secure_url;
  };

  const onSubmit = async (data: any) => {
    const imageURL = await cloudImage();
    const { title, content } = data;
    const { "nextblog.token": token } = parseCookies();
    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    const res = await api.post("/post/new", {
      title,
      content,
      photo: imageURL,
    });

    router.push(`/post/${res.data.post.id}`);
  };
  const handlePickImage = (file: any) => {
    if (!file) return;
    setImage(file);
    const url = URL.createObjectURL(file);
    setDisplayImage(url);
  };

  if (typeof window === "undefined") return null;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Escrever</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AuthenticatedLayout>
        <main className="min-h-screen pt-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 lg:max-w-lg m-auto"
          >
            <div>
              <label htmlFor="title">Título</label>
              <input
                {...register("title", { required: "O título é obrigatório." })}
                className={`block w-full p-2 bg-gray-100 dark:bg-neutral-800 outline-none focus:ring focus:ring-neutral-200 dark:focus:ring-neutral-700`}
                type="text"
                name="title"
                id="title"
              />
              {errors && (
                <p className="text-red-500 text-sm">
                  {errors["title"]?.message as string}
                </p>
              )}
            </div>
            <div className="my-4">
              <span>Imagem de Capa</span>
              <label htmlFor="file" className="cursor-pointer">
                <span className="bg-gray-100 dark:bg-neutral-800 h-72 w-full flex place-content-center place-items-center">
                  {displayImage !== null ? (
                    <Image
                      src={displayImage}
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <AiOutlineCloudUpload className="text-gray-500 w-32 h-32" />
                  )}
                </span>
                <input
                  {...register("file", {
                    required: "Escolha uma foto para a capa.",
                  })}
                  type="file"
                  className="hidden"
                  name="file"
                  id="file"
                  onChange={(e: any) => handlePickImage(e.target.files[0])}
                />{" "}
                {errors && (
                  <p className="text-red-500 text-sm">
                    {errors["file"]?.message as string}
                  </p>
                )}
              </label>
            </div>
            <span className="my-4">
              <label htmlFor="content">Conteúdo</label>
              <textarea
                {...register("content", {
                  required: "Insira algum conteúdo para publicar.",
                })}
                className="block resize-none p-2 w-full h-72 bg-gray-100 dark:bg-neutral-800 outline-none focus:ring focus:ring-neutral-200 dark:focus:ring-neutral-700"
                name="content"
                id="content"
              />{" "}
              {errors && (
                <p className="text-red-500 text-sm">
                  {errors["content"]?.message as string}
                </p>
              )}
            </span>

            <div className="flex place-content-end">
              <ButtonPrimary className="mt-4" type="submit">
                Publicar
              </ButtonPrimary>
            </div>
          </form>
        </main>
      </AuthenticatedLayout>
    </>
  );
}
