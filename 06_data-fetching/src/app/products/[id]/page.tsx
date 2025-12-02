import { Product } from "@/types";

// api요청으로 데이터 페칭하는 함수
async function getProduct(id: string): Promise<Product> {

  // loading 확인용 - 2초 딜레이
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`http://localhost:4000/products/${id}`, {

    //cache: 'force-cache' // SSG(default) - 빌드 시점에 HTML 고정(즉, 빌드시점에 불러온 데이터로 페이지 고정)
    cache: 'no-store' // SSR - 페이지 요청시마다 매번 데이터 가져와서 새로이 HTML을 제작 (최신 데이터 보장)
    //next: { revalidate: 60 }  // ISR - 60초 동안은 캐시 유지!

  }) // Promise<response>

  // error 확인용 - 50%
  // if(Math.random() > 0.5){
  //   throw new Error('50% 확률로 발생된 에러');
  // }

  if(!response.ok) {
    throw new Error('데이터를 불러오는데 문제가 있습니다.')
  }
  const data: Product = await response.json() // Promise<[{}, {}]: any> 기본적으로 any로 타입 지정되있음
  return data;
}

interface PostDetailPageProps {
  params: { id: string };

}

export default async function ProductDetail({params}: PostDetailPageProps) {
  const product = await getProduct(params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>가격: {product.price.toLocaleString()}원</p>
      <p>재고: {product.stock}개</p>
    </div>
  );
}