import { createPostAction } from '../actions';

export default function PostCreatePage() {
  return (
    <div className="pt-4">
      <form action={createPostAction}>
        {/* action={호출 할 서버 액션 함수} */}
        <input
          className="border border-gray-400 p-2 mb-2"
          type="text"
          name="title"
          placeholder="제목"
          required
        />
        <br />
        <textarea className="border border-gray-400 p-2 mb-2" name="content" placeholder="내용" />
        <br />
        <input
          className="border border-gray-400 p-2 mb-2"
          type="text"
          name="author"
          placeholder="작성자"
          required
        />
        <br />
        <button
          className="bg-gray-800 text-white rounded-full py-2 px-8 cursor-pointer"
          type="submit"
        >
          등록
        </button>
      </form>
    </div>
  );
}
