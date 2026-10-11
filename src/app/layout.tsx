import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UTAF | The University of Tokyo Autonomy Forge",
  description:
    "UTAFは、フィジカルAIを学び、技術力を養う東京大学フィジカルAI学生団体です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
