export default function ProductReview({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) {
  return (
    <>
      Review {params.reviewsId} for product {params.productId}
    </>
  );
}
