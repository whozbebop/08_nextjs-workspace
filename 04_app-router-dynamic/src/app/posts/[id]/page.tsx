import Link from "next/link";

interface PostDetailPageProps {
  params: Promise<{id: string;}>
}

export default async function PostDetailPage({ params }: PostDetailPageProps) { // props === { params: {id: "xx"} }

  // 게시글식별자(id세그먼트) => 데이터페칭
  // const {id} = useParams(); // { id: "xx" } => React 방법

  const { id } = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 상세</h1>
      <p>게시글 ID: {id}</p>
      <Link href={`/posts/${id}/edit`}>수정페이지로 이동</Link>
    </div>
  );
}