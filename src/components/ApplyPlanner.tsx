"use client";

import { useEffect, useState } from "react";
import { loadApplyPlans, saveApplyPlans } from "@/lib/storage";

export default function ApplyPlanner({ jobId }: { jobId: string }) {
  const [date, setDate] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const plans = loadApplyPlans();
    if (plans[jobId]) {
      setDate(plans[jobId]);
      setSaved(true);
    }
  }, [jobId]);

  const handleSave = () => {
    if (!date) return;
    const plans = loadApplyPlans();
    plans[jobId] = date;
    saveApplyPlans(plans);
    setSaved(true);
  };

  const handleClear = () => {
    const plans = loadApplyPlans();
    delete plans[jobId];
    saveApplyPlans(plans);
    setDate("");
    setSaved(false);
  };

  return (
    <div className="card flex flex-col gap-3 p-5">
      <h2 className="text-sm font-medium text-neutral-700">
        지원 예정일 관리
      </h2>
      <p className="text-xs text-neutral-500">
        지원 예정일을 저장하면 캘린더에서 함께 확인할 수 있어요.
      </p>
      <div className="flex items-center gap-2">
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setSaved(false);
          }}
          className="input"
        />
        <button onClick={handleSave} className="btn btn-primary shrink-0">
          저장
        </button>
      </div>
      {saved && (
        <div className="flex items-center justify-between text-xs text-primary-700">
          <span>지원 예정일이 캘린더에 저장되었어요.</span>
          <button onClick={handleClear} className="text-neutral-400 hover:text-neutral-600">
            취소
          </button>
        </div>
      )}
    </div>
  );
}
