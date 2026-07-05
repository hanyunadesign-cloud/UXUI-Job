export interface InterestState {
  companyIds: string[];
  keywords: string[];
  notifyEmail: boolean;
  notifyPush: boolean;
}

const INTERESTS_KEY = "uxuijob:interests";
const APPLY_PLANS_KEY = "uxuijob:applyplans";

const DEFAULT_INTERESTS: InterestState = {
  companyIds: [],
  keywords: [],
  notifyEmail: true,
  notifyPush: false,
};

export function loadInterests(): InterestState {
  if (typeof window === "undefined") return DEFAULT_INTERESTS;
  try {
    const raw = window.localStorage.getItem(INTERESTS_KEY);
    if (!raw) return DEFAULT_INTERESTS;
    return { ...DEFAULT_INTERESTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_INTERESTS;
  }
}

export function saveInterests(state: InterestState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(INTERESTS_KEY, JSON.stringify(state));
}

export type ApplyPlans = Record<string, string>;

export function loadApplyPlans(): ApplyPlans {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(APPLY_PLANS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveApplyPlans(plans: ApplyPlans) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(APPLY_PLANS_KEY, JSON.stringify(plans));
}
