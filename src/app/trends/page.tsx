import { companies, jobPostings } from "@/lib/mock-data";
import TrendComparator from "@/components/TrendComparator";

export default function TrendsPage() {
  return (
    <div className="container-page flex flex-col gap-6">
      <section className="flex flex-col gap-3">
        <span className="badge badge-primary w-fit">트렌드 키워드</span>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          여러 공고를 비교해 채용 트렌드를 파악하세요
        </h1>
        <p className="max-w-2xl text-sm text-neutral-500">
          공고를 선택하면 AI가 분석한 키워드를 합산해 어떤 역량과 툴이
          반복적으로 요구되는지 보여드립니다.
        </p>
      </section>

      <TrendComparator jobs={jobPostings} companies={companies} />
    </div>
  );
}
