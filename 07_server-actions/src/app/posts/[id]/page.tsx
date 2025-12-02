import Link from 'next/link';
import { getPostById } from '../services';

interface PostDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  return (
    <div>
      <h2 className="text-2xl font-bold py-4">게시글 상세</h2>
      <p>제목: {post.title} </p>
      <p>내용: {post.content} </p>
      <p>작성자: {post.author} </p>

      <Link href={`/posts/${post.id}/edit/`}>
        수정하기
      </Link>
    </div>
  );
}
