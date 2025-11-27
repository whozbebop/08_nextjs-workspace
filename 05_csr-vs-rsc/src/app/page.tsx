import CounterButton from "@/components/CounterButton";
import Image from "next/image";

// Home 페이지 컴포넌트 == 서버컴포넌트

export default function Home() {
  // 서버에서 생성된 시간
  const time = new Date().toLocaleTimeString(); // 서버측에서 실행

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold">Server Component vs Client Component</h1>
      <p className="mt-2">현재 이 텍스트는 서버컴포넌트에서 렌더링된 텍스트입니다.</p>
      <div className="mt-4 p-2 bg-gray-100 rounded text-center text-purple-600 font-bold">
        시간: {time}
      </div>
      <div className="mt-4 text-center">
        <CounterButton />
      </div>
    </div>
  );
}
