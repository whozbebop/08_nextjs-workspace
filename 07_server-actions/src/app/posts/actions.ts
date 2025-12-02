'use server';

import { createPost, updatePost } from './services';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// 서버 액션용 함수

export async function createPostAction(formData: FormData) {
  const title = formData.get('title') as string;
  // formData의 데이터를 가져올 때 as string 사용해 문자열로 변환 후 할당
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  // 유효성 검사

  // 데이터 가공
  const payload = {
    title,
    content,
    author,
  };

  // API 요청 => db 저장
  await createPost(payload);

  // 게시글 목록 캐시 갱신(revalidatePath) =>  URL 재요청(redirect)
  revalidatePath('/posts');
  redirect('/posts');
}

// id 넘겨받는 방법1. 고전적인 방법 - input hidden
// export async function updatePostAction(formData: FormData) {

//   const id = formData.get('id') as string;
//   const title = formData.get('title') as string;
//   const content = formData.get('content') as string;
//   const author = formData.get('author') as string;

//   // 검증

//   // 데이터 가공
//   const payload = {
//     title, content, author
//   }

//   // 백엔드 API 요청
//   await updatePost(id, payload) // 수정할게시글의id, payload 

//   // 후속작업

//   revalidatePath(`/posts`); // 목록 갱신
//   revalidatePath(`/posts/${id}`); // 상세 갱신
//   redirect(`/posts/${id}`) // 상세페이지로 자동 이동

// }

// id 넘겨받는 방법2. 바인딩(고정)된 id값을 첫번째 매개변수 받기
export async function updatePostAction(id: string, formData: FormData) {

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  // 검증

  // 데이터 가공
  const payload = {
    title, content, author
  }

  // 백엔드 API 요청
  await updatePost(id, payload) // 수정할게시글의id, payload 

  // 후속작업

  revalidatePath(`/posts`); // 목록 갱신
  revalidatePath(`/posts/${id}`); // 상세 갱신
  redirect(`/posts/${id}`) // 상세페이지로 자동 이동

}