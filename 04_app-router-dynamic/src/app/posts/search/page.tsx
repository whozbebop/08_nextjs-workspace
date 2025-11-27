interface PostSearchPageProps {
  searchParams: Promise<{
    condition: string,
    keyword: string;
  }>
}

export default async function PostSearchPage({searchParams} : PostSearchPageProps) { // { searchParams: Promise<{condition: "xx", keyword: "xx"}> }

  // * 리액트 방식
  // const [searchParams] = useSearchParams(); // [URLSearchParams객체, 쿼리수정하는함수]
  // const condition = searchParams.get("condition");
  // const keyword = searchParams.get("keyword");
  // 데이터 페칭 (condition, keyword)

  // * Next.js 방식 - props의 searchParams 꺼내서 await로 풀기
  const {condition, keyword} = await searchParams;
  
  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 검색 페이지</h1>
      <p>검색조건: {condition}</p>
      <p>검색키워드: {keyword}</p>
    </div>
  );
}