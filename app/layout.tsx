import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Code evaluation - Tutorials",
    template: "%s | CodeEvaluation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "blue",
            padding: "1rem",
          }}
        >
          Header
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "GrayText",
            padding: "1rem",
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  );
}
