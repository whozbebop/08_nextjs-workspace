import Link from "next/link";

interface PostEditPageProps {
  params: Promise<{id: string;}>
}

export default async function PostDetailPage({ params }: PostEditPageProps) { // props === { params: {id: "xx"} }

  const { id } = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 수정페이지</h1>
      <p>{id}번 게시글수정페이지</p>
    </div>
  );
}