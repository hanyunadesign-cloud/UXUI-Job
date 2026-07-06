import { companies, allJobPostings } from "@/lib/mock-data";
import JobFeed from "@/components/JobFeed";

export default function HomePage() {
  return (
    <div className="container-page flex flex-col gap-8">
      <section className="flex flex-col gap-3">
        <span className="badge badge-primary w-fit">공고 통합 피드</span>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          흩어진 UX/UI 채용공고, 한곳에서 모아보세요
        </h1>
        <p className="max-w-2xl text-sm text-neutral-500 sm:text-base">
          링크드인, 잡코리아, 원티드, 로켓펀치, 기업 공식 채용페이지의 UX/UI
          공고를 자동으로 모아 보여드립니다. 관심 기업과 키워드를 등록하면
          신규 공고 알림도 받아보세요.
        </p>
      </section>

      <JobFeed jobs={allJobPostings} companies={companies} />
    </div>
  );
}
