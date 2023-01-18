import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { api } from "@/api/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface IProps {
  postId: number;
  photo: string;
  title: string;
}
export default function PostRow(props: IProps) {
  const router = useRouter();
  const { postId, title, photo } = props;

  const handleDelete = async () => {
    await api.delete(`/post/${postId}`);
    router.refresh()
  };
  return (
    <tr className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700">
      <td scope="row" className="px-6 py-4 font-medium">
        <div className="overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={photo}
            alt={title}
            width={124}
            height={124}
          />
        </div>
      </td>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">
        <span className="flex gap-2 place-items-center">
          <Link href={`/post/edit/${postId}`}>
            <AiOutlineEdit className="w-5 h-5" />
          </Link>
          <button onClick={() => handleDelete()}>
            <FiTrash2 className="w-5 h-5 text-red-600 hover:text-red-300" />
          </button>
        </span>
      </td>
    </tr>
  );
}
