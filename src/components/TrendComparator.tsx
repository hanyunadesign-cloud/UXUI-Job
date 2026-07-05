"use client";

import { useMemo, useState } from "react";
import { Company, JobPosting } from "@/lib/types";

export default function TrendComparator({
  jobs,
  companies,
}: {
  jobs: JobPosting[];
  companies: Company[];
}) {
  const [selected, setSelected] = useState<string[]>(jobs.slice(0, 3).map((j) => j.id));

  const companyMap = useMemo(
    () => new Map(companies.map((c) => [c.id, c])),
    [companies]
  );

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const aggregated = useMemo(() => {
    const counts = new Map<string, number>();
    jobs
      .filter((job) => selected.includes(job.id))
      .forEach((job) => {
        job.aiAnalysis.keywords.forEach(({ keyword, count }) => {
          counts.set(keyword, (counts.get(keyword) ?? 0) + count);
        });
      });
    return Array.from(counts.entries())
      .map(([keyword, count]) => ({ keyword, count }))
      .sort((a, b) => b.count - a.count);
  }, [jobs, selected]);

  const maxCount = aggregated.length > 0 ? aggregated[0].count : 1;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
      <div className="card flex flex-col gap-3 p-5">
        <h2 className="text-sm font-medium text-neutral-700">
          비교할 공고 선택 ({selected.length}건)
        </h2>
        <div className="flex flex-col divide-y divide-neutral-100">
          {jobs.map((job) => {
            const company = companyMap.get(job.companyId);
            return (
              <label
                key={job.id}
                className="flex cursor-pointer items-start gap-2.5 py-3"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(job.id)}
                  onChange={() => toggle(job.id)}
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-400"
                />
                <span>
                  <span className="block text-sm font-medium text-neutral-900">
                    {job.title}
                  </span>
                  <span className="block text-xs text-neutral-400">
                    {company?.name} · {job.platform}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="card p-5">
        <h2 className="text-base font-semibold text-neutral-900">
          트렌드 키워드
        </h2>
        <p className="mt-0.5 text-xs text-neutral-500">
          선택한 공고들의 AI 분석 키워드를 합산해 보여드려요.
        </p>

        {aggregated.length === 0 ? (
          <div className="mt-8 flex flex-col items-center gap-2 py-12 text-center text-neutral-400">
            <p className="text-sm">비교할 공고를 하나 이상 선택해주세요.</p>
          </div>
        ) : (
          <div className="mt-5 flex flex-col gap-3">
            {aggregated.map(({ keyword, count }) => (
              <div key={keyword} className="flex items-center gap-3">
                <span className="w-28 shrink-0 truncate text-sm text-neutral-700">
                  {keyword}
                </span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-primary-500"
                    style={{ width: `${(count / maxCount) * 100}%` }}
                  />
                </div>
                <span className="w-6 shrink-0 text-right text-xs font-medium text-neutral-500">
                  {count}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
