"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/calendar", label: "캘린더" },
  { href: "/interests", label: "관심기업/키워드" },
  { href: "/trends", label: "트렌드 키워드" },
  { href: "/mypage", label: "마이페이지" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-sm font-bold text-white">
            U
          </span>
          <span className="text-lg font-semibold tracking-tight text-neutral-900">
            UXUI Job
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary-50 text-primary-700"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/interests" className="btn btn-primary hidden sm:inline-flex">
          알림 설정하기
        </Link>
      </div>

      <nav className="container-page flex gap-1 overflow-x-auto pb-2 md:hidden">
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium ${
                active
                  ? "bg-primary-50 text-primary-700"
                  : "bg-neutral-50 text-neutral-600"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
