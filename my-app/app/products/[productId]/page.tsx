export default function productDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Welcome to product details {params?.productId}</h1>;
}
