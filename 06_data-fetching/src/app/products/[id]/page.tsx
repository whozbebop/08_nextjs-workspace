interface ProductDetailPageProps {
  params: Promise<{id: string;}>
}

export default async function ProductDetail({params}: ProductDetailPageProps) {

  const { id } = await params;

  return (
    <div>{id}</div>
  );
}