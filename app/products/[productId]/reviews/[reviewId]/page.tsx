"use client";
import { notFound } from "next/navigation";
import React, { useEffect } from "react";

function getRandom(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Reviews({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}) {
  // Use React.use() to unwrap params
  const { productId, reviewId } = React.use(params);

  const random = getRandom(2);

  useEffect(() => {
    // This useEffect will trigger a random error when the component mounts
    if (random === 1) {
      throw new Error("Error loading reviews");
    }
  }, [random]);

  // Check if reviewId is valid, else trigger notFound
  const parsedReviewId = parseInt(reviewId);
  if (isNaN(parsedReviewId) || parsedReviewId > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
