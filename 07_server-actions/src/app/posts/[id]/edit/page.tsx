import { updatePostAction } from "../../actions";
import { getPostById } from "../../services";

export default async function PostEditPage({params}: {params: Promise<{id: string}>}) {

  const {id} = await params;
  const post = await getPostById(id);
  
  // id 넘기는 방법2. action 함수 바인딩 방법
  // updatePostAction 함수에 id값이 바인딩(고정)된채로 복사
  const updatePostActionWithId = updatePostAction.bind(null, id)

  return (
    <div className="pt-4">
      <form action={updatePostAction.bind(null, id)}>{/* action={호출 할 서버 액션 함수} */}
        {/* id 넘기는 방법1. 고전적인 방법 - input hidden */}
        {/* <input type="hidden" name="id" defaultValue={post.id} /> */}

        <input
          className="border border-gray-400 p-2 mb-2"
          type="text"
          name="title"
          placeholder="제목"
          defaultValue={post.title}
          required
        />
        <br />
        <textarea className="border border-gray-400 p-2 mb-2" name="content" placeholder="내용" defaultValue={post.content} />
        <br />
        <input
          className="border border-gray-400 p-2 mb-2"
          type="text"
          name="author"
          placeholder="작성자"
          defaultValue={post.author}
          required
        />
        <br />
        <button
          className="bg-gray-800 text-white rounded-full py-2 px-8 cursor-pointer"
          type="submit"
        >
          수정
        </button>
      </form>
    </div>
  );
}