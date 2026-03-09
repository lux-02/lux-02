export const locales = ["ko", "en"] as const;

export type Locale = (typeof locales)[number];

export type NavItem = {
  href: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  impact: string;
  stack: string;
  image: string;
  links: ProjectLink[];
};

export type AwardItem = {
  year: string;
  title: string;
  detail: string;
};

export type TrainingItem = {
  title: string;
  period: string;
  detail: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export type SiteCopy = {
  languageName: string;
  switchLabel: string;
  heroTag: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  nav: NavItem[];
  proofTitle: string;
  proofs: Array<{ label: string; value: string; note: string }>;
  missionTitle: string;
  missionBody: string;
  projectsTitle: string;
  projectsLead: string;
  projects: ProjectItem[];
  aboutTitle: string;
  aboutLead: string;
  aboutSections: Array<{ title: string; body: string }>;
  awardsTitle: string;
  awardsLead: string;
  awards: AwardItem[];
  trainingTitle: string;
  training: TrainingItem[];
  contactTitle: string;
  contactLead: string;
  contactChannels: ContactChannel[];
  formLabels: {
    name: string;
    email: string;
    organization: string;
    message: string;
    submit: string;
    submitting: string;
    success: string;
    fallback: string;
  };
  footerLine: string;
};

const projectsKo: ProjectItem[] = [
  {
    id: "blind-challenge",
    title: "Blind Challenge",
    summary:
      "네이버 블로그 OSINT 단서를 분석해 스피어 피싱 시나리오를 사전 차단하는 보안 진단 서비스입니다.",
    impact:
      "데이터유니버스 x 데이콘 피싱·스캠 예방 대회 최종 1위(대상), 1인 팀 출전",
    stack: "Next.js · TypeScript · OpenAI · React Flow",
    image: "https://opengraph.githubassets.com/1/lux-02/Blind_Challenge",
    links: [
      { label: "Repo", href: "https://github.com/lux-02/Blind_Challenge" },
      {
        label: "News",
        href: "https://www.asiae.co.kr/article/2026022715182359896",
      },
    ],
  },
  {
    id: "ai-soom",
    title: "AI-Soom (EPI-LOG)",
    summary:
      "실시간 위치 기반 대기질·날씨·예보 데이터와 AI 해석을 결합해, 아이 연령과 질환에 맞는 행동 가이드를 제공하는 웹앱·토스 미니앱 서비스입니다.",
    impact:
      "1st BUG CMC Demo Day 대상(1위), 웹앱·토스 미니앱 실제 출시, End-to-End 리드",
    stack: "Next.js · TypeScript · FastAPI · OpenAI · RAG · Toss Mini App",
    image: "https://opengraph.githubassets.com/1/CMC-EPI-LOG/EPI-LOG-MAIN",
    links: [
      { label: "Service", href: "https://ai-soom.site" },
      { label: "Web Repo", href: "https://github.com/CMC-EPI-LOG/EPI-LOG-MAIN" },
      { label: "AI Repo", href: "https://github.com/CMC-EPI-LOG/EPI-LOG-AI" },
    ],
  },
  {
    id: "mail-analyzer",
    title: "Naver Mail Analyzer",
    summary:
      "SPF/DKIM/DMARC + LLM 결합으로 일반 사용자도 한 번에 이해할 수 있는 메일 위협 분석 도구입니다.",
    impact:
      "피싱 분석 블로그 1만+ 조회 기반 문제를 제품으로 전환, 웹앱+확장앱 동시 제공",
    stack: "React · FastAPI · Gemini",
    image: "https://opengraph.githubassets.com/1/lux-02/spam_analyzer_web",
    links: [
      { label: "Repo", href: "https://github.com/lux-02/spam_analyzer_web" },
      { label: "Service", href: "https://naver.darkwinterlab.com/" },
    ],
  },
  {
    id: "jeju-type-test",
    title: "제주맹글이",
    summary:
      "9문항 밸런스 게임으로 여행 유형을 진단하고 AI 맞춤 코스를 제안하는 제주 여행 서비스입니다.",
    impact: "12박 13일 런케이션 프로젝트 결과물, 언론 보도 연계",
    stack: "Next.js · TypeScript · Supabase · OpenAI API",
    image: "https://opengraph.githubassets.com/1/lux-02/jeju_test",
    links: [
      { label: "Repo", href: "https://github.com/lux-02/jeju_test" },
      { label: "Service", href: "https://www.xn--bj0b10u3zketa68a.site/" },
      {
        label: "News",
        href: "https://www.jejusori.net/news/articleView.html?idxno=438290",
      },
    ],
  },
];

const projectsEn: ProjectItem[] = [
  {
    id: "blind-challenge",
    title: "Blind Challenge",
    summary:
      "An OSINT-based preemptive defense service that identifies spear-phishing risk signals from public Naver blog posts.",
    impact:
      "Grand Prize (1st) at the DataUniverse x Dacon anti-phishing challenge, built as a solo team",
    stack: "Next.js · TypeScript · OpenAI · React Flow",
    image: "https://opengraph.githubassets.com/1/lux-02/Blind_Challenge",
    links: [
      { label: "Repo", href: "https://github.com/lux-02/Blind_Challenge" },
      {
        label: "News",
        href: "https://www.asiae.co.kr/article/2026022715182359896",
      },
    ],
  },
  {
    id: "ai-soom",
    title: "AI-Soom (EPI-LOG)",
    summary:
      "A web app and Toss mini app that combines real-time location-based air quality, weather, and forecast data with AI interpretation for child-specific guidance.",
    impact:
      "Grand Prize (1st) at 1st BUG CMC Demo Day, shipped as a real web app and Toss mini app, led end-to-end",
    stack: "Next.js · TypeScript · FastAPI · OpenAI · RAG · Toss Mini App",
    image: "https://opengraph.githubassets.com/1/CMC-EPI-LOG/EPI-LOG-MAIN",
    links: [
      { label: "Service", href: "https://ai-soom.site" },
      { label: "Web Repo", href: "https://github.com/CMC-EPI-LOG/EPI-LOG-MAIN" },
      { label: "AI Repo", href: "https://github.com/CMC-EPI-LOG/EPI-LOG-AI" },
    ],
  },
  {
    id: "mail-analyzer",
    title: "Naver Mail Analyzer",
    summary:
      "A user-friendly mail threat analyzer combining SPF/DKIM/DMARC verification with LLM reasoning.",
    impact:
      "Converted a real pain point proven by 10k+ phishing-analysis blog views into a usable product",
    stack: "React · FastAPI · Gemini",
    image: "https://opengraph.githubassets.com/1/lux-02/spam_analyzer_web",
    links: [
      { label: "Repo", href: "https://github.com/lux-02/spam_analyzer_web" },
      { label: "Service", href: "https://naver.darkwinterlab.com/" },
    ],
  },
  {
    id: "jeju-type-test",
    title: "Jeju Travel Type Test",
    summary:
      "A Jeju travel service that maps user preferences through a 9-question test and generates AI course recommendations.",
    impact: "Outcome of a 12-night, 13-day luncation project with press coverage",
    stack: "Next.js · TypeScript · Supabase · OpenAI API",
    image: "https://opengraph.githubassets.com/1/lux-02/jeju_test",
    links: [
      { label: "Repo", href: "https://github.com/lux-02/jeju_test" },
      { label: "Service", href: "https://www.xn--bj0b10u3zketa68a.site/" },
      {
        label: "News",
        href: "https://www.jejusori.net/news/articleView.html?idxno=438290",
      },
    ],
  },
];

export const siteContent: Record<Locale, SiteCopy> = {
  ko: {
    languageName: "한국어",
    switchLabel: "EN",
    heroTag: "Darkwinterlab",
    heroTitle: "From Prompt to Product",
    heroDescription:
      "Darkwinterlab은 다크웹과 피싱 위협으로부터 일상을 지키기 위해, 고도화된 보안 기술을 가장 쉬운 생활형 서비스로 바꾸는 1인 팀입니다.",
    heroPrimaryCta: "프로젝트 보기",
    heroSecondaryCta: "연락하기",
    nav: [
      { href: "/ko", label: "홈" },
      { href: "/ko/projects", label: "프로젝트" },
      { href: "/ko/about", label: "소개" },
      { href: "/ko/awards", label: "수상/이력" },
      { href: "/ko/contact", label: "연락처" },
    ],
    proofTitle: "검증된 성과",
    proofs: [
      { label: "대회 성과", value: "1위 2회", note: "Blind Challenge, AI-Soom" },
      { label: "AI Competency", value: "AI TOP 100", note: "3,000명 중 100인 Finalist" },
      { label: "보안 활동", value: "PER 2년 연속", note: "NAVER Privacy Enhancement Reward" },
      { label: "출시 경험", value: "웹앱 + 미니앱", note: "AI-Soom 실제 출시" },
    ],
    missionTitle: "왜 Darkwinterlab인가",
    missionBody:
      "사이버 범죄는 다크웹의 은밀한 생태계에서 빠르게 진화하고 있습니다. Darkwinterlab은 공격자 관점의 위협 모델링으로 악용 경로를 먼저 차단하고, 보안 지식이 없는 사용자도 즉시 행동할 수 있는 제품을 만드는 데 집중합니다.",
    projectsTitle: "핵심 프로젝트",
    projectsLead: "채용/협업 관점에서 바로 확인할 수 있도록 대표 프로젝트를 우선 배치했습니다.",
    projects: projectsKo,
    aboutTitle: "소개",
    aboutLead:
      "AI Product Engineer로서 기술 선택의 기준은 항상 동일합니다: 실제 위협을 줄이고, 사용자가 이해하고 행동할 수 있어야 합니다.",
    aboutSections: [
      {
        title: "문제 정의 중심",
        body: "기능 나열보다 문제를 먼저 정의합니다. 피해 시나리오와 사용자 행동 변화 지점을 명확히 정리한 뒤 아키텍처를 설계합니다.",
      },
      {
        title: "보안과 제품의 균형",
        body: "보안 강도를 높이면서도 사용성이 떨어지지 않도록 Trade-off를 공개적으로 문서화하고 검증합니다.",
      },
      {
        title: "실행 속도",
        body: "기획, FE/BE 개발, 배포, 운영 자동화까지 직접 수행해 빠르게 MVP를 검증하고 반복 개선합니다.",
      },
    ],
    awardsTitle: "수상 및 주요 이력",
    awardsLead: "대외 검증 가능한 결과를 중심으로 정리했습니다.",
    awards: [
      {
        year: "2026.03",
        title: "1st BUG CMC Demo Day 대상(1위)",
        detail: "AI-Soom 웹앱·토스 미니앱 출시 및 End-to-End 구현",
      },
      {
        year: "2026.02",
        title: "피싱·스캠 예방 서비스 개발 경진대회 대상(1위)",
        detail: "데이터유니버스·데이콘 주관, 경찰청 후원",
      },
      {
        year: "2025.11",
        title: "AI TOP 100 Finalist",
        detail: "카카오임팩트·브라이언임팩트, 3,000명 중 100인",
      },
      {
        year: "2024.12",
        title: "한이음 ICT 멘토링 공모전 은상",
        detail: "AI 기반 홈페이지 자동 제작 플랫폼(01:11)",
      },
      {
        year: "2024-2025",
        title: "NAVER PER 명예의 전당 연속 등재",
        detail: "개인정보 취약점 분석 및 제보 활동",
      },
    ],
    trainingTitle: "교육/프로그램",
    training: [
      {
        title: "NAVER AI Rush 2023 대학생 앰배서더",
        period: "2023.09 - 2023.12",
        detail: "HyperClova X 기반 AI 서비스 기획",
      },
      {
        title: "KITRI 화이트햇 스쿨 1기 수료",
        period: "2023.09 - 2024.03",
        detail: "Python AST 기반 정적 분석기 개발 참여",
      },
      {
        title: "Goorm x S2W KDT 정보보호 과정 수료",
        period: "2023.08 - 2024.02",
        detail: "모의해킹, 침해사고 대응, 위협 인텔리전스 프로젝트 수행",
      },
    ],
    contactTitle: "연락하기",
    contactLead:
      "채용, 프리랜서 협업, 보안 프로젝트 제안 모두 환영합니다. 아래 폼 또는 채널로 연락주세요.",
    contactChannels: [
      {
        label: "Email",
        value: "darkwinterlab@gmail.com",
        href: "mailto:darkwinterlab@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/lux00",
        href: "https://www.linkedin.com/in/lux00/",
      },
      {
        label: "GitHub",
        value: "github.com/lux-02",
        href: "https://github.com/lux-02",
      },
    ],
    formLabels: {
      name: "이름",
      email: "이메일",
      organization: "소속/회사 (선택)",
      message: "문의 내용",
      submit: "메시지 보내기",
      submitting: "전송 중...",
      success: "메시지가 전송되었습니다. 빠르게 회신드리겠습니다.",
      fallback: "폼 엔드포인트가 없어 메일 앱으로 연결됩니다.",
    },
    footerLine: "Darkwinterlab · AI Product Engineer OH Yoonseok",
  },
  en: {
    languageName: "English",
    switchLabel: "KO",
    heroTag: "Darkwinterlab",
    heroTitle: "From Prompt to Product",
    heroDescription:
      "Darkwinterlab is a solo team that neutralizes cyber threats from hidden ecosystems and translates advanced security into practical products people can actually use.",
    heroPrimaryCta: "View Projects",
    heroSecondaryCta: "Contact",
    nav: [
      { href: "/en", label: "Home" },
      { href: "/en/projects", label: "Projects" },
      { href: "/en/about", label: "About" },
      { href: "/en/awards", label: "Awards" },
      { href: "/en/contact", label: "Contact" },
    ],
    proofTitle: "Verified Outcomes",
    proofs: [
      { label: "Competition", value: "2 Grand Prizes", note: "Blind Challenge, AI-Soom" },
      { label: "AI Competency", value: "AI TOP 100", note: "Top 100 out of 3,000 applicants" },
      { label: "Security Track", value: "2-Year PER", note: "NAVER Privacy Enhancement Reward" },
      { label: "Launch", value: "Web + Mini App", note: "AI-Soom shipped to users" },
    ],
    missionTitle: "Why Darkwinterlab",
    missionBody:
      "Cybercrime keeps scaling through dark ecosystems. Darkwinterlab focuses on attacker-oriented threat modeling and turns high-end security into accessible, action-oriented products for everyday users.",
    projectsTitle: "Featured Projects",
    projectsLead:
      "Top projects prioritized for hiring managers and external stakeholders.",
    projects: projectsEn,
    aboutTitle: "About",
    aboutLead:
      "As an AI Product Engineer, my core standard is simple: reduce real risk and deliver products users can understand and act on.",
    aboutSections: [
      {
        title: "Problem-first approach",
        body: "I define concrete harm scenarios and user behavior-change points before writing architecture.",
      },
      {
        title: "Security x Product balance",
        body: "I make trade-offs explicit so stronger security does not degrade usability.",
      },
      {
        title: "Execution speed",
        body: "I handle planning, FE/BE implementation, deployment, and automation to iterate quickly.",
      },
    ],
    awardsTitle: "Awards and Highlights",
    awardsLead: "A concise list of externally verifiable outcomes.",
    awards: [
      {
        year: "2026.03",
        title: "Grand Prize (1st), 1st BUG CMC Demo Day",
        detail: "AI-Soom released as a web app and Toss mini app, led end-to-end",
      },
      {
        year: "2026.02",
        title: "Grand Prize (1st), Anti-Phishing Service Challenge",
        detail: "Hosted by DataUniverse & Dacon, sponsored by Korean National Police",
      },
      {
        year: "2025.11",
        title: "AI TOP 100 Finalist",
        detail: "Kakao Impact & Brian Impact, top 100 of 3,000 applicants",
      },
      {
        year: "2024.12",
        title: "Silver Prize, Hanium ICT Mentoring Contest",
        detail: "AI website auto-generation platform (01:11)",
      },
      {
        year: "2024-2025",
        title: "NAVER PER Hall of Fame (consecutive years)",
        detail: "Privacy vulnerability analysis and reporting",
      },
    ],
    trainingTitle: "Training and Programs",
    training: [
      {
        title: "NAVER AI Rush 2023 Ambassador",
        period: "Sep 2023 - Dec 2023",
        detail: "AI service planning with HyperClova X",
      },
      {
        title: "KITRI White-Hat School Cohort 1",
        period: "Sep 2023 - Mar 2024",
        detail: "Participated in Python AST static analyzer development",
      },
      {
        title: "Goorm x S2W KDT Security Program",
        period: "Aug 2023 - Feb 2024",
        detail: "Projects in pentesting, incident response, and threat intelligence",
      },
    ],
    contactTitle: "Contact",
    contactLead:
      "Open to full-time opportunities, freelance engagements, and security collaboration requests.",
    contactChannels: [
      {
        label: "Email",
        value: "darkwinterlab@gmail.com",
        href: "mailto:darkwinterlab@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/lux00",
        href: "https://www.linkedin.com/in/lux00/",
      },
      {
        label: "GitHub",
        value: "github.com/lux-02",
        href: "https://github.com/lux-02",
      },
    ],
    formLabels: {
      name: "Name",
      email: "Email",
      organization: "Organization (Optional)",
      message: "Message",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Message sent successfully. I will get back to you soon.",
      fallback: "No form endpoint configured, opening your mail app instead.",
    },
    footerLine: "Darkwinterlab · AI Product Engineer OH Yoonseok",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function switchLocale(locale: Locale): Locale {
  return locale === "ko" ? "en" : "ko";
}
