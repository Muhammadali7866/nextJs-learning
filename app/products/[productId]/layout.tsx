function getRandom(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandom(2);
  if (random == 1) {
    throw new Error("Error Loading product");
  }
  return (
    <>
      {children}
      <h2>Features prodcuts</h2>
    </>
  );
}
