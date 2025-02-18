import type { Metadata } from "next";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <footer>frontend footer</footer>
    </main>
  );
}
