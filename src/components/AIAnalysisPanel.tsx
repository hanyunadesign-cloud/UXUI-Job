"use client";

import { useState } from "react";
import { AIAnalysis } from "@/lib/types";

export default function AIAnalysisPanel({ analysis }: { analysis: AIAnalysis }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const maxCount = Math.max(...analysis.keywords.map((k) => k.count));

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-neutral-900">AI 분석</h2>
          <p className="mt-0.5 text-xs text-neutral-500">
            JD 텍스트를 분석해 핵심 역량과 키워드를 요약해드려요.
          </p>
        </div>
        {status !== "done" && (
          <button
            onClick={() => {
              setStatus("loading");
              setTimeout(() => setStatus("done"), 700);
            }}
            disabled={status === "loading"}
            className="btn btn-primary shrink-0"
          >
            {status === "loading" ? "분석 중..." : "AI 분석"}
          </button>
        )}
      </div>

      {status === "done" && (
        <div className="mt-5 flex flex-col gap-5">
          <section>
            <h3 className="text-sm font-medium text-neutral-700">
              핵심 요구 역량
            </h3>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {analysis.coreSkills.map((skill) => (
                <li key={skill} className="badge badge-primary">
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-neutral-700">필수 툴</h3>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {analysis.requiredTools.map((tool) => (
                <li key={tool} className="badge badge-neutral">
                  {tool}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-neutral-700">우대사항</h3>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {analysis.preferred.map((item) => (
                <li key={item} className="badge badge-neutral">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-neutral-700">
              반복 등장 키워드
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              {analysis.keywords
                .slice()
                .sort((a, b) => b.count - a.count)
                .map((k) => (
                  <div key={k.keyword} className="flex items-center gap-3">
                    <span className="w-24 shrink-0 truncate text-xs text-neutral-600">
                      {k.keyword}
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full bg-primary-500"
                        style={{ width: `${(k.count / maxCount) * 100}%` }}
                      />
                    </div>
                    <span className="w-6 shrink-0 text-right text-xs text-neutral-400">
                      {k.count}
                    </span>
                  </div>
                ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
