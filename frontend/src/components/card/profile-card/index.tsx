import { AuthContext } from "@/contexts/auth-context";
import Image from "next/image";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { api } from "@/api/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ButtonLogout from "@/components/button/logout";
import NavLink from "@/components/nav-link";

export default function ProfileCard() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleChangeImage = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload");

    try {
      const image = await axios.post(
        "https://api.cloudinary.com/v1_1/dsd9hrqmo/image/upload",
        formData
      );

      await api.patch("/profile/edit/photo", {
        photo: image.data.secure_url,
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  if (!user) return null;
  return (
    <div className="bg-gray-200 dark:bg-neutral-800 p-6 rounded-md flex flex-col place-items-center gap-4 w-72">
      <label className="rounded-full overflow-hidden w-32 h-32 cursor-pointer group relative">
        <Image
          className="w-full h-full object-cover"
          src={user.photo}
          alt="user-picture"
          width={500}
          height={500}
        />
        <input
          type="file"
          className="hidden"
          onChange={(e: any) => handleChangeImage(e.target.files[0])}
        />
        <div className="absolute w-full h-52 left-0 top-full group-hover:-translate-y-9 transition-transform duration-150 z-10 bg-gray-300 py-1">
          <AiOutlineEdit className="m-auto w-6 h-6 text-gray-500" />
        </div>
      </label>

      <div className="flex flex-col place-items-start gap-4 after:block after:w-full after:h-0.5 after:bg-black/30">
        <span>
          <p className="font-light text-sm">Nome</p>
          <p className="text-lg">{user?.fullName}</p>
        </span>
        <span>
          <p className="font-light text-sm">E-mail</p>
          <p className="text-lg">{user?.email}</p>
        </span>
      </div>
      <span className="m-auto leading-loose">
        <NavLink
          href="/dashboard"
          text="Minhas Publicações"
          className="after:bg-black dark:after:bg-white font-sans"
        />
        <ButtonLogout className="font-sans" />
      </span>
    </div>
  );
}
