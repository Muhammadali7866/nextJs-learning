import { notFound } from "next/navigation";

export default function ProductReview({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    return notFound();
  }
  return (
    <>
      Review {params.reviewsId} for product {params.productId}
    </>
  );
}
