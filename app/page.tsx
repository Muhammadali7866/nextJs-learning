import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to reloRadar</h1>
      <h2>
        <Link href="/blog">Blog</Link>
      </h2>
      <h2>
        <Link href="/products">products</Link>
      </h2>
    </>
  );
}
