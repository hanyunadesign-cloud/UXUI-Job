import { companies, allJobPostings, notificationLog } from "@/lib/mock-data";
import MyPageContent from "@/components/MyPageContent";

export default function MyPage() {
  return (
    <div className="container-page flex flex-col gap-6">
      <section className="flex flex-col gap-3">
        <span className="badge badge-primary w-fit">마이페이지</span>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          내 지원 현황과 알림을 확인하세요
        </h1>
        <p className="max-w-2xl text-sm text-neutral-500">
          등록한 지원 예정일, 관심 기업/키워드, 알림 내역을 한곳에서
          관리합니다.
        </p>
      </section>

      <MyPageContent
        jobs={allJobPostings}
        companies={companies}
        notificationLog={notificationLog}
      />
    </div>
  );
}
