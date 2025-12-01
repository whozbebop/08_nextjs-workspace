import { createPostAction } from "../actions";


export default function PostCreatePage() {

  return (
    <form 
      action={createPostAction}
      className="flex flex-col max-w-100 gap-4 m-4"
    >
      <input 
        type="text"
        name="title"
        placeholder="제목"
        className="border rounded border-gray-300 p-1"
        required
      />
      <textarea 
        name="content"
        placeholder="내용"
        className="border rounded border-gray-300 p-1"
        required
      />
      <input 
        type="text"
        name="author"
        placeholder="작성자"
        className="border rounded border-gray-300 p-1"
        required
      />
      <button 
        type="submit"
        className="bg-blue-500 rounded text-white mt-2 p-2"
      >
        등록
      </button>
    </form>
  );
}