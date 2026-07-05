import { jobPostings } from "@/lib/mock-data";
import CalendarView from "@/components/CalendarView";

export default function CalendarPage() {
  return (
    <div className="container-page flex flex-col gap-6">
      <section className="flex flex-col gap-3">
        <span className="badge badge-primary w-fit">캘린더</span>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          마감일과 지원 예정일을 한눈에 관리하세요
        </h1>
        <p className="max-w-2xl text-sm text-neutral-500">
          공고의 마감일과 공고 상세페이지에서 등록한 지원 예정일이 함께
          표시됩니다.
        </p>
      </section>

      <CalendarView jobs={jobPostings} />
    </div>
  );
}
