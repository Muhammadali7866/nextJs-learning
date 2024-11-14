import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetaData = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function productDetails({ params }: Props) {
  return <h1>Welcome to product details {params?.productId}</h1>;
}
