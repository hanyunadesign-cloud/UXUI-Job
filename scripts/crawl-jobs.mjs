import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import * as cheerio from "cheerio";

const OUTPUT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "lib",
  "crawled-jobs.json"
);

const TOOL_KEYWORDS = [
  "Figma",
  "Sketch",
  "Zeplin",
  "Photoshop",
  "Illustrator",
  "Framer",
  "Principle",
  "Protopie",
  "After Effects",
];

const SKILL_KEYWORDS = [
  "디자인 시스템",
  "프로토타이핑",
  "인터랙션",
  "리서치",
  "접근성",
  "UX 라이팅",
  "데이터 시각화",
  "정보 구조",
  "비주얼 디자인",
  "브랜딩",
  "그로스",
];

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function guessCareer(text) {
  if (/신입/.test(text)) return "신입";
  const match = text.match(/(\d+)\s*년\s*이상/);
  if (match) {
    const years = parseInt(match[1], 10);
    if (years >= 5) return "경력 5년 이상";
    if (years >= 3) return "경력 3~5년";
    if (years >= 1) return "경력 1~3년";
  }
  return "경력무관";
}

function extractKeywordCounts(text) {
  const counts = [];
  for (const kw of [...TOOL_KEYWORDS, ...SKILL_KEYWORDS]) {
    const matches = text.match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"));
    if (matches && matches.length > 0) {
      counts.push({ keyword: kw, count: matches.length });
    }
  }
  return counts.sort((a, b) => b.count - a.count);
}

function buildAiAnalysis(text) {
  const counts = extractKeywordCounts(text);
  const tools = counts.filter((k) => TOOL_KEYWORDS.includes(k.keyword)).map((k) => k.keyword);
  const skills = counts.filter((k) => SKILL_KEYWORDS.includes(k.keyword)).map((k) => k.keyword);
  return {
    coreSkills: skills.slice(0, 4).length ? skills.slice(0, 4) : ["원본 공고에서 상세 내용을 확인해주세요"],
    requiredTools: tools.length ? tools : ["Figma"],
    preferred: skills.slice(4, 6),
    keywords: counts.slice(0, 6).length ? counts.slice(0, 6) : [{ keyword: "디자인", count: 1 }],
  };
}

async function crawlKakao() {
  const url =
    "https://careers.kakao.com/public/api/job-list?part=DESIGN&company=KAKAO&employeeType=&page=1";
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Kakao API ${res.status}`);
  const data = await res.json();

  return (data.jobList || []).map((job) => {
    const intro = stripHtml(job.introduction);
    const workContent = stripHtml(job.workContentDesc);
    const qualification = stripHtml(job.qualification);
    const fullText = [intro, workContent, qualification].filter(Boolean).join("\n");
    const employmentType = job.employeeTypeName?.includes("계약")
      ? "계약직"
      : job.employeeTypeName?.includes("인턴")
        ? "인턴"
        : "정규직";

    return {
      id: `kakao-${job.realId}`,
      title: job.jobOfferTitle,
      companyId: "kakao",
      platform: "기업 홈페이지",
      location: job.locationName ? `경기 ${job.locationName}` : "경기 성남시 판교",
      career: guessCareer(`${job.jobOfferTitle} ${qualification}`),
      employmentType,
      postedAt: (job.regDate || "").slice(0, 10) || new Date().toISOString().slice(0, 10),
      deadline: job.endDate ? job.endDate.slice(0, 10) : null,
      tags: Array.from(new Set(["카카오", ...extractKeywordCounts(fullText).slice(0, 2).map((k) => k.keyword)])),
      jdSummary: intro.slice(0, 120) || job.jobOfferTitle,
      jdFull: [intro, "자세한 자격요건과 우대사항은 원본 공고에서 확인해주세요."].filter(Boolean),
      originalUrl: `https://careers.kakao.com/jobs/${job.realId}`,
      aiAnalysis: buildAiAnalysis(fullText),
    };
  });
}

async function crawlToss() {
  const url = "https://api-public.toss.im/api/v3/ipd-eggnog/career/job-groups";
  const res = await fetch(url, {
    headers: { Referer: "https://toss.im/", Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`Toss API ${res.status}`);
  const data = await res.json();

  const DESIGN_CATEGORIES = new Set(["Product Design", "Brand Design", "UX"]);

  return (data.success || [])
    .filter((job) => {
      const category = job.primary_job?.metadata?.find((m) => m.name.includes("Job Category"))?.value;
      return category && DESIGN_CATEGORIES.has(category);
    })
    .map((job) => {
      const meta = job.primary_job.metadata;
      const get = (nameFragment) => meta.find((m) => m.name.includes(nameFragment))?.value || "";
      const employmentTypeRaw = get("Employment_Type");
      const employmentType = employmentTypeRaw.includes("계약")
        ? "계약직"
        : employmentTypeRaw.includes("인턴")
          ? "인턴"
          : "정규직";
      const description = String(get("Job Description을 작성해 주세요") || "");
      const subsidiary = get("자회사") || "토스";

      return {
        id: `toss-${job.id}`,
        title: job.title.trim(),
        companyId: "toss",
        platform: "기업 홈페이지",
        location: job.primary_job.location?.name === "Seoul" ? "서울" : job.primary_job.location?.name || "서울",
        career: guessCareer(`${job.title} ${description}`),
        employmentType,
        postedAt: new Date().toISOString().slice(0, 10),
        deadline: null,
        tags: Array.from(new Set([subsidiary, ...extractKeywordCounts(description).slice(0, 2).map((k) => k.keyword)])),
        jdSummary: description.replace(/[#>*\-\[\]]/g, "").trim().slice(0, 120) || job.title,
        jdFull: ["자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."],
        originalUrl: job.primary_job.absolute_url,
        aiAnalysis: buildAiAnalysis(description),
      };
    });
}

async function crawlNaver() {
  // srchClassCd=2000000 filters to the Design department on NAVER's career site.
  const res = await fetch("https://recruit.navercorp.com/rcrt/list.do?srchClassCd=2000000");
  if (!res.ok) throw new Error(`Naver page ${res.status}`);
  const html = await res.text();
  const $ = cheerio.load(html);

  const jobs = [];
  $(".card_item").each((_, el) => {
    const $el = $(el);
    const onclick = $el.find(".card_link").attr("onclick") || "";
    const idMatch = onclick.match(/show\('(\d+)'\)/);
    if (!idMatch) return;
    const annoId = idMatch[1];

    const title = $el.find(".card_title").first().text().trim();
    const infoTexts = $el
      .find(".info_text")
      .map((__, dd) => $(dd).text().trim())
      .get();
    const [department, jobField, career, employment, period] = infoTexts;
    if (department !== "Design") return;

    const employmentType = (employment || "").includes("계약")
      ? "계약직"
      : (employment || "").includes("인턴")
        ? "인턴"
        : "정규직";
    const careerLevel = (career || "").includes("신입")
      ? "신입"
      : (career || "").includes("무관")
        ? "경력무관"
        : guessCareer(title);

    let deadline = null;
    if (period && /\d{4}\.\d{2}\.\d{2}\s*~\s*\d{4}\.\d{2}\.\d{2}/.test(period)) {
      const end = period.split("~")[1].trim().replace(/\./g, "-");
      deadline = end;
    }

    jobs.push({
      id: `naver-${annoId}`,
      title,
      companyId: "naver",
      platform: "기업 홈페이지",
      location: "경기 성남시 분당구",
      career: careerLevel,
      employmentType,
      postedAt: new Date().toISOString().slice(0, 10),
      deadline,
      tags: Array.from(new Set(["네이버", jobField].filter(Boolean))),
      jdSummary: `${jobField || "디자인"} 직군 채용공고입니다.`,
      jdFull: ["자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."],
      originalUrl: `https://recruit.navercorp.com/rcrt/view.do?annoId=${annoId}&lang=ko`,
      aiAnalysis: buildAiAnalysis(`${title} ${jobField || ""}`),
    });
  });

  return jobs;
}

async function main() {
  const results = await Promise.allSettled([crawlKakao(), crawlToss(), crawlNaver()]);
  const labels = ["Kakao", "Toss", "Naver"];
  let allJobs = [];

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`${labels[i]}: ${result.value.length}건 수집`);
      allJobs = allJobs.concat(result.value);
    } else {
      console.error(`${labels[i]} 크롤링 실패:`, result.reason?.message || result.reason);
    }
  });

  await writeFile(OUTPUT_PATH, JSON.stringify(allJobs, null, 2) + "\n", "utf-8");
  console.log(`총 ${allJobs.length}건 저장 완료 → ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
