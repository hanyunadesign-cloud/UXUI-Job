"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { JobPosting } from "@/lib/types";
import { loadApplyPlans } from "@/lib/storage";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

function toKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export default function CalendarView({ jobs }: { jobs: JobPosting[] }) {
  const [cursor, setCursor] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [applyPlans, setApplyPlans] = useState<Record<string, string>>({});

  useEffect(() => {
    setApplyPlans(loadApplyPlans());
  }, []);

  const deadlinesByDay = useMemo(() => {
    const map = new Map<string, JobPosting[]>();
    jobs.forEach((job) => {
      if (!job.deadline) return;
      const key = job.deadline;
      map.set(key, [...(map.get(key) ?? []), job]);
    });
    return map;
  }, [jobs]);

  const applyPlansByDay = useMemo(() => {
    const map = new Map<string, JobPosting[]>();
    Object.entries(applyPlans).forEach(([jobId, date]) => {
      const job = jobs.find((j) => j.id === jobId);
      if (!job) return;
      map.set(date, [...(map.get(date) ?? []), job]);
    });
    return map;
  }, [applyPlans, jobs]);

  const weeks = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const firstDay = new Date(year, month, 1);
    const startOffset = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: (Date | null)[] = [];
    for (let i = 0; i < startOffset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    while (cells.length % 7 !== 0) cells.push(null);

    const result: (Date | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) result.push(cells.slice(i, i + 7));
    return result;
  }, [cursor]);

  const today = toKey(new Date());

  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-neutral-900">
          {cursor.getFullYear()}년 {cursor.getMonth() + 1}월
        </h2>
        <div className="flex gap-1.5">
          <button
            onClick={() =>
              setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))
            }
            className="btn btn-outline px-3"
          >
            ‹
          </button>
          <button
            onClick={() => {
              const now = new Date();
              setCursor(new Date(now.getFullYear(), now.getMonth(), 1));
            }}
            className="btn btn-outline"
          >
            오늘
          </button>
          <button
            onClick={() =>
              setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))
            }
            className="btn btn-outline px-3"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px overflow-hidden rounded-lg border border-neutral-100 bg-neutral-100 text-xs">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="bg-neutral-50 px-2 py-2 text-center font-medium text-neutral-500"
          >
            {w}
          </div>
        ))}

        {weeks.map((week, wi) =>
          week.map((day, di) => {
            if (!day) {
              return <div key={`${wi}-${di}`} className="min-h-[104px] bg-white" />;
            }
            const key = toKey(day);
            const deadlineJobs = deadlinesByDay.get(key) ?? [];
            const applyJobs = applyPlansByDay.get(key) ?? [];
            const isToday = key === today;

            return (
              <div
                key={key}
                className="flex min-h-[104px] flex-col gap-1 bg-white p-1.5"
              >
                <span
                  className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                    isToday
                      ? "bg-primary-500 font-semibold text-white"
                      : "text-neutral-600"
                  }`}
                >
                  {day.getDate()}
                </span>
                <div className="flex flex-col gap-1">
                  {deadlineJobs.slice(0, 2).map((job) => (
                    <Link
                      key={job.id}
                      href={`/jobs/${job.id}`}
                      className="truncate rounded bg-primary-50 px-1.5 py-0.5 text-[10px] font-medium text-primary-700"
                      title={`${job.title} 마감`}
                    >
                      마감 · {job.title}
                    </Link>
                  ))}
                  {applyJobs.slice(0, 2).map((job) => (
                    <Link
                      key={job.id}
                      href={`/jobs/${job.id}`}
                      className="truncate rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-600"
                      title={`${job.title} 지원 예정`}
                    >
                      지원 · {job.title}
                    </Link>
                  ))}
                  {deadlineJobs.length + applyJobs.length > 4 && (
                    <span className="text-[10px] text-neutral-400">
                      +{deadlineJobs.length + applyJobs.length - 4}건 더보기
                    </span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-neutral-500">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-primary-500" /> 공고 마감일
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-400" /> 지원 예정일
        </span>
      </div>
    </div>
  );
}
