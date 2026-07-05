import { notFound } from "next/navigation";
import Link from "next/link";
import { companies, getCompanyById, getJobsByCompany } from "@/lib/mock-data";
import { deadlineLabel } from "@/lib/date";

export function generateStaticParams() {
  return companies.map((c) => ({ id: c.id }));
}

export default function CompanyPage({ params }: { params: { id: string } }) {
  const company = getCompanyById(params.id);
  if (!company) notFound();

  const jobs = getJobsByCompany(company.id);

  return (
    <div className="container-page flex flex-col gap-8">
      <Link href="/" className="text-sm text-neutral-500 hover:text-primary-700">
        ← 전체 공고로 돌아가기
      </Link>

      <div className="card flex flex-col gap-6 p-6 sm:flex-row sm:items-start">
        <span
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-semibold text-white ${company.colorClass}`}
        >
          {company.initial}
        </span>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {company.name}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {company.industry} · {company.location}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
            {company.description}
          </p>

          <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-neutral-100 pt-5 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-xs text-neutral-400">투자 단계</dt>
              <dd className="mt-0.5 font-medium text-neutral-900">
                {company.fundingStage}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-400">투자 규모</dt>
              <dd className="mt-0.5 font-medium text-neutral-900">
                {company.fundingAmount}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-400">조직 스테이지</dt>
              <dd className="mt-0.5 font-medium text-neutral-900">
                {company.orgStage}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-400">임직원 수</dt>
              <dd className="mt-0.5 font-medium text-neutral-900">
                {company.employeeCount}
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {company.cultureTags.map((tag) => (
              <span key={tag} className="badge badge-neutral">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            {company.designBlogUrl && (
              <a
                href={company.designBlogUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary-700 hover:underline"
              >
                공식 디자인 블로그 ↗
              </a>
            )}
            {company.brunchUrl && (
              <a
                href={company.brunchUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary-700 hover:underline"
              >
                브런치 채널 ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-neutral-900">
          진행 중인 채용 공고 ({jobs.length})
        </h2>
        <div className="flex flex-col gap-3">
          {jobs.map((job) => {
            const deadline = deadlineLabel(job.deadline);
            return (
              <Link
                key={job.id}
                href={`/jobs/${job.id}`}
                className="card flex items-center justify-between gap-4 p-4 hover:shadow-lg"
              >
                <div>
                  <p className="font-medium text-neutral-900">{job.title}</p>
                  <p className="mt-1 text-xs text-neutral-400">
                    {job.platform} · {job.career} · {job.employmentType}
                  </p>
                </div>
                <span
                  className={`shrink-0 text-sm font-semibold ${
                    deadline.urgent ? "text-primary-600" : "text-neutral-500"
                  }`}
                >
                  {deadline.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
