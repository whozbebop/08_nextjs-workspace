'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createPost } from "./services";

// 서버 액션용 함수 

export async function createPostAction(formData: FormData) {

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  // 유효성 검사 

  // 데이터 가공 
  const payload = {
    title,
    content,
    author
  }

  // api 요청 => db 저장
  await createPost(payload);

  // 게시글 목록 캐시갱신 => url 재요청(redirect) 
  revalidatePath("/posts");
  redirect("/posts");

}