import { Metadata } from "next";
// app/layout.tsx
import "../styles/globals.css";

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
            backgroundColor: "lightblue",
            padding: "1rem",
            margin: "1rem",
          }}
        >
          Header
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "lightgray",
            padding: "1rem",
            margin: "1rem",
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  );
}
