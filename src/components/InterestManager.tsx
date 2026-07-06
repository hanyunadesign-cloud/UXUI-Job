"use client";

import { useEffect, useState } from "react";
import { Company } from "@/lib/types";
import { InterestState, loadInterests, saveInterests } from "@/lib/storage";
import { trackEvent } from "@/lib/mixpanel";

export default function InterestManager({ companies }: { companies: Company[] }) {
  const [state, setState] = useState<InterestState>({
    companyIds: [],
    keywords: [],
    notifyEmail: true,
    notifyPush: false,
  });
  const [keywordInput, setKeywordInput] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(loadInterests());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveInterests(state);
  }, [state, hydrated]);

  const toggleCompany = (id: string) => {
    setState((prev) => ({
      ...prev,
      companyIds: prev.companyIds.includes(id)
        ? prev.companyIds.filter((c) => c !== id)
        : [...prev.companyIds, id],
    }));
  };

  const addKeyword = () => {
    const value = keywordInput.trim();
    if (!value || state.keywords.includes(value)) return;
    trackEvent("Button Click", { button: "키워드 추가", keyword: value });
    setState((prev) => ({ ...prev, keywords: [...prev.keywords, value] }));
    setKeywordInput("");
  };

  const removeKeyword = (keyword: string) => {
    setState((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((k) => k !== keyword),
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="card flex flex-col gap-4 p-5">
        <h2 className="text-base font-semibold text-neutral-900">관심 기업</h2>
        <p className="text-xs text-neutral-500">
          체크한 기업의 신규 공고가 등록되면 알림을 보내드려요.
        </p>
        <div className="flex flex-col divide-y divide-neutral-100">
          {companies.map((company) => (
            <label
              key={company.id}
              className="flex cursor-pointer items-center gap-3 py-3"
            >
              <input
                type="checkbox"
                checked={state.companyIds.includes(company.id)}
                onChange={() => toggleCompany(company.id)}
                className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-400"
              />
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white ${company.colorClass}`}
              >
                {company.initial}
              </span>
              <span className="flex-1">
                <span className="block text-sm font-medium text-neutral-900">
                  {company.name}
                </span>
                <span className="block text-xs text-neutral-400">
                  {company.industry} · {company.orgStage}
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="card flex flex-col gap-4 p-5">
          <h2 className="text-base font-semibold text-neutral-900">
            관심 키워드
          </h2>
          <p className="text-xs text-neutral-500">
            직무, 툴, 도메인 등 원하는 키워드를 등록해보세요. (예: 디자인
            시스템, Figma, 헬스케어)
          </p>
          <div className="flex gap-2">
            <input
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addKeyword();
                }
              }}
              placeholder="키워드 입력 후 Enter"
              className="input"
            />
            <button onClick={addKeyword} className="btn btn-primary shrink-0">
              추가
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {state.keywords.length === 0 ? (
              <p className="text-xs text-neutral-400">
                등록된 키워드가 없어요.
              </p>
            ) : (
              state.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="badge badge-primary flex items-center gap-1.5"
                >
                  {keyword}
                  <button
                    onClick={() => removeKeyword(keyword)}
                    className="text-primary-400 hover:text-primary-700"
                    aria-label={`${keyword} 삭제`}
                  >
                    ×
                  </button>
                </span>
              ))
            )}
          </div>
        </div>

        <div className="card flex flex-col gap-4 p-5">
          <h2 className="text-base font-semibold text-neutral-900">
            알림 설정
          </h2>
          <label className="flex items-center justify-between text-sm">
            <span className="text-neutral-700">이메일 알림</span>
            <input
              type="checkbox"
              checked={state.notifyEmail}
              onChange={() =>
                setState((prev) => ({
                  ...prev,
                  notifyEmail: !prev.notifyEmail,
                }))
              }
              className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-400"
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            <span className="text-neutral-700">푸시 알림</span>
            <input
              type="checkbox"
              checked={state.notifyPush}
              onChange={() =>
                setState((prev) => ({ ...prev, notifyPush: !prev.notifyPush }))
              }
              className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-400"
            />
          </label>
          <p className="rounded-lg bg-primary-50 px-3 py-2 text-xs text-primary-700">
            설정은 자동으로 저장됩니다. 관심 기업 또는 키워드에 해당하는 신규
            공고가 올라오면 알림을 보내드려요.
          </p>
        </div>
      </div>
    </div>
  );
}
