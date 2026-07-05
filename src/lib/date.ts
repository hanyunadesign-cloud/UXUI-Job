export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export function daysUntil(dateStr: string, from: Date = new Date()): number {
  const target = new Date(dateStr);
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const end = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

export function deadlineLabel(deadline: string | null, from?: Date): {
  label: string;
  urgent: boolean;
} {
  if (!deadline) return { label: "상시채용", urgent: false };
  const diff = daysUntil(deadline, from);
  if (diff < 0) return { label: "마감", urgent: false };
  if (diff === 0) return { label: "오늘 마감", urgent: true };
  return { label: `D-${diff}`, urgent: diff <= 3 };
}
