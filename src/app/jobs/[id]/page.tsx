import { notFound } from "next/navigation";
import Link from "next/link";
import { getCompanyById, getJobById, jobPostings } from "@/lib/mock-data";
import { deadlineLabel, formatDate } from "@/lib/date";
import CompanyProfileCard from "@/components/CompanyProfileCard";
import AIAnalysisPanel from "@/components/AIAnalysisPanel";
import ApplyPlanner from "@/components/ApplyPlanner";

export function generateStaticParams() {
  return jobPostings.map((job) => ({ id: job.id }));
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id);
  if (!job) notFound();

  const company = getCompanyById(job.companyId);
  if (!company) notFound();

  const deadline = deadlineLabel(job.deadline);

  return (
    <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
      <div className="flex flex-col gap-6">
        <Link href="/" className="text-sm text-neutral-500 hover:text-primary-700">
          ← 전체 공고로 돌아가기
        </Link>

        <div className="card p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-neutral">{job.platform}</span>
            <span className="badge badge-neutral">{job.career}</span>
            <span className="badge badge-neutral">{job.employmentType}</span>
          </div>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
            {job.title}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {company.name} · {job.location}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-neutral-100 pt-4 text-sm">
            <span className="text-neutral-500">
              등록일 {formatDate(job.postedAt)}
            </span>
            <span
              className={`font-semibold ${
                deadline.urgent ? "text-primary-600" : "text-neutral-700"
              }`}
            >
              {deadline.label}
              {job.deadline && (
                <span className="ml-1 font-normal text-neutral-400">
                  (마감 {formatDate(job.deadline)})
                </span>
              )}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {job.tags.map((tag) => (
              <span key={tag} className="badge badge-primary">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <AIAnalysisPanel analysis={job.aiAnalysis} />

        <div className="card p-6">
          <h2 className="text-base font-semibold text-neutral-900">
            채용공고 상세
          </h2>
          <div className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-neutral-700">
            {job.jdFull.map((line, idx) => (
              <p
                key={idx}
                className={
                  line.startsWith("[")
                    ? "mt-3 font-semibold text-neutral-900"
                    : ""
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <ApplyPlanner jobId={job.id} />
        <CompanyProfileCard company={company} />
      </div>
    </div>
  );
}
