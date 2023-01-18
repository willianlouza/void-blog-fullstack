import PostRow from "../post-row";

interface IProps {
  posts: IPost[];
}
interface IPost {
  id: number;
  title: string;
  photo: string;
}
export default function PostTable(props: IProps) {
  const { posts = [] } = props;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Capa
            </th>
            <th scope="col" className="px-6 py-3">
              Título
            </th>
            <th scope="col" className="px-6 py-3">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <PostRow
              key={post.id}
              title={post.title}
              photo={post.photo}
              postId={post.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
