import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>
        <Link href="/">Home</Link>
      </h1>
      <h2>Product Details</h2>
      <h4>
        {" "}
        <Link href="/products/1">Product 1</Link>
      </h4>
      <h4>
        {" "}
        <Link href="/products/2">Product 2</Link>
      </h4>
      <h4>
        <Link href="/products/3">Product 3</Link>
      </h4>
    </>
  );
}
