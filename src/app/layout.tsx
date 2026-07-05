import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "UXUI Job | UX/UI 채용공고 통합 모니터링",
  description:
    "링크드인·잡코리아·기업 채용사이트에 흩어진 UX/UI 채용공고를 한곳에 모아 AI로 분석해주는 채용 모니터링 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
