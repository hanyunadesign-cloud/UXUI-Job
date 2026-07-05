import Link from "next/link";
import { Company } from "@/lib/types";

export default function CompanyProfileCard({ company }: { company: Company }) {
  return (
    <div className="card flex flex-col gap-5 p-5">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white ${company.colorClass}`}
        >
          {company.initial}
        </span>
        <div>
          <p className="text-base font-semibold text-neutral-900">
            {company.name}
          </p>
          <p className="text-xs text-neutral-500">
            {company.industry} · {company.location}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-neutral-600">
        {company.description}
      </p>

      <dl className="grid grid-cols-2 gap-4 border-t border-neutral-100 pt-4 text-sm">
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

      <div className="flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
        {company.cultureTags.map((tag) => (
          <span key={tag} className="badge badge-neutral">
            {tag}
          </span>
        ))}
      </div>

      {(company.designBlogUrl || company.brunchUrl) && (
        <div className="flex flex-col gap-2 border-t border-neutral-100 pt-4 text-sm">
          <p className="text-xs font-medium text-neutral-400">
            디자인 조직 문화 살펴보기
          </p>
          {company.designBlogUrl && (
            <a
              href={company.designBlogUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-primary-700 hover:underline"
            >
              공식 디자인 블로그 ↗
            </a>
          )}
          {company.brunchUrl && (
            <a
              href={company.brunchUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-primary-700 hover:underline"
            >
              브런치 채널 ↗
            </a>
          )}
        </div>
      )}

      <Link
        href={`/companies/${company.id}`}
        className="btn btn-outline w-full justify-center"
      >
        기업 상세 프로필 보기
      </Link>
    </div>
  );
}
