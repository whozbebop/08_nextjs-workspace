'use client';

// 기존의 react 방식
import { useState } from 'react';
import { createPostDto } from '../types';
import { createPost } from '../services';
import { useRouter } from 'next/navigation';

export default function PostCreatePage() {
  const router = useRouter();

  const [formData, setFormData] = useState<createPostDto>({
    title: '',
    content: '',
    author: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost(formData);
    alert('게시글이 등록되었습니다.');
    setFormData({ title: '', content: '', author: '' });
    // 게시글 목록 상태 변수에 push
    router.push('/posts');
  };

  return (
    <div className="pt-4">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-gray-400 p-2 mb-2"
          type="text"
          name="title"
          placeholder="제목"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          className="border border-gray-400 p-2 mb-2"
          name="content"
          placeholder="내용"
          value={formData.content}
          onChange={handleChange}
        />
        <br />
        <input
          className="border border-gray-400 p-2 mb-2"
          type="text"
          name="author"
          placeholder="작성자"
          value={formData.author}
          onChange={handleChange}
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
