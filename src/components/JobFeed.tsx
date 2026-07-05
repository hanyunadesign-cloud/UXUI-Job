"use client";

import { useMemo, useState } from "react";
import { Company, JobPosting, Platform, CareerLevel } from "@/lib/types";
import JobCard from "@/components/JobCard";

const PLATFORMS: Platform[] = [
  "LinkedIn",
  "잡코리아",
  "원티드",
  "로켓펀치",
  "기업 홈페이지",
];

const CAREERS: CareerLevel[] = [
  "신입",
  "경력무관",
  "경력 1~3년",
  "경력 3~5년",
  "경력 5년 이상",
];

type SortKey = "latest" | "deadline";

export default function JobFeed({
  jobs,
  companies,
}: {
  jobs: JobPosting[];
  companies: Company[];
}) {
  const [keyword, setKeyword] = useState("");
  const [platform, setPlatform] = useState<Platform | "전체">("전체");
  const [career, setCareer] = useState<CareerLevel | "전체">("전체");
  const [sort, setSort] = useState<SortKey>("latest");

  const companyMap = useMemo(
    () => new Map(companies.map((c) => [c.id, c])),
    [companies]
  );

  const filtered = useMemo(() => {
    let list = jobs.filter((job) => {
      const company = companyMap.get(job.companyId);
      const matchesKeyword =
        keyword.trim() === "" ||
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        company?.name.toLowerCase().includes(keyword.toLowerCase()) ||
        job.tags.some((t) => t.toLowerCase().includes(keyword.toLowerCase()));
      const matchesPlatform = platform === "전체" || job.platform === platform;
      const matchesCareer = career === "전체" || job.career === career;
      return matchesKeyword && matchesPlatform && matchesCareer;
    });

    list = [...list].sort((a, b) => {
      if (sort === "latest") {
        return (
          new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
        );
      }
      const aDeadline = a.deadline ? new Date(a.deadline).getTime() : Infinity;
      const bDeadline = b.deadline ? new Date(b.deadline).getTime() : Infinity;
      return aDeadline - bDeadline;
    });

    return list;
  }, [jobs, keyword, platform, career, sort, companyMap]);

  return (
    <div className="flex flex-col gap-6">
      <div className="card flex flex-col gap-3 p-4 sm:flex-row sm:flex-wrap sm:items-center">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="기업명, 공고 제목, 키워드로 검색"
          className="input sm:max-w-xs"
        />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value as Platform | "전체")}
          className="input sm:w-40"
        >
          <option value="전체">전체 플랫폼</option>
          {PLATFORMS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          value={career}
          onChange={(e) => setCareer(e.target.value as CareerLevel | "전체")}
          className="input sm:w-40"
        >
          <option value="전체">전체 경력</option>
          {CAREERS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <div className="flex gap-1.5 sm:ml-auto">
          <button
            onClick={() => setSort("latest")}
            className={`btn ${sort === "latest" ? "btn-primary" : "btn-outline"}`}
          >
            최신순
          </button>
          <button
            onClick={() => setSort("deadline")}
            className={`btn ${sort === "deadline" ? "btn-primary" : "btn-outline"}`}
          >
            마감임박순
          </button>
        </div>
      </div>

      <p className="text-sm text-neutral-500">
        총 <span className="font-semibold text-neutral-900">{filtered.length}</span>
        건의 공고
      </p>

      {filtered.length === 0 ? (
        <div className="card flex flex-col items-center gap-2 p-16 text-center text-neutral-500">
          <p className="text-base font-medium text-neutral-700">
            조건에 맞는 공고가 없어요
          </p>
          <p className="text-sm">검색어나 필터를 조정해보세요.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job) => {
            const company = companyMap.get(job.companyId);
            if (!company) return null;
            return <JobCard key={job.id} job={job} company={company} />;
          })}
        </div>
      )}
    </div>
  );
}
