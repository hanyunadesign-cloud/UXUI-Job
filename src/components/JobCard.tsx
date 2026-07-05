import Link from "next/link";
import { Company, JobPosting } from "@/lib/types";
import { deadlineLabel, formatDate } from "@/lib/date";

export default function JobCard({
  job,
  company,
}: {
  job: JobPosting;
  company: Company;
}) {
  const deadline = deadlineLabel(job.deadline);

  return (
    <Link
      href={`/jobs/${job.id}`}
      className="card group flex flex-col gap-4 p-5 transition-shadow hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${company.colorClass}`}
          >
            {company.initial}
          </span>
          <div>
            <p className="text-sm font-medium text-neutral-500">{company.name}</p>
            <p className="text-xs text-neutral-400">{job.location}</p>
          </div>
        </div>
        <span className="badge badge-neutral shrink-0">{job.platform}</span>
      </div>

      <div>
        <h3 className="text-base font-semibold leading-snug text-neutral-900 group-hover:text-primary-700">
          {job.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-neutral-500">
          {job.jdSummary}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {job.tags.map((tag) => (
          <span key={tag} className="badge badge-primary">
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-3 text-xs text-neutral-500">
        <span>
          {job.career} · {job.employmentType}
        </span>
        <span
          className={`font-semibold ${
            deadline.urgent ? "text-primary-600" : "text-neutral-500"
          }`}
        >
          {deadline.label}
          {job.deadline && (
            <span className="ml-1 font-normal text-neutral-400">
              ({formatDate(job.deadline)})
            </span>
          )}
        </span>
      </div>
    </Link>
  );
}
