import { Company, JobPosting } from "./types";

// 스크린샷(원티드 추천 공고 목록)에서 수집한 공고. 상세 JD/원본 URL 없음.
export const addedCompanies: Company[] = [
  {
    "id": "co-1027-01",
    "name": "데이터드리븐",
    "initial": "데",
    "colorClass": "bg-orange-500",
    "industry": "비공개",
    "location": "서울 관악구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "데이터드리븐의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-02",
    "name": "타이로스코프",
    "initial": "타",
    "colorClass": "bg-amber-500",
    "industry": "비공개",
    "location": "울산 중구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "타이로스코프의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-03",
    "name": "엔터넥스트",
    "initial": "엔",
    "colorClass": "bg-lime-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "엔터넥스트의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-04",
    "name": "바이오리서치에이아이",
    "initial": "바",
    "colorClass": "bg-emerald-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "바이오리서치에이아이의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-05",
    "name": "바이트랩",
    "initial": "바",
    "colorClass": "bg-teal-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "바이트랩의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-06",
    "name": "어댑트(adaptInc.)",
    "initial": "어",
    "colorClass": "bg-cyan-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "어댑트(adaptInc.)의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-07",
    "name": "유투시스템",
    "initial": "유",
    "colorClass": "bg-sky-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "유투시스템의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-08",
    "name": "로위랩코리아",
    "initial": "로",
    "colorClass": "bg-indigo-500",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "로위랩코리아의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-09",
    "name": "코인원(coinone)",
    "initial": "코",
    "colorClass": "bg-violet-500",
    "industry": "비공개",
    "location": "서울 영등포구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "코인원(coinone)의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-10",
    "name": "호패",
    "initial": "호",
    "colorClass": "bg-fuchsia-500",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "호패의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-11",
    "name": "인포그린",
    "initial": "인",
    "colorClass": "bg-pink-500",
    "industry": "비공개",
    "location": "서울 서초구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "인포그린의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-12",
    "name": "에이피엑스세이프티",
    "initial": "에",
    "colorClass": "bg-rose-500",
    "industry": "비공개",
    "location": "서울 구로구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "에이피엑스세이프티의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-13",
    "name": "클래스카드",
    "initial": "클",
    "colorClass": "bg-orange-500",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "클래스카드의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-14",
    "name": "더스크랩",
    "initial": "더",
    "colorClass": "bg-amber-500",
    "industry": "비공개",
    "location": "서울 강서구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "더스크랩의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-15",
    "name": "세컨신드롬",
    "initial": "세",
    "colorClass": "bg-lime-600",
    "industry": "비공개",
    "location": "서울 성동구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "세컨신드롬의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-16",
    "name": "엘박스",
    "initial": "엘",
    "colorClass": "bg-emerald-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "엘박스의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-17",
    "name": "라프텔(Laftel)",
    "initial": "라",
    "colorClass": "bg-teal-600",
    "industry": "비공개",
    "location": "서울 영등포구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "라프텔(Laftel)의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-18",
    "name": "베스펙스",
    "initial": "베",
    "colorClass": "bg-cyan-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "베스펙스의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-19",
    "name": "아멜리글로벌",
    "initial": "아",
    "colorClass": "bg-sky-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "아멜리글로벌의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-20",
    "name": "아이리스브라이트",
    "initial": "아",
    "colorClass": "bg-indigo-500",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "아이리스브라이트의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-21",
    "name": "모먼트스튜디오",
    "initial": "모",
    "colorClass": "bg-violet-500",
    "industry": "비공개",
    "location": "서울 중구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "모먼트스튜디오의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-22",
    "name": "위시스트",
    "initial": "위",
    "colorClass": "bg-fuchsia-500",
    "industry": "비공개",
    "location": "서울 관악구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "위시스트의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-23",
    "name": "메타엑스(Meta-X)",
    "initial": "메",
    "colorClass": "bg-pink-500",
    "industry": "비공개",
    "location": "서울 성동구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "메타엑스(Meta-X)의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-24",
    "name": "휴멜로",
    "initial": "휴",
    "colorClass": "bg-rose-500",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "휴멜로의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-25",
    "name": "제이케이앤디",
    "initial": "제",
    "colorClass": "bg-orange-500",
    "industry": "비공개",
    "location": "서울 성동구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "제이케이앤디의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-26",
    "name": "와드(캐치테이블)",
    "initial": "와",
    "colorClass": "bg-amber-500",
    "industry": "비공개",
    "location": "경기 성남시",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "와드(캐치테이블)의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-27",
    "name": "인바디",
    "initial": "인",
    "colorClass": "bg-lime-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "인바디의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-28",
    "name": "코스멘토코리아(헤브블루)",
    "initial": "코",
    "colorClass": "bg-emerald-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "코스멘토코리아(헤브블루)의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-29",
    "name": "롯데그룹 (LOTTE)",
    "initial": "롯",
    "colorClass": "bg-teal-600",
    "industry": "비공개",
    "location": "서울 송파구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "롯데그룹 (LOTTE)의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-30",
    "name": "리스타",
    "initial": "리",
    "colorClass": "bg-cyan-600",
    "industry": "비공개",
    "location": "서울 서초구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "리스타의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-31",
    "name": "오토스테이",
    "initial": "오",
    "colorClass": "bg-sky-600",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "오토스테이의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-32",
    "name": "한복남",
    "initial": "한",
    "colorClass": "bg-indigo-500",
    "industry": "비공개",
    "location": "서울 종로구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "한복남의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-33",
    "name": "에어스메디컬",
    "initial": "에",
    "colorClass": "bg-violet-500",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "에어스메디컬의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-34",
    "name": "이공이공",
    "initial": "이",
    "colorClass": "bg-fuchsia-500",
    "industry": "비공개",
    "location": "서울 서초구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "이공이공의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-35",
    "name": "메디씨앤씨(MediC&C)",
    "initial": "메",
    "colorClass": "bg-pink-500",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "메디씨앤씨(MediC&C)의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-36",
    "name": "머스트엘더트리",
    "initial": "머",
    "colorClass": "bg-rose-500",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "머스트엘더트리의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-37",
    "name": "이그니스",
    "initial": "이",
    "colorClass": "bg-orange-500",
    "industry": "비공개",
    "location": "서울 성동구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "이그니스의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  },
  {
    "id": "co-1027-38",
    "name": "GIGR",
    "initial": "G",
    "colorClass": "bg-amber-500",
    "industry": "비공개",
    "location": "서울 강남구",
    "fundingStage": "비공개",
    "fundingAmount": "비공개",
    "orgStage": "스타트업",
    "employeeCount": "비공개",
    "description": "GIGR의 채용 공고입니다. 회사 상세 정보는 원본 공고에서 확인해주세요.",
    "cultureTags": []
  }
];

export const addedJobPostings: JobPosting[] = [
  {
    "id": "batch-1027-01",
    "title": "비주얼 디자이너(신입~3년)",
    "companyId": "co-1027-01",
    "platform": "원티드",
    "location": "서울 관악구",
    "career": "경력 1~3년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "디자인"
    ],
    "jdSummary": "데이터드리븐에서 비주얼 디자이너(신입~3년) 포지션을 채용합니다. (경력 1-3년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.wanted.co.kr/search?query=%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%93%9C%EB%A6%AC%EB%B8%90%20%EB%B9%84%EC%A3%BC%EC%96%BC%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%28%EC%8B%A0%EC%9E%85~3%EB%85%84%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-02",
    "title": "Senior Product Designer (UX Lead, 8년이상)",
    "companyId": "co-1027-02",
    "platform": "잡코리아",
    "location": "울산 중구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI",
      "프로덕트 디자인"
    ],
    "jdSummary": "타이로스코프에서 Senior Product Designer (UX Lead, 8년이상) 포지션을 채용합니다. (경력 8-16년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.jobkorea.co.kr/Search/?stext=%ED%83%80%EC%9D%B4%EB%A1%9C%EC%8A%A4%EC%BD%94%ED%94%84%20Senior%20Product%20Designer%20%28UX%20Lead%2C%208%EB%85%84%EC%9D%B4%EC%83%81%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        },
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-03",
    "title": "UI/UX 디자이너",
    "companyId": "co-1027-03",
    "platform": "LinkedIn",
    "location": "서울 강남구",
    "career": "경력무관",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI"
    ],
    "jdSummary": "엔터넥스트에서 UI/UX 디자이너 포지션을 채용합니다. (신입-경력 4년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.linkedin.com/jobs/search/?keywords=%EC%97%94%ED%84%B0%EB%84%A5%EC%8A%A4%ED%8A%B8%20UI/UX%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-04",
    "title": "프로덕트 디자이너(Product Designer)",
    "companyId": "co-1027-04",
    "platform": "로켓펀치",
    "location": "서울 강남구",
    "career": "경력 1~3년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "바이오리서치에이아이에서 프로덕트 디자이너(Product Designer) 포지션을 채용합니다. (경력 2-7년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.rocketpunch.com/jobs?keywords=%EB%B0%94%EC%9D%B4%EC%98%A4%EB%A6%AC%EC%84%9C%EC%B9%98%EC%97%90%EC%9D%B4%EC%95%84%EC%9D%B4%20%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%28Product%20Designer%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-05",
    "title": "라이프스타일 브랜드 콘텐츠 디자이너(3년 이상)",
    "companyId": "co-1027-05",
    "platform": "기업 홈페이지",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "브랜드"
    ],
    "jdSummary": "바이트랩에서 라이프스타일 브랜드 콘텐츠 디자이너(3년 이상) 포지션을 채용합니다. (경력 3-8년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.google.com/search?q=%EB%B0%94%EC%9D%B4%ED%8A%B8%EB%9E%A9%20%EC%B1%84%EC%9A%A9%20%EB%9D%BC%EC%9D%B4%ED%94%84%EC%8A%A4%ED%83%80%EC%9D%BC%20%EB%B8%8C%EB%9E%9C%EB%93%9C%20%EC%BD%98%ED%85%90%EC%B8%A0%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%283%EB%85%84%20%EC%9D%B4%EC%83%81%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "브랜드",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-06",
    "title": "뷰티 웹 디자이너",
    "companyId": "co-1027-06",
    "platform": "원티드",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "웹 디자인"
    ],
    "jdSummary": "어댑트(adaptInc.)에서 뷰티 웹 디자이너 포지션을 채용합니다. (경력 4-8년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.wanted.co.kr/search?query=%EC%96%B4%EB%8C%91%ED%8A%B8%28adaptInc.%29%20%EB%B7%B0%ED%8B%B0%20%EC%9B%B9%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "웹 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-07",
    "title": "GUI 디자이너",
    "companyId": "co-1027-07",
    "platform": "잡코리아",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI"
    ],
    "jdSummary": "유투시스템에서 GUI 디자이너 포지션을 채용합니다. (경력 3-5년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.jobkorea.co.kr/Search/?stext=%EC%9C%A0%ED%88%AC%EC%8B%9C%EC%8A%A4%ED%85%9C%20GUI%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-08",
    "title": "[SI 본부] UI/UX 디자이너 (3년 이상~5년이하)",
    "companyId": "co-1027-08",
    "platform": "LinkedIn",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI"
    ],
    "jdSummary": "로위랩코리아에서 [SI 본부] UI/UX 디자이너 (3년 이상~5년이하) 포지션을 채용합니다. (경력 3-5년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.linkedin.com/jobs/search/?keywords=%EB%A1%9C%EC%9C%84%EB%9E%A9%EC%BD%94%EB%A6%AC%EC%95%84%20%5BSI%20%EB%B3%B8%EB%B6%80%5D%20UI/UX%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%20%283%EB%85%84%20%EC%9D%B4%EC%83%81~5%EB%85%84%EC%9D%B4%ED%95%98%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-09",
    "title": "Product Designer(5년 이상)",
    "companyId": "co-1027-09",
    "platform": "로켓펀치",
    "location": "서울 영등포구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "코인원(coinone)에서 Product Designer(5년 이상) 포지션을 채용합니다. (경력 5-15년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.rocketpunch.com/jobs?keywords=%EC%BD%94%EC%9D%B8%EC%9B%90%28coinone%29%20Product%20Designer%285%EB%85%84%20%EC%9D%B4%EC%83%81%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-10",
    "title": "Senior Product Designer (시니어 프로덕트 디자이너)",
    "companyId": "co-1027-10",
    "platform": "기업 홈페이지",
    "location": "서울 강남구",
    "career": "경력 1~3년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "호패에서 Senior Product Designer (시니어 프로덕트 디자이너) 포지션을 채용합니다. (경력 2-12년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.google.com/search?q=%ED%98%B8%ED%8C%A8%20%EC%B1%84%EC%9A%A9%20Senior%20Product%20Designer%20%28%EC%8B%9C%EB%8B%88%EC%96%B4%20%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-11",
    "title": "Senior Product Designer",
    "companyId": "co-1027-10",
    "platform": "원티드",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "호패에서 Senior Product Designer 포지션을 채용합니다. (경력 3-12년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.wanted.co.kr/search?query=%ED%98%B8%ED%8C%A8%20Senior%20Product%20Designer",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-12",
    "title": "[맘가이드] 앱/웹 서비스 프로덕트(UX/UI) 디자이너",
    "companyId": "co-1027-11",
    "platform": "잡코리아",
    "location": "서울 서초구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI",
      "프로덕트 디자인",
      "웹 디자인"
    ],
    "jdSummary": "인포그린에서 [맘가이드] 앱/웹 서비스 프로덕트(UX/UI) 디자이너 포지션을 채용합니다. (경력 3-5년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.jobkorea.co.kr/Search/?stext=%EC%9D%B8%ED%8F%AC%EA%B7%B8%EB%A6%B0%20%5B%EB%A7%98%EA%B0%80%EC%9D%B4%EB%93%9C%5D%20%EC%95%B1/%EC%9B%B9%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8%28UX/UI%29%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        },
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        },
        {
          "keyword": "웹 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-13",
    "title": "브랜드·디지털 디자이너",
    "companyId": "co-1027-12",
    "platform": "LinkedIn",
    "location": "서울 구로구",
    "career": "경력 3~5년",
    "employmentType": "계약직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "브랜드"
    ],
    "jdSummary": "에이피엑스세이프티에서 브랜드·디지털 디자이너 포지션을 채용합니다. (경력 3-7년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.linkedin.com/jobs/search/?keywords=%EC%97%90%EC%9D%B4%ED%94%BC%EC%97%91%EC%8A%A4%EC%84%B8%EC%9D%B4%ED%94%84%ED%8B%B0%20%EB%B8%8C%EB%9E%9C%EB%93%9C%C2%B7%EB%94%94%EC%A7%80%ED%84%B8%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "브랜드",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-14",
    "title": "영어 에듀테크 서비스 Product Manager (서비스기획, 화면설계)",
    "companyId": "co-1027-13",
    "platform": "로켓펀치",
    "location": "서울 강남구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "클래스카드에서 영어 에듀테크 서비스 Product Manager (서비스기획, 화면설계) 포지션을 채용합니다. (경력 5-20년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.rocketpunch.com/jobs?keywords=%ED%81%B4%EB%9E%98%EC%8A%A4%EC%B9%B4%EB%93%9C%20%EC%98%81%EC%96%B4%20%EC%97%90%EB%93%80%ED%85%8C%ED%81%AC%20%EC%84%9C%EB%B9%84%EC%8A%A4%20Product%20Manager%20%28%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B8%B0%ED%9A%8D%2C%20%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-15",
    "title": "[dusk그룹] 브랜드 컨텐츠 디자이너",
    "companyId": "co-1027-14",
    "platform": "기업 홈페이지",
    "location": "서울 강서구",
    "career": "경력 1~3년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "브랜드"
    ],
    "jdSummary": "더스크랩에서 [dusk그룹] 브랜드 컨텐츠 디자이너 포지션을 채용합니다. (경력 1-5년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.google.com/search?q=%EB%8D%94%EC%8A%A4%ED%81%AC%EB%9E%A9%20%EC%B1%84%EC%9A%A9%20%5Bdusk%EA%B7%B8%EB%A3%B9%5D%20%EB%B8%8C%EB%9E%9C%EB%93%9C%20%EC%BB%A8%ED%85%90%EC%B8%A0%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "브랜드",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-16",
    "title": "UX/UI Designer",
    "companyId": "co-1027-15",
    "platform": "원티드",
    "location": "서울 성동구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI"
    ],
    "jdSummary": "세컨신드롬에서 UX/UI Designer 포지션을 채용합니다. (경력 5년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.wanted.co.kr/search?query=%EC%84%B8%EC%BB%A8%EC%8B%A0%EB%93%9C%EB%A1%AC%20UX/UI%20Designer",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-17",
    "title": "Product Designer",
    "companyId": "co-1027-16",
    "platform": "잡코리아",
    "location": "서울 강남구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "엘박스에서 Product Designer 포지션을 채용합니다. (경력 5-11년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.jobkorea.co.kr/Search/?stext=%EC%97%98%EB%B0%95%EC%8A%A4%20Product%20Designer",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-18",
    "title": "Product Designer",
    "companyId": "co-1027-16",
    "platform": "LinkedIn",
    "location": "서울 강남구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "엘박스에서 Product Designer 포지션을 채용합니다. (경력 5년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.linkedin.com/jobs/search/?keywords=%EC%97%98%EB%B0%95%EC%8A%A4%20Product%20Designer",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-19",
    "title": "프로덕트 디자이너 (3년 이상)",
    "companyId": "co-1027-17",
    "platform": "로켓펀치",
    "location": "서울 영등포구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "라프텔(Laftel)에서 프로덕트 디자이너 (3년 이상) 포지션을 채용합니다. (경력 3-10년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.rocketpunch.com/jobs?keywords=%EB%9D%BC%ED%94%84%ED%85%94%28Laftel%29%20%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%20%283%EB%85%84%20%EC%9D%B4%EC%83%81%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-20",
    "title": "Senior Product Designer",
    "companyId": "co-1027-18",
    "platform": "기업 홈페이지",
    "location": "서울 강남구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "베스펙스에서 Senior Product Designer 포지션을 채용합니다. (경력 5-10년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.google.com/search?q=%EB%B2%A0%EC%8A%A4%ED%8E%99%EC%8A%A4%20%EC%B1%84%EC%9A%A9%20Senior%20Product%20Designer",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-21",
    "title": "[SaaS 본부] 프로덕트 디자이너",
    "companyId": "co-1027-08",
    "platform": "원티드",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "로위랩코리아에서 [SaaS 본부] 프로덕트 디자이너 포지션을 채용합니다. (경력 3-8년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.wanted.co.kr/search?query=%EB%A1%9C%EC%9C%84%EB%9E%A9%EC%BD%94%EB%A6%AC%EC%95%84%20%5BSaaS%20%EB%B3%B8%EB%B6%80%5D%20%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-22",
    "title": "뷰티 브랜드 웹/광 디자이너",
    "companyId": "co-1027-19",
    "platform": "잡코리아",
    "location": "서울 강남구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "브랜드",
      "웹 디자인"
    ],
    "jdSummary": "아멜리글로벌에서 뷰티 브랜드 웹/광 디자이너 포지션을 채용합니다. (경력 5년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.jobkorea.co.kr/Search/?stext=%EC%95%84%EB%A9%9C%EB%A6%AC%EA%B8%80%EB%A1%9C%EB%B2%8C%20%EB%B7%B0%ED%8B%B0%20%EB%B8%8C%EB%9E%9C%EB%93%9C%20%EC%9B%B9/%EA%B4%91%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "브랜드",
          "count": 1
        },
        {
          "keyword": "웹 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-23",
    "title": "브랜드 웹 디자이너",
    "companyId": "co-1027-20",
    "platform": "LinkedIn",
    "location": "서울 강남구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "브랜드",
      "웹 디자인"
    ],
    "jdSummary": "아이리스브라이트에서 브랜드 웹 디자이너 포지션을 채용합니다. (경력 7년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.linkedin.com/jobs/search/?keywords=%EC%95%84%EC%9D%B4%EB%A6%AC%EC%8A%A4%EB%B8%8C%EB%9D%BC%EC%9D%B4%ED%8A%B8%20%EB%B8%8C%EB%9E%9C%EB%93%9C%20%EC%9B%B9%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "브랜드",
          "count": 1
        },
        {
          "keyword": "웹 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-24",
    "title": "Product Designer (UX/UI)",
    "companyId": "co-1027-21",
    "platform": "로켓펀치",
    "location": "서울 중구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI",
      "프로덕트 디자인"
    ],
    "jdSummary": "모먼트스튜디오에서 Product Designer (UX/UI) 포지션을 채용합니다. (경력 5-35년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.rocketpunch.com/jobs?keywords=%EB%AA%A8%EB%A8%BC%ED%8A%B8%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%20Product%20Designer%20%28UX/UI%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        },
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-25",
    "title": "[스니핏] 프로덕트 디자이너 (Product Designer / UI·UX)",
    "companyId": "co-1027-22",
    "platform": "기업 홈페이지",
    "location": "서울 관악구",
    "career": "경력무관",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI",
      "프로덕트 디자인"
    ],
    "jdSummary": "위시스트에서 [스니핏] 프로덕트 디자이너 (Product Designer / UI·UX) 포지션을 채용합니다. (신입-경력 3년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.google.com/search?q=%EC%9C%84%EC%8B%9C%EC%8A%A4%ED%8A%B8%20%EC%B1%84%EC%9A%A9%20%5B%EC%8A%A4%EB%8B%88%ED%95%8F%5D%20%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%20%28Product%20Designer%20/%20UI%C2%B7UX%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        },
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-26",
    "title": "주니어 프로덕트 디자이너 (기획·UX/UI)",
    "companyId": "co-1027-23",
    "platform": "원티드",
    "location": "서울 성동구",
    "career": "경력 1~3년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI",
      "프로덕트 디자인"
    ],
    "jdSummary": "메타엑스(Meta-X)에서 주니어 프로덕트 디자이너 (기획·UX/UI) 포지션을 채용합니다. (경력 1-5년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.wanted.co.kr/search?query=%EB%A9%94%ED%83%80%EC%97%91%EC%8A%A4%28Meta-X%29%20%EC%A3%BC%EB%8B%88%EC%96%B4%20%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%20%28%EA%B8%B0%ED%9A%8D%C2%B7UX/UI%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        },
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-27",
    "title": "[Tikita] 프로덕트 디자이너 (기획·UX/UI)",
    "companyId": "co-1027-24",
    "platform": "잡코리아",
    "location": "서울 강남구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI",
      "프로덕트 디자인"
    ],
    "jdSummary": "휴멜로에서 [Tikita] 프로덕트 디자이너 (기획·UX/UI) 포지션을 채용합니다. (경력 5년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.jobkorea.co.kr/Search/?stext=%ED%9C%B4%EB%A9%9C%EB%A1%9C%20%5BTikita%5D%20%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%20%28%EA%B8%B0%ED%9A%8D%C2%B7UX/UI%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        },
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-28",
    "title": "Web Designer",
    "companyId": "co-1027-25",
    "platform": "LinkedIn",
    "location": "서울 성동구",
    "career": "경력 1~3년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "웹 디자인"
    ],
    "jdSummary": "제이케이앤디에서 Web Designer 포지션을 채용합니다. (경력 2-8년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.linkedin.com/jobs/search/?keywords=%EC%A0%9C%EC%9D%B4%EC%BC%80%EC%9D%B4%EC%95%A4%EB%94%94%20Web%20Designer",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "웹 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-29",
    "title": "AI-Native Product Designer (Social Service)",
    "companyId": "co-1027-26",
    "platform": "로켓펀치",
    "location": "경기 성남시",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "프로덕트 디자인"
    ],
    "jdSummary": "와드(캐치테이블)에서 AI-Native Product Designer (Social Service) 포지션을 채용합니다. (경력 3년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.rocketpunch.com/jobs?keywords=%EC%99%80%EB%93%9C%28%EC%BA%90%EC%B9%98%ED%85%8C%EC%9D%B4%EB%B8%94%29%20AI-Native%20Product%20Designer%20%28Social%20Service%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-30",
    "title": "UIUX 디자인 계약직 (육아휴직 대체)",
    "companyId": "co-1027-27",
    "platform": "기업 홈페이지",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "계약직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI"
    ],
    "jdSummary": "인바디에서 UIUX 디자인 계약직 (육아휴직 대체) 포지션을 채용합니다. (경력 3년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.google.com/search?q=%EC%9D%B8%EB%B0%94%EB%94%94%20%EC%B1%84%EC%9A%A9%20UIUX%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EA%B3%84%EC%95%BD%EC%A7%81%20%28%EC%9C%A1%EC%95%84%ED%9C%B4%EC%A7%81%20%EB%8C%80%EC%B2%B4%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-31",
    "title": "[인턴] Design/ 디자인",
    "companyId": "co-1027-28",
    "platform": "원티드",
    "location": "서울 강남구",
    "career": "신입",
    "employmentType": "인턴",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "디자인"
    ],
    "jdSummary": "코스멘토코리아(헤브블루)에서 [인턴] Design/ 디자인 포지션을 채용합니다. (신입)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.wanted.co.kr/search?query=%EC%BD%94%EC%8A%A4%EB%A9%98%ED%86%A0%EC%BD%94%EB%A6%AC%EC%95%84%28%ED%97%A4%EB%B8%8C%EB%B8%94%EB%A3%A8%29%20%5B%EC%9D%B8%ED%84%B4%5D%20Design/%20%EB%94%94%EC%9E%90%EC%9D%B8",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-32",
    "title": "[롯데마트 · 롯데슈퍼] e디자인 (이커머스 디자인)",
    "companyId": "co-1027-29",
    "platform": "잡코리아",
    "location": "서울 송파구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "디자인"
    ],
    "jdSummary": "롯데그룹 (LOTTE)에서 [롯데마트 · 롯데슈퍼] e디자인 (이커머스 디자인) 포지션을 채용합니다. (경력 3년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.jobkorea.co.kr/Search/?stext=%EB%A1%AF%EB%8D%B0%EA%B7%B8%EB%A3%B9%20%28LOTTE%29%20%5B%EB%A1%AF%EB%8D%B0%EB%A7%88%ED%8A%B8%20%C2%B7%20%EB%A1%AF%EB%8D%B0%EC%8A%88%ED%8D%BC%5D%20e%EB%94%94%EC%9E%90%EC%9D%B8%20%28%EC%9D%B4%EC%BB%A4%EB%A8%B8%EC%8A%A4%20%EB%94%94%EC%9E%90%EC%9D%B8%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-33",
    "title": "(신사업팀) Content Designer 3년 이하",
    "companyId": "co-1027-30",
    "platform": "LinkedIn",
    "location": "서울 서초구",
    "career": "경력 1~3년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "디자인"
    ],
    "jdSummary": "리스타에서 (신사업팀) Content Designer 3년 이하 포지션을 채용합니다. (경력 1-3년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.linkedin.com/jobs/search/?keywords=%EB%A6%AC%EC%8A%A4%ED%83%80%20%28%EC%8B%A0%EC%82%AC%EC%97%85%ED%8C%80%29%20Content%20Designer%203%EB%85%84%20%EC%9D%B4%ED%95%98",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-34",
    "title": "Product Designer (UX/UI)",
    "companyId": "co-1027-31",
    "platform": "로켓펀치",
    "location": "서울 강남구",
    "career": "경력 5년 이상",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI",
      "프로덕트 디자인"
    ],
    "jdSummary": "오토스테이에서 Product Designer (UX/UI) 포지션을 채용합니다. (경력 5년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.rocketpunch.com/jobs?keywords=%EC%98%A4%ED%86%A0%EC%8A%A4%ED%85%8C%EC%9D%B4%20Product%20Designer%20%28UX/UI%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        },
        {
          "keyword": "프로덕트 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-35",
    "title": "그래픽 디자이너 팀장급",
    "companyId": "co-1027-32",
    "platform": "기업 홈페이지",
    "location": "서울 종로구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "디자인"
    ],
    "jdSummary": "한복남에서 그래픽 디자이너 팀장급 포지션을 채용합니다. (경력 3-7년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.google.com/search?q=%ED%95%9C%EB%B3%B5%EB%82%A8%20%EC%B1%84%EC%9A%A9%20%EA%B7%B8%EB%9E%98%ED%94%BD%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%20%ED%8C%80%EC%9E%A5%EA%B8%89",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-36",
    "title": "UI/UX Designer",
    "companyId": "co-1027-33",
    "platform": "원티드",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI"
    ],
    "jdSummary": "에어스메디컬에서 UI/UX Designer 포지션을 채용합니다. (경력 3-7년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.wanted.co.kr/search?query=%EC%97%90%EC%96%B4%EC%8A%A4%EB%A9%94%EB%94%94%EC%BB%AC%20UI/UX%20Designer",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-37",
    "title": "[글로벌세일즈2팀] 패키지 디자이너",
    "companyId": "co-1027-34",
    "platform": "잡코리아",
    "location": "서울 서초구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "디자인"
    ],
    "jdSummary": "이공이공에서 [글로벌세일즈2팀] 패키지 디자이너 포지션을 채용합니다. (경력 3-5년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.jobkorea.co.kr/Search/?stext=%EC%9D%B4%EA%B3%B5%EC%9D%B4%EA%B3%B5%20%5B%EA%B8%80%EB%A1%9C%EB%B2%8C%EC%84%B8%EC%9D%BC%EC%A6%882%ED%8C%80%5D%20%ED%8C%A8%ED%82%A4%EC%A7%80%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-38",
    "title": "웹 콘텐츠 디자이너",
    "companyId": "co-1027-35",
    "platform": "LinkedIn",
    "location": "서울 강남구",
    "career": "경력 1~3년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "웹 디자인"
    ],
    "jdSummary": "메디씨앤씨(MediC&C)에서 웹 콘텐츠 디자이너 포지션을 채용합니다. (경력 2-5년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.linkedin.com/jobs/search/?keywords=%EB%A9%94%EB%94%94%EC%94%A8%EC%95%A4%EC%94%A8%28MediC%26C%29%20%EC%9B%B9%20%EC%BD%98%ED%85%90%EC%B8%A0%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "웹 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-39",
    "title": "UI/UX 디자이너 (웹 · 앱) PA · PL",
    "companyId": "co-1027-36",
    "platform": "로켓펀치",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "UX/UI",
      "웹 디자인"
    ],
    "jdSummary": "머스트엘더트리에서 UI/UX 디자이너 (웹 · 앱) PA · PL 포지션을 채용합니다. (경력 3년 이상)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.rocketpunch.com/jobs?keywords=%EB%A8%B8%EC%8A%A4%ED%8A%B8%EC%97%98%EB%8D%94%ED%8A%B8%EB%A6%AC%20UI/UX%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%20%28%EC%9B%B9%20%C2%B7%20%EC%95%B1%29%20PA%20%C2%B7%20PL",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "UX/UI",
          "count": 1
        },
        {
          "keyword": "웹 디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-40",
    "title": "[랩노쉬(LABNOSH)] 커머스 디자이너",
    "companyId": "co-1027-37",
    "platform": "기업 홈페이지",
    "location": "서울 성동구",
    "career": "경력 1~3년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "디자인"
    ],
    "jdSummary": "이그니스에서 [랩노쉬(LABNOSH)] 커머스 디자이너 포지션을 채용합니다. (경력 2-5년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.google.com/search?q=%EC%9D%B4%EA%B7%B8%EB%8B%88%EC%8A%A4%20%EC%B1%84%EC%9A%A9%20%5B%EB%9E%A9%EB%85%B8%EC%89%AC%28LABNOSH%29%5D%20%EC%BB%A4%EB%A8%B8%EC%8A%A4%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "디자인",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "batch-1027-41",
    "title": "디자인 엔지니어 (Design Engineer)",
    "companyId": "co-1027-38",
    "platform": "원티드",
    "location": "서울 강남구",
    "career": "경력 3~5년",
    "employmentType": "정규직",
    "postedAt": "2026-10-27",
    "deadline": null,
    "tags": [
      "디자인"
    ],
    "jdSummary": "GIGR에서 디자인 엔지니어 (Design Engineer) 포지션을 채용합니다. (경력 3-8년)",
    "jdFull": [
      "자세한 업무 내용과 자격요건은 원본 공고에서 확인해주세요."
    ],
    "originalUrl": "https://www.wanted.co.kr/search?query=GIGR%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%28Design%20Engineer%29",
    "aiAnalysis": {
      "coreSkills": [
        "원본 공고에서 상세 내용을 확인해주세요"
      ],
      "requiredTools": [],
      "preferred": [],
      "keywords": [
        {
          "keyword": "디자인",
          "count": 1
        }
      ]
    }
  }
];
