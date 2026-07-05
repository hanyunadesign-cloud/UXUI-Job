import { companies } from "@/lib/mock-data";
import InterestManager from "@/components/InterestManager";

export default function InterestsPage() {
  return (
    <div className="container-page flex flex-col gap-6">
      <section className="flex flex-col gap-3">
        <span className="badge badge-primary w-fit">관심기업 · 키워드</span>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          관심 기업과 키워드를 등록하고 신규 공고 알림을 받아보세요
        </h1>
        <p className="max-w-2xl text-sm text-neutral-500">
          등록한 조건에 맞는 신규 공고가 올라오면 이메일 또는 푸시로
          알려드립니다.
        </p>
      </section>

      <InterestManager companies={companies} />
    </div>
  );
}
