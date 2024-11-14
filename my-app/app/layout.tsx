import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next js tutorial",
    template: "%s | code Evaluation",
  },
};

export default function RootLayout({
  children,
}: {
  children: {
    children: React.ReactNode;
  };
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>Header</p>
        </header>
        {children}

        <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          Footer
        </footer>
      </body>
    </html>
  );
}
