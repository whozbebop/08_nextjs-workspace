"use client"

import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {

  const router = useRouter();
  const [isPending, startTransition] = useTransition() // [실행중여부, 함수]

  const handleReset = () => {

    startTransition(() => {
      router.refresh(); // 서버에 "새 데이터 줘!" - 비동기
      reset(); // 화면 "다시그려!!" - 동기
    })
    
  }

  return (
    <div className="p-8">
      <p className="text-center text-gray-500 mt-4">
        {error.message || '알 수 없는 오류가 발생했습니다.}'}
      </p>
      <div className="p08 text-center"> 
        <button className="mt-4 px-4 py-2 border-2 rounded" onClick={handleReset}>다시 시도</button>
      </div>
    </div>
  );
}