// 2026 부산광역시교육청 주요업무계획 AI 데이터 셋
const aiPolicies = [
  {
    id: "beat-ai",
    title: "부산교육 AI 튜터 「BeAT」 구축 및 전면 보급",
    category: "teaching",
    schoolLevel: "all",
    isNew: false,
    isPledge: true,
    dept: "디지털미래교육과 / 교육연구정보원",
    page: "p.16, 27",
    summary: "MS Azure OpenAI 기반으로 교사에게는 '보조교사', 학생에게는 '학습튜터' 역할을 제공하는 지능형 맞춤 교육 서비스 구축",
    details: [
      "교사용(보조교사): 교안 작성 보조, 문서 요약, 수업/퀴즈 제작, 수업자료 RAG(검색증강생성) 탑재 및 안전한 공유",
      "학생용(학습튜터): 수업 내용 실시간 질의응답, 맞춤 피드백, 자기소개서 작성 및 면접 코칭, 개인 학습자료 제작",
      "공통기능: AI 솔루션 기본 활용, 프롬프트 설계 지원 및 생성 결과 정확성 검증",
      "교사 실습 연수(4~11월, 60교) 및 학생 자기주도학습·윤리교육 프로그램(6~12월, 60교) 집중 운영"
    ]
  },
  {
    id: "pengpt-admin",
    title: "교직원 행정 AI 비서 「PenGPT」 및 학교업무 자동화 지원",
    category: "admin",
    schoolLevel: "staff",
    isNew: false,
    isPledge: true,
    dept: "민주시민교육과 / 노사행정정보과",
    page: "p.20, 26, 50, 152",
    summary: "생성형 AI를 활용하여 단순·반복 행정업무를 대폭 줄이고 교육청 매뉴얼을 사전 학습한 특화 비서 및 업무자동화 확산",
    details: [
      "행정업무 경감: 문서 초안 작성, 회의록 작성, 데이터 분석 등 학교 행정 효율성 극대화",
      "개인 맞춤형 기능: 개인별 업무 특성에 맞춘 '나만의 비서' 생성 기능 제공",
      "부산교육 특화 모델: 시교육청 매뉴얼 및 지침을 집중 학습시킨 Pen전용 비서 보급 확대",
      "AI 비서 공모전 개최(4~5월) 및 PenGPT 활용 반부패 청렴 퀴즈·법령 안내",
      "부산학교지원서비스(BSSS) AI 챗봇 구축·운영(하반기) 및 전 교직원 업무자동화 프로그램 개발대회(5~10월, 우수작 6편 보급)"
    ]
  },
  {
    id: "future-school-model",
    title: "부산 미래형 학교 모델 구축 (AI·데이터 기반 지능형 학교)",
    category: "vision",
    schoolLevel: "all",
    isNew: true,
    isPledge: true,
    dept: "중등교육과 / 민주시민교육과 / 유아교육과 / 디지털미래교육과",
    page: "p.16, 23",
    summary: "교사는 AI로 성장하고 학생은 AI와 학습하며 데이터 기반으로 스스로 혁신하는 부산 미래형 학교 모델 개발 및 연구학교 운영",
    details: [
      "디지털·AI 기반 교수·학습 혁신 연구학교 운영(초 3교, 중 1교, 고 1교)",
      "생성형 AI 교수·학습 모델 개발 연구학교 운영(초 2교, 중 1교)",
      "디지털 기반 유치원 교육과정 적용 방안 연구(1개원)",
      "디지털 리터러시 교육 연구학교 지정(초 2교, 중 1교)",
      "디지털 기반 미래형 유치원 「미래아이(AI)유치원」 운영(8개원)",
      "인프라 공동 활용 디지털·AI 기반 교육 지원학교 운영(초 6교, 중 4교, 고 2교)"
    ]
  },
  {
    id: "prompt-engineering",
    title: "질문하는 힘을 키워주는 프롬프트 엔지니어링 과정 운영",
    category: "admin",
    schoolLevel: "staff",
    isNew: false,
    isPledge: true,
    dept: "디지털미래교육과 / 교육연구정보원",
    page: "p.28",
    summary: "교사의 질문 및 AI 활용 설계 역량을 키우는 프롬프트 엔지니어링 프로젝트팀 구성과 직무연수 및 사제동행 경진대회 개최",
    details: [
      "교과별 프롬프트 엔지니어링 프로젝트팀(15팀) 구성 및 운영",
      "프롬프트 엔지니어링 및 AI 활용 역량 강화 교원 직무연수(5~10월, 초·중·고 2회)",
      "교과 연계 및 실습형 프롬프트 엔지니어링 활용 교단지원자료 개발·보급(4~12월)",
      "생성형 AI 활용 프롬프트 설계 사제동행 경진대회 운영(5월)"
    ]
  },
  {
    id: "ai-eval-system",
    title: "AI 기반 과정중심 서·논술형 평가 및 AI 채점 시스템 도입",
    category: "eval",
    schoolLevel: "elementary",
    isNew: true,
    isPledge: true,
    dept: "초등교육과 / 중등교육과",
    page: "p.16, 39, 77",
    summary: "사고력 측정을 위한 서·논술형 평가를 강화하고, AI 학습데이터 구축 및 과정중심 AI 채점 프로그램 예시문항 보급",
    details: [
      "서·논술형 평가 AI 학습데이터 구축 협력학교 공모 및 선정(상반기)",
      "과정중심 서·논술형 평가 AI 채점 프로그램 예시문항 개발 및 학교 보급(하반기)",
      "개인정보보호 및 과목별 채점 데이터베이스 구축, 표준문항 개발 평가시스템 적용",
      "학생 맞춤형 누적 학습 데이터 분석 및 개별 맞춤 평가 피드백 제공",
      "고차원적 사고력 중심 서·논술형 평가 문항 보급(초 260문항, 중·고 130문항)"
    ]
  },
  {
    id: "concept-apply-model",
    title: "AI 활용 '개념-적용학습 수업모형' 적용 (생각하고 질문하는 수업)",
    category: "teaching",
    schoolLevel: "middle",
    isNew: false,
    isPledge: true,
    dept: "초등교육과 / 중등교육과",
    page: "p.39, 76",
    summary: "생성형 AI 맞춤 질문으로 개념을 이해하고 확장하여 실생활 연계 문제를 협력적으로 해결하는 미래형 교실 수업 구현",
    details: [
      "개념학습 3단계: [AI 질문하기] → [깊이 생각하기] → [AI로 표현하기]",
      "적용학습 3단계: [실생활 적용학습] → [AI 표현하기] → [협력적 문제 해결하기]",
      "중등 전체 학교 대상 「생각하고, 질문하는 수업」 전면 실시",
      "자기주도적 질문 문화 확산을 위한 「질문하는 학교」 선도학교 운영(7교)",
      "학생 주도 배움 중심 수업·평가 모델 개발 연구학교 운영(초 3교)"
    ]
  },
  {
    id: "pen-ai-entrance",
    title: "AI 활용 맞춤형 진학지원 「진학 PEN AI」 및 모의면접 지원",
    category: "custom",
    schoolLevel: "high",
    isNew: false,
    isPledge: true,
    dept: "학력개발원 (부산진로진학지원센터)",
    page: "p.23, 44",
    summary: "생성형 AI 기반 모의면접 및 대입 시뮬레이터를 통해 진학 정보 격차를 해소하고 1:1 진학 컨설팅 연계",
    details: [
      "일반 제시문 및 학교생활기록부 기반 AI 모의면접 및 자동 분석 결과 리포트 제공",
      "AI 진학 시뮬레이터 및 상담 참고 프로그램 상시 운영",
      "대입 전형 대학·학과 정보, 수시·정시 일람표, 면접 후기 DB 통합",
      "「진학 PEN AI」 고도화: 사용자 만족도 반영 DB 업데이트 및 면접 기능 정교화",
      "부산진로진학지원센터 홈페이지 연동을 통한 학생·학부모 접근성 극대화"
    ]
  },
  {
    id: "penteracy-english",
    title: "AI 기반 자기주도 영어 문해력 프로그램 「펜터러시 (Penteracy)」",
    category: "custom",
    schoolLevel: "middle",
    isNew: true,
    isPledge: false,
    dept: "교육정책연구소 / 중등교육과",
    page: "p.32, 62",
    summary: "Pen+Literacy 합성어로 학생 입력 단어 데이터를 분석해 맞춤 학습 경로를 확장하고 발음 교정을 지원하는 자기주도 학습 툴",
    details: [
      "학생이 입력한 단어를 누적 분석하여 개별 학습 흐름 데이터 자동 생성",
      "학생의 흥미와 이해도에 따른 맞춤형 학습자료 제공 및 개인화 학습 경로 확장",
      "생소-혼돈-친숙 단계로 구성된 반복 학습 유도로 실시간 AI 발음 연습 및 교정 지원",
      "중·고등학생 대상에서 초등학생까지 학습 대상 범위 단계적 확대",
      "국어, 수리력 등 다양한 기초 학습 영역으로 활용 플랫폼 확대 추진"
    ]
  },
  {
    id: "ai-math-quest",
    title: "AI 활용 초등수학수업지원시스템 「똑똑! 수학탐험대」 운영",
    category: "custom",
    schoolLevel: "elementary",
    isNew: true,
    isPledge: false,
    dept: "초등교육과 / 창의융합교육원 / 학력개발원",
    page: "p.18, 35",
    summary: "초등학교 전체를 대상으로 인공지능 기반 수학 진단 및 개별 맞춤 학습을 지원하여 기초 수리력 결손 예방",
    details: [
      "전체 초등학교 대상 AI 활용 초등수학수업지원시스템 「똑똑! 수학탐험대」 운영",
      "학생별 취약 개념 실시간 AI 진단 및 맞춤형 문제 추천",
      "부산수학문화관 연계 AI 수학 등 개인별 맞춤형 체험수학 프로그램 운영",
      "수학교사 대상 AI 및 공학도구(알지오매스 등) 활용 역량 강화 직무연수 운영"
    ]
  },
  {
    id: "free-ai-afterschool",
    title: "초등 AI 활용 방과후 프로그램 전면 무상 & AI 맞춤 돌봄 플랫폼",
    category: "care",
    schoolLevel: "elementary",
    isNew: true,
    isPledge: true,
    dept: "초등교육과 / 유아교육과",
    page: "p.18, 22, 42, 43",
    summary: "초등 AI 방과후 프로그램을 전면 무상 제공하고, AI 기반 개별 학생 맞춤 추천 및 상담이 가능한 통합플랫폼 도입",
    details: [
      "미래사회 신수요를 반영한 초등 AI 활용 방과후 프로그램 전면 무상 제공(초등 전학년)",
      "(가칭)초등 방과후·돌봄 통합플랫폼: AI 기반 개별 학생 맞춤 방과후 강좌 추천 서비스",
      "프로그램 신청 실시간 챗봇 상담 및 문의 응답 기능 도입으로 학부모 편의성 제고",
      "지역 전문기관 연계 AI 활용 방과후 체험 프로그램 운영(4~12월, 초1~3 40교)",
      "방학 중 늘봄전용학교 4교 대상 AI 활용 학습형 늘봄 프로그램 무상 운영"
    ]
  },
  {
    id: "ai-guidelines-tutors",
    title: "생성형 AI 교육 가이드라인 마련 & 디지털 튜터 지원",
    category: "infra",
    schoolLevel: "all",
    isNew: false,
    isPledge: true,
    dept: "디지털미래교육과 / 교육연구정보원",
    page: "p.16, 27",
    summary: "안전하고 윤리적인 AI 사용을 위한 가이드라인 보급과 교육격차 해소를 위한 학교 현장 디지털 튜터 배치",
    details: [
      "교수·학습자용 생성형 AI 활용 원칙 및 학교 현장 적용 기준 가이드라인 수립·배포",
      "개인정보 보호, 저작권, 딥페이크, 표절 등 핵심 위험 요소를 반영한 사례 중심 안전 지침",
      "디지털·AI 교육격차 해소를 위한 「디지털튜터」 단위학교 배치 지원",
      "초·중 정보(실과) 교과 내 SW·AI 실습비 전면 지원(전체 초·중학교)"
    ]
  },
  {
    id: "coding-edu-center",
    title: "디지털·AI 알고리즘 교육 및 SW·AI 거점센터 운영",
    category: "custom",
    schoolLevel: "middle",
    isNew: false,
    isPledge: true,
    dept: "디지털미래교육과 / 교육연구정보원",
    page: "p.28",
    summary: "초·중 교재 보급, 부산에듀원2.0 운영, 대학 연계 로봇·AI 실습 및 연간 800학급 규모 SW·AI거점센터 체험 지원",
    details: [
      "초등 「디지털은 내 친구」, 중등 「정보 플러스」 교재 활용 디지털·AI 기초소양 교육",
      "코딩교육 교수학습 플랫폼 「부산에듀원 2.0」 운영 및 활용 지원",
      "지역 대학 연계 중·고등학생 AI·코딩(로봇) 교육 지원",
      "SW·AI 해커톤 대회(8월, 중·고 30팀) 및 SW·AI 학생동아리(50팀) 운영",
      "SW·AI교육거점센터: 초·중·고 연중 체험(800학급) 및 로보틱스·양자컴퓨터 특화(60학급) 교육"
    ]
  },
  {
    id: "multicultural-special-ai",
    title: "다문화·특수교육 맞춤형 AI 지원 (AI 한국어 / 로봇 AI / 데이터라벨러)",
    category: "care",
    schoolLevel: "all",
    isNew: true,
    isPledge: true,
    dept: "민주시민교육과 / 초등교육과",
    page: "p.48, 49, 50, 94, 96, 98",
    summary: "다문화학생 AI 통번역·한국어 지원, 특수학급 AI 로봇 교육, 장애학생 AI 데이터라벨러 전문 직무 훈련 실시",
    details: [
      "다문화학생: AI 한국어 학습프로그램 보급(유·초·중 300명) 및 AI 기반 동시통역 자막 서비스(20교)",
      "특수교육: 로봇 활용 인공지능 기반 교육 운영학교 지원(특수 2교, 일반 4교)",
      "특수학교 장애 맞춤형 IoT 스마트교실 구축(50실)",
      "장애학생 맞춤 직업교육: AI·데이터 산업 발달에 따른 'AI 데이터라벨러 양성 프로그램' 운영(10교)"
    ]
  },
  {
    id: "vocational-ai-reform",
    title: "직업계고 첨단 신기술(AI·반도체) 연계 학과 개편 및 인재 양성",
    category: "custom",
    schoolLevel: "high",
    isNew: false,
    isPledge: true,
    dept: "디지털미래교육과",
    page: "p.44, 45, 87, 88",
    summary: "AI 및 반도체 등 지역 핵심 신산업 수요에 맞춰 직업계고 학과를 재구조화하고 AI 역량 강화 지원",
    details: [
      "AI·반도체 등 첨단 분야 연계 직업계고 학과 개편 지원(7학과, 15학급)",
      "미래산업 수요 대비 특성화고 AI 역량 강화 지원사업 우수 모델 발굴(6교)",
      "(가칭)미래기술교육캠퍼스를 통한 AI, 로봇, 디지털트윈, 반도체 실무 교육 지원",
      "AI 활용 직업계고 취업 지원 플랫폼 「하이잡아도」 기능 고도화"
    ]
  },
  {
    id: "curriculum-hours-policy",
    title: "학교 교육과정 정보(SW·AI) 필수 시수 편성 기준",
    category: "infra",
    schoolLevel: "all",
    isNew: true,
    isPledge: false,
    dept: "디지털미래교육과 / 초·중등교육과",
    page: "p.93, 183, 185",
    summary: "2026학년도 초·중·고 단위학교 교육과정 필수 반영 정보 및 디지털 소양 시수 기준 공식 명시",
    details: [
      "초 5~6학년: 2026학년도 1학기부터 실과 또는 창체 34시간 이상 디지털 교육 필수 편성",
      "초 3~4학년: 2026학년도 1학기부터 창체 또는 학교자율시간 17시간 이상 디지털 소양교육 편성",
      "초 1~2학년: 2026학년도 1학기부터 창체 17시간 이상 디지털 소양교육 편성",
      "중학교: 2025학년도 이후 신입생 정보교과 68시간 이상 필수 편성 (타 선택교과로 대체 불가)",
      "정보윤리 필수: 초·중·고 정보윤리교육 연간 10차시 중 AI 윤리교육(1차시), 딥페이크 예방교육(1차시) 필수 포함"
    ]
  },
  {
    id: "ai-policy-research-chatbot",
    title: "AI·데이터 기반 교육행정 혁신 및 24시간 민원 챗봇 「알리도」",
    category: "admin",
    schoolLevel: "staff",
    isNew: true,
    isPledge: true,
    dept: "교육정책연구소 / 노사행정정보과 / 총무과",
    page: "p.46, 75, 78, 91, 149, 154",
    summary: "빅데이터 및 AI 분석을 통한 교육정책 의사결정 수립과 24시간 민원 챗봇을 통한 대시민 소통 지원",
    details: [
      "부산교육 연구 데이터 기반 AI·데이터 정책 연구 및 교육청 업무 자동화·효율화 방안 연구",
      "공공도서관 AI 도서 추천 키오스크 도입을 통한 개인 맞춤 정보 제공(p.139)",
      "교육행정데이터통합관리시스템 활성화 및 교직원 데이터 활용 역량 강화",
      "24시간 민원상담 AI 챗봇 「알리도」 지식 데이터베이스 확장 및 사전 알림 기능 고도화"
    ]
  }
];

// 카테고리 매핑
const categoryNames = {
  all: "전체 과제",
  vision: "1. 비전 및 미래형 학교",
  teaching: "2. AI 교수·학습",
  eval: "3. AI 평가 및 채점",
  admin: "4. AI 행정 및 교원 지원",
  custom: "5. 학생 맞춤 학력·진로",
  care: "6. 늘봄·돌봄 & 교육복지",
  infra: "7. 교육과정 & 윤리·인프라"
};

const schoolLevelNames = {
  all: "전체 학교급",
  elementary: "초등학교",
  middle: "중학교",
  high: "고등학교",
  staff: "교직원·행정"
};

// DOM 요소 참조
let currentCategory = "all";
let currentLevel = "all";
let currentSearch = "";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCategoryTabs();
  renderPolicies();
  setupEventListeners();
});

// 테마 토글 초기화
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  document.getElementById("themeToggleBtn").addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeIcon(nextTheme);
    showToast(`${nextTheme === "dark" ? "다크" : "라이트"} 모드로 전환되었습니다.`);
  });
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (theme === "dark") {
    btn.innerHTML = `☀️`;
    btn.title = "라이트 모드로 변경";
  } else {
    btn.innerHTML = `🌙`;
    btn.title = "다크 모드로 변경";
  }
}

// 카테고리 탭 렌더링
function renderCategoryTabs() {
  const container = document.getElementById("categoryTabs");
  container.innerHTML = "";

  Object.entries(categoryNames).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${key === currentCategory ? "active" : ""}`;
    btn.textContent = label;
    btn.addEventListener("click", () => {
      currentCategory = key;
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPolicies();
    });
    container.appendChild(btn);
  });
}

// 정책 카드 렌더링
function renderPolicies() {
  const grid = document.getElementById("policyGrid");
  const countEl = document.getElementById("resultsCount");
  
  const filtered = aiPolicies.filter(item => {
    const matchCategory = currentCategory === "all" || item.category === currentCategory;
    const matchLevel = currentLevel === "all" || item.schoolLevel === "all" || item.schoolLevel === currentLevel;
    const matchSearch = !currentSearch || 
      item.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.summary.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.dept.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.details.some(d => d.toLowerCase().includes(currentSearch.toLowerCase()));

    return matchCategory && matchLevel && matchSearch;
  });

  countEl.textContent = `총 ${filtered.length}개 과제`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <p style="font-size: 16px; font-weight: 600; color: var(--text-muted); margin-bottom: 8px;">검색 조건에 일치하는 AI 과제가 없습니다.</p>
        <p style="font-size: 13px; color: var(--text-light);">검색어 또는 필터 조건을 변경해 보세요.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="policy-card" onclick="openModal('${item.id}')">
      <div class="card-top">
        <div class="card-badges">
          <span class="badge badge-cat">${categoryNames[item.category] || item.category}</span>
          ${item.isNew ? '<span class="badge badge-new">신규</span>' : ''}
          ${item.isPledge ? '<span class="badge badge-pledge">공약</span>' : ''}
        </div>
        <span class="card-page">${item.page}</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-summary">${item.summary}</p>
      <div class="card-footer">
        <span class="card-dept">🏢 ${item.dept}</span>
        <span class="card-more">세부계획 →</span>
      </div>
    </div>
  `).join("");
}

// 이벤트 리스너 등록
function setupEventListeners() {
  const searchInput = document.getElementById("searchInput");
  const schoolFilter = document.getElementById("schoolLevelFilter");

  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    renderPolicies();
  });

  schoolFilter.addEventListener("change", (e) => {
    currentLevel = e.target.value;
    renderPolicies();
  });

  // Modal 닫기 이벤트
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// 모달 열기
function openModal(id) {
  const policy = aiPolicies.find(p => p.id === id);
  if (!policy) return;

  document.getElementById("modalTitle").textContent = policy.title;
  document.getElementById("modalDept").textContent = policy.dept;
  document.getElementById("modalPage").textContent = policy.page;
  document.getElementById("modalLevel").textContent = schoolLevelNames[policy.schoolLevel] || policy.schoolLevel;
  document.getElementById("modalType").textContent = `${policy.isNew ? '신규 ' : ''}${policy.isPledge ? '공약 ' : ''}`.trim() || '일반 추진';
  document.getElementById("modalSummary").textContent = policy.summary;

  const listContainer = document.getElementById("modalList");
  listContainer.innerHTML = policy.details.map(d => `<li>${d}</li>`).join("");

  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

// 모달 닫기
function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// 요약 클립보드 복사
function copySummaryToClipboard() {
  const text = `[2026 부산교육 주요업무계획 AI 핵심 과제 요약]
- AI시대를 선도하는 인간중심 미래교육 (부산 미래형 학교 모델)
- 부산교육 AI 튜터 「BeAT」 구축·보급 (교사용 보조교사 & 학생용 학습튜터)
- 행정 AI 비서 「PenGPT」 제공 (교직원 단순·반복 행정업무 경감)
- 서·논술형 AI 채점 시스템 및 학습데이터 구축
- AI 활용 진학 지원 「진학 PEN AI」 및 모의면접
- AI 영어 문해력 「펜터러시(Penteracy)」 & 초등 AI 방과후 전면 무상 지원
- 초·중 정보(SW·AI) 필수 시수 강화 (초5~6학년 34h, 중학교 68h 이상)`;

  navigator.clipboard.writeText(text).then(() => {
    showToast("📋 AI 정책 요약본이 클립보드에 복사되었습니다!");
  }).catch(() => {
    showToast("복사에 실패했습니다.");
  });
}

// 토스트 메시지
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}
