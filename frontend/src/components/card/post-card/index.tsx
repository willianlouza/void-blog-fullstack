import Image from "next/image";
import Link from "next/link";

interface IProps {
  id: number;
  title: string;
  photo: string;
  authorName: string;
  authorPhoto: string;
}
export default function PostCard(props: IProps) {
  const { id, title, photo, authorName, authorPhoto } = props;

  return (
    <Link
      href={`/post/${id}`}
      className="group bg-gray-200 dark:bg-neutral-800 flex flex-col place-items-center shadow-md"
    >

      <div className="overflow-hidden w-full">
        <Image
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          src={photo}
          alt={title}
          width={500}
          height={500}
        />
      </div>

      
      <div className="w-full flex-1 flex flex-col place-items-start place-content-between text-neutral-700 dark:text-gray-300 py-2 px-4 gap-4">
        <div>
          <h1 className="text-xl font-medium line-clamp-2">{title}</h1>
        </div>

        <div className="flex place-items-center gap-2">
          <div className="w-8 h-8 overflow-hidden rounded-full">
            <Image
              className="w-full h-full object-cover"
              src={authorPhoto}
              alt={title}
              width={500}
              height={500}
            />
          </div>
          <span>{authorName}</span>
        </div>
      </div>
    </Link>
  );
}
