export type Platform =
  | "LinkedIn"
  | "잡코리아"
  | "원티드"
  | "로켓펀치"
  | "기업 홈페이지";

export type CareerLevel =
  | "신입"
  | "경력무관"
  | "경력 1~3년"
  | "경력 3~5년"
  | "경력 5년 이상";

export type EmploymentType = "정규직" | "계약직" | "인턴";

export type FundingStage =
  | "시드"
  | "시리즈 A"
  | "시리즈 B"
  | "시리즈 C"
  | "상장"
  | "비공개";

export type OrgStage = "스타트업" | "스케일업" | "대기업";

export interface Company {
  id: string;
  name: string;
  initial: string;
  colorClass: string;
  industry: string;
  location: string;
  fundingStage: FundingStage;
  fundingAmount: string;
  orgStage: OrgStage;
  employeeCount: string;
  designBlogUrl?: string;
  brunchUrl?: string;
  description: string;
  cultureTags: string[];
}

export interface KeywordCount {
  keyword: string;
  count: number;
}

export interface AIAnalysis {
  coreSkills: string[];
  requiredTools: string[];
  preferred: string[];
  keywords: KeywordCount[];
}

export interface JobPosting {
  id: string;
  title: string;
  companyId: string;
  platform: Platform;
  location: string;
  career: CareerLevel;
  employmentType: EmploymentType;
  postedAt: string;
  deadline: string | null;
  tags: string[];
  jdSummary: string;
  jdFull: string[];
  aiAnalysis: AIAnalysis;
}
