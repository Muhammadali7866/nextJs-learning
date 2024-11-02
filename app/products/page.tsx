import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>welcome to products page</h1>
      <h2>
        <Link href="/products/1">Products 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Products 2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          Products 3
        </Link>
      </h2>
      <h2>
        <Link href="/">Home</Link>
      </h2>
    </>
  );
}
