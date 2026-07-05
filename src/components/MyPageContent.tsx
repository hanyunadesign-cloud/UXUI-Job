"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Company, JobPosting } from "@/lib/types";
import { NotificationLogItem } from "@/lib/mock-data";
import { InterestState, loadApplyPlans, loadInterests } from "@/lib/storage";
import { deadlineLabel, formatDate } from "@/lib/date";

export default function MyPageContent({
  jobs,
  companies,
  notificationLog,
}: {
  jobs: JobPosting[];
  companies: Company[];
  notificationLog: NotificationLogItem[];
}) {
  const [interests, setInterests] = useState<InterestState | null>(null);
  const [applyPlans, setApplyPlans] = useState<Record<string, string>>({});

  useEffect(() => {
    setInterests(loadInterests());
    setApplyPlans(loadApplyPlans());
  }, []);

  const companyMap = useMemo(
    () => new Map(companies.map((c) => [c.id, c])),
    [companies]
  );

  const applyList = useMemo(() => {
    return Object.entries(applyPlans)
      .map(([jobId, date]) => {
        const job = jobs.find((j) => j.id === jobId);
        return job ? { job, date } : null;
      })
      .filter((v): v is { job: JobPosting; date: string } => v !== null)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [applyPlans, jobs]);

  const interestedCompanies = interests
    ? companies.filter((c) => interests.companyIds.includes(c.id))
    : [];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <div className="card flex flex-col gap-4 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-neutral-900">
              지원 예정 관리
            </h2>
            <Link href="/calendar" className="text-xs text-primary-700 hover:underline">
              캘린더에서 보기
            </Link>
          </div>
          {applyList.length === 0 ? (
            <p className="text-sm text-neutral-400">
              공고 상세페이지에서 지원 예정일을 등록해보세요.
            </p>
          ) : (
            <ul className="flex flex-col divide-y divide-neutral-100">
              {applyList.map(({ job, date }) => {
                const company = companyMap.get(job.companyId);
                const dday = deadlineLabel(date);
                return (
                  <li key={job.id} className="flex items-center justify-between py-3">
                    <Link href={`/jobs/${job.id}`} className="min-w-0">
                      <p className="truncate text-sm font-medium text-neutral-900">
                        {job.title}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {company?.name} · 지원 예정 {formatDate(date)}
                      </p>
                    </Link>
                    <span className="shrink-0 text-xs font-semibold text-primary-600">
                      {dday.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="card flex flex-col gap-4 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-neutral-900">
              관심 기업 · 키워드
            </h2>
            <Link href="/interests" className="text-xs text-primary-700 hover:underline">
              관리하기
            </Link>
          </div>

          <div>
            <p className="text-xs font-medium text-neutral-400">관심 기업</p>
            {interestedCompanies.length === 0 ? (
              <p className="mt-1 text-sm text-neutral-400">
                등록된 관심 기업이 없어요.
              </p>
            ) : (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {interestedCompanies.map((c) => (
                  <span key={c.id} className="badge badge-neutral">
                    {c.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-medium text-neutral-400">관심 키워드</p>
            {!interests || interests.keywords.length === 0 ? (
              <p className="mt-1 text-sm text-neutral-400">
                등록된 관심 키워드가 없어요.
              </p>
            ) : (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {interests.keywords.map((k) => (
                  <span key={k} className="badge badge-primary">
                    {k}
                  </span>
                ))}
              </div>
            )}
          </div>

          {interests && (
            <p className="rounded-lg bg-neutral-50 px-3 py-2 text-xs text-neutral-500">
              이메일 알림 {interests.notifyEmail ? "켜짐" : "꺼짐"} · 푸시 알림{" "}
              {interests.notifyPush ? "켜짐" : "꺼짐"}
            </p>
          )}
        </div>
      </div>

      <div className="card flex flex-col gap-4 p-5">
        <h2 className="text-base font-semibold text-neutral-900">알림 내역</h2>
        <ul className="flex flex-col divide-y divide-neutral-100">
          {notificationLog.map((noti) => (
            <li key={noti.id} className="flex flex-col gap-1 py-3">
              <div className="flex items-center gap-2">
                <span className="badge badge-neutral">{noti.channel}</span>
                <span className="text-xs text-neutral-400">
                  {formatDate(noti.sentAt)}
                </span>
              </div>
              <p className="text-sm text-neutral-700">{noti.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
