import Link from 'next/link';
import { getPosts } from './services';

export default async function PostListPage() {
  const posts = await getPosts();

  return (
    <div>
      <h2 className="text-2xl font-bold py-4">게시글 목록</h2>
      <ul className="py-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title} - {post.author}
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <hr className="py-4" />
      <Link href="/posts/new">등록페이지로 이동 &gt;</Link>
    </div>
  );
}
