import { Product } from '@/types';
import { resolve } from 'path';

// api요청으로 데이터 페칭하는 함수 
async function getProducts(): Promise<Product[]> {
  // loading 확인용 - 2초 딜레이
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch('http://localhost:4000/products', {
    // async/await 함수는 Promise<response : Response> 객체로 반환
    // cache: 'force-cache', // SSG(default) - 빌드 시점에 HTML 고정(즉, 빌드 시점에 불러온 데이터로 페이지 고정)
    cache: 'no-cache', // SSR - 페이지 요청시마다 매번 데이터 가져와서 새로이 HTML을 제작 (최신 데이터 보장)
    // next: { revalidate: 60 }, // ISR - 60초 동안은 캐시 유지!!
  });
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 문제가 있습니다.');
  }
  const data: Product[] = await response.json(); // 데이터를 이행하는 Promise<[{},{},..] : any>
  return data;
}

export default async function ProductListPage() {
  // getProducts 비동기 함수이므로 Promise<Product[]>  반환하므로 await 를 사용해 해결
  // nextjs에서는 function 함수를 async 함수로 만들 수 있음 > 바로 조회 가능하도록 함
  const products = await getProducts();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h2 className="text-2xl font-bold pb-4">상품 목록</h2>
      <p>Rendered Time: {currentTime} </p>
      <ul className="pt-4">
        {products.map((product) => (
          <li key={product.id}> {product.name} </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Next.js 서버 컴포넌트 - 비동기 함수가 될 수 있음 (브라우저가 아닌 서버에서 실행되기 때문)
 * 1. 페이지 요청  (브라우저 > 서버)
 * 2. 데이터 요청  (서버 > API 서버) => API 노출 안됨
 * 3. 데이터 응답  (API 서버 > 서버)
 * 4. 조회된 데이터(컨텐츠)가 채워져 있는 HTML이 제작되어 응답  (서버 > 브라우저) => SEO 좋음
 */
