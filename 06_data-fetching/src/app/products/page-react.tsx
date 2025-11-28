'use client'

import { Product } from "@/types";
import { useEffect, useState } from "react";

// api요청으로 데이터 페칭하는 함수
async function getProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:4000/products') // Promise<response>
  if(!response.ok) {
    throw new Error('데이터를 불러오는데 문제가 있습니다.')
  }
  const data: Product[] = await response.json() // Promise<[{}, {}]: any> 기본적으로 any로 타입 지정되있음
  return data;
}

export default function ProductListPage() {

  //const products = getProducts(); // Promise

  const [products, setProducts] = useState<Product[]>([]);
  // 로딩 관리를 위한 상태변수
  // 에러 핸들링을 위한 상태변수

  useEffect(() => {
    // 마운트 - 데이터페칭
    const fetchData = async () => {
      const products: Product[] = await getProducts() // Promise<Product[]>
      setProducts(products);
    };
    fetchData();
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold">상품 목록</h2>
      <ul>
        {products.map((product) => (
        <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

/*
  리액트(CSR) 실행 흐름
  1. 페이지 요청 (브라우저 -> 서버)
  2. 컨텐츠가 비어있는 HTML이 제작되어 응답 (서버 -> 브라우저) => SEO 불리
  3. 데이터 요청 ** (브라우저 -> API 서버 => API 노출)
  4. 데이터 응답    (API -> 브라우저)
  5. 상태 업데이트  (브라우저 - JS 실행)
  6. UI 재렌더링    (브라우저 - JS 실행)
*/