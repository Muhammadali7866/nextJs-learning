import { notFound } from "next/navigation";

function getRandom(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Reviews({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandom(2);
  if (random === 1) {
    throw new Error("Error loading reviews");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
