export default function RootLayout({
  children,
}: {
  children: {
    children: React.ReactNode;
  };
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
