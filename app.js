const DOMAINS = [
  { id: 1, weight: 30, accent: "#296a50", en: "Design Secure Architectures", ko: "보안 아키텍처 설계", tasks: 3 },
  { id: 2, weight: 26, accent: "#ff9156", en: "Design Resilient Architectures", ko: "복원력 있는 아키텍처 설계", tasks: 2 },
  { id: 3, weight: 24, accent: "#6a8cff", en: "Design High-Performing Architectures", ko: "고성능 아키텍처 설계", tasks: 5 },
  { id: 4, weight: 20, accent: "#d4a82c", en: "Design Cost-Optimized Architectures", ko: "비용 최적화 아키텍처 설계", tasks: 4 },
];

const TASK_NAMES = {
  "1.1": { en: "Secure access to AWS resources", ko: "AWS 리소스에 대한 보안 액세스" },
  "1.2": { en: "Secure workloads and applications", ko: "워크로드와 애플리케이션 보안" },
  "1.3": { en: "Appropriate data security controls", ko: "적절한 데이터 보안 제어" },
  "2.1": { en: "Scalable and loosely coupled architectures", ko: "확장 가능하고 느슨하게 결합된 아키텍처" },
  "2.2": { en: "Highly available and fault-tolerant architectures", ko: "고가용성 및 내결함성 아키텍처" },
  "3.1": { en: "High-performing and scalable storage", ko: "고성능 및 확장 가능한 스토리지" },
  "3.2": { en: "High-performing and elastic compute", ko: "고성능 및 탄력적 컴퓨팅" },
  "3.3": { en: "High-performing database solutions", ko: "고성능 데이터베이스 솔루션" },
  "3.4": { en: "High-performing and scalable networks", ko: "고성능 및 확장 가능한 네트워크" },
  "3.5": { en: "High-performing data ingestion and transformation", ko: "고성능 데이터 수집 및 변환" },
  "4.1": { en: "Cost-optimized storage", ko: "비용 최적화 스토리지" },
  "4.2": { en: "Cost-optimized compute", ko: "비용 최적화 컴퓨팅" },
  "4.3": { en: "Cost-optimized databases", ko: "비용 최적화 데이터베이스" },
  "4.4": { en: "Cost-optimized networks", ko: "비용 최적화 네트워크" },
};

const COPY = {
  en: {
    dashboard: "Dashboard", practice: "Practice", wrongAnswers: "Wrong answers", favorites: "Favorites",
    examMode: "Exam mode", questions: "questions", examDescription: "Official 30 / 26 / 24 / 20 domain weighting.", startExam: "Start exam",
    resetProgress: "Reset progress", studyWorkspace: "Study workspace", guideAligned: "Guide-aligned question bank",
    heroTitle: "Build judgment,<br />not just recall.", heroBody: "Practice 880 bilingual questions mapped to every SAA-C03 content domain and task.",
    continueStudy: "Continue studying", randomSet: "Random 10", complete: "complete", answered: "Answered", correct: "Correct", toReview: "To review",
    officialBlueprint: "Official blueprint", domains: "Content domains", blueprintHint: "Choose a domain to practice its task-level question set.",
    distribution: "Exam distribution", weightedPractice: "Weighted practice", distributionBody: "Exam mode draws 65 questions using the official scored-content weighting.",
    previous: "Previous", checkAnswer: "Check answer", next: "Next", sessionMap: "Session map", wrong: "Wrong", current: "Current", exitSession: "Exit session",
    browseQuestions: "Browse questions", selectOne: "Select one answer.", selectMany: n => `Select ${n} answers.`, correctAnswer: "Correct — good call.", incorrectAnswer: "Not quite. Review the reasoning below.",
    noExplanation: "No explanation was included in the source material.", allDomains: "All domains", practiceSession: "Practice session", randomPractice: "Random practice",
    wrongReview: "Wrong-answer review", favoriteReview: "Favorite review", weightedExam: "Weighted 65-question exam", bankQuestions: "bank questions", taskGroups: "task groups",
    nothingWrong: "No wrong answers to review", nothingWrongCopy: "Missed questions will be collected here automatically.",
    nothingFavorite: "No favorites yet", nothingFavoriteCopy: "Use the star on a question to save it here.",
    noSearch: "No matching questions", noSearchCopy: "Try another service name or phrase.", confirmReset: "Reset all answers, wrong questions, and favorites?", resetDone: "Progress reset.",
    saved: "Added to favorites.", removed: "Removed from favorites.", sessionComplete: "Session complete", mastered: "Removed from wrong answers after a correct retry.",
    searchPlaceholder: "Search questions or services", sourceNote: "Classification is a study aid; verify disputed answers against current AWS documentation."
  },
  ko: {
    dashboard: "대시보드", practice: "문제 풀이", wrongAnswers: "오답 노트", favorites: "즐겨찾기",
    examMode: "시험 모드", questions: "문항", examDescription: "공식 도메인 비중 30 / 26 / 24 / 20 적용", startExam: "시험 시작",
    resetProgress: "학습 기록 초기화", studyWorkspace: "학습 워크스페이스", guideAligned: "시험 안내서 기반 문제 은행",
    heroTitle: "암기보다<br />판단력을 키우세요.", heroBody: "SAA-C03의 모든 도메인과 태스크에 매핑된 영·한 880문제를 연습하세요.",
    continueStudy: "계속 학습하기", randomSet: "무작위 10문제", complete: "완료", answered: "푼 문제", correct: "정답", toReview: "복습 필요",
    officialBlueprint: "공식 시험 청사진", domains: "콘텐츠 도메인", blueprintHint: "도메인을 선택하여 태스크별 문제를 연습하세요.",
    distribution: "시험 출제 비중", weightedPractice: "가중치 적용 연습", distributionBody: "시험 모드는 공식 출제 비중에 따라 65문항을 구성합니다.",
    previous: "이전", checkAnswer: "정답 확인", next: "다음", sessionMap: "세션 맵", wrong: "오답", current: "현재", exitSession: "세션 종료",
    browseQuestions: "문제 둘러보기", selectOne: "정답 하나를 선택하세요.", selectMany: n => `정답 ${n}개를 선택하세요.`, correctAnswer: "정답입니다. 좋아요!", incorrectAnswer: "아쉽지만 오답입니다. 아래 해설을 확인하세요.",
    noExplanation: "원본 자료에 해설이 포함되어 있지 않습니다.", allDomains: "전체 도메인", practiceSession: "연습 세션", randomPractice: "무작위 연습",
    wrongReview: "오답 복습", favoriteReview: "즐겨찾기 복습", weightedExam: "가중치 적용 65문항 시험", bankQuestions: "문제", taskGroups: "태스크",
    nothingWrong: "복습할 오답이 없습니다", nothingWrongCopy: "틀린 문제는 자동으로 이곳에 모입니다.",
    nothingFavorite: "즐겨찾기가 없습니다", nothingFavoriteCopy: "문제의 별표를 눌러 저장하세요.",
    noSearch: "일치하는 문제가 없습니다", noSearchCopy: "다른 서비스 이름이나 문구로 검색해 보세요.", confirmReset: "정답 기록, 오답, 즐겨찾기를 모두 초기화할까요?", resetDone: "학습 기록을 초기화했습니다.",
    saved: "즐겨찾기에 추가했습니다.", removed: "즐겨찾기에서 제거했습니다.", sessionComplete: "세션 완료", mastered: "재도전에서 맞혀 오답 노트에서 제거했습니다.",
    searchPlaceholder: "문제 또는 서비스 검색", sourceNote: "분류는 학습 보조용입니다. 논쟁의 여지가 있는 답은 최신 AWS 문서로 확인하세요."
  }
};

const STORAGE_KEY = "saa-compass-v1";
const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || {};
const state = {
  lang: savedState.lang || "en",
  favorites: new Set(savedState.favorites || []),
  wrong: new Set(savedState.wrong || []),
  answered: savedState.answered || {},
  lastId: savedState.lastId || 1,
  questions: [], session: [], sessionType: "practice", index: 0, selected: new Set(), revealed: false, sessionResults: {},
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const t = (key, ...args) => typeof COPY[state.lang][key] === "function" ? COPY[state.lang][key](...args) : COPY[state.lang][key];
const shuffle = arr => arr.map(v => [Math.random(), v]).sort((a,b) => a[0]-b[0]).map(([,v]) => v);
const persist = () => localStorage.setItem(STORAGE_KEY, JSON.stringify({ lang: state.lang, favorites: [...state.favorites], wrong: [...state.wrong], answered: state.answered, lastId: state.lastId }));
const localized = (obj, key) => obj[state.lang]?.[key] || obj.en?.[key] || "";

function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function setView(name) {
  $$(".view").forEach(v => v.classList.remove("active"));
  $$(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.view === name));
  if (name === "dashboard") { $("#dashboard-view").classList.add("active"); $("#page-title").textContent = t("dashboard"); renderDashboard(); }
  else if (name === "practice") { startSession(state.questions, "practice", t("allDomains")); }
  else if (name === "wrong") { startCollection("wrong"); }
  else if (name === "favorites") { startCollection("favorites"); }
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(el => { const value = t(el.dataset.i18n); if (value) el.innerHTML = value; });
  $$(".language-switch button").forEach(b => b.classList.toggle("active", b.dataset.lang === state.lang));
  $("#search-input").placeholder = t("searchPlaceholder");
  if ($("#dashboard-view").classList.contains("active")) $("#page-title").textContent = t("dashboard");
  renderDashboard(); updateCounts();
  if ($("#practice-view").classList.contains("active")) { refreshSessionChrome(); renderQuestion(); }
  persist();
}

function refreshSessionChrome() {
  const labels = {
    wrong: t("wrongReview"), favorites: t("favoriteReview"), random: t("randomPractice"),
    exam: t("weightedExam"), practice: t("allDomains")
  };
  $("#page-title").textContent = state.sessionType === "exam" ? t("examMode") : t("practice");
  $("#session-title").textContent = state.sessionType === "exam" ? t("weightedExam") : t("practiceSession");
  if (labels[state.sessionType]) $("#session-label").textContent = labels[state.sessionType];
  else if (state.sessionType === "domain" && state.session[0]) $("#session-label").textContent = DOMAINS[state.session[0].domain-1][state.lang];
}

function renderDashboard() {
  if (!state.questions.length) return;
  const answered = Object.keys(state.answered).length;
  const correct = Object.values(state.answered).filter(Boolean).length;
  const pct = Math.round(answered / state.questions.length * 100);
  $("#progress-percent").textContent = `${pct}%`;
  $(".orbit-ring").style.setProperty("--progress", `${pct * 3.6}deg`);
  $("#answered-stat").textContent = answered;
  $("#correct-stat").textContent = correct;
  $("#review-stat").textContent = state.wrong.size;
  $("#domain-grid").innerHTML = DOMAINS.map(d => {
    const qs = state.questions.filter(q => q.domain === d.id);
    const done = qs.filter(q => q.id in state.answered).length;
    const progress = Math.round(done / qs.length * 100) || 0;
    return `<button class="domain-card" data-domain="${d.id}" style="--accent:${d.accent}">
      <span class="domain-top"><i class="domain-number">D${d.id}</i><b class="domain-weight">${d.weight}%</b></span>
      <h4>${d[state.lang]}</h4><p>${d.tasks} ${t("taskGroups")} · ${qs.length} ${t("bankQuestions")}</p>
      <span class="domain-foot"><em>${progress}%</em><i class="mini-progress"><i style="width:${progress}%"></i></i><b>→</b></span>
    </button>`;
  }).join("");
  $$(".domain-card").forEach(card => card.addEventListener("click", () => {
    const d = +card.dataset.domain; const domain = DOMAINS[d-1];
    startSession(shuffle(state.questions.filter(q => q.domain === d)), "domain", domain[state.lang]);
  }));
  $("#distribution-bars").innerHTML = DOMAINS.map(d => `<span class="distribution-row"><b>D${d.id}</b><div><i style="width:${d.weight}%;background:${d.accent}"></i></div><em>${d.weight}%</em></span>`).join("");
}

function updateCounts() {
  $("#wrong-count").textContent = state.wrong.size;
  $("#favorite-count").textContent = state.favorites.size;
}

function weightedExam() {
  const counts = [20,17,15,13];
  return counts.flatMap((count, i) => shuffle(state.questions.filter(q => q.domain === i+1)).slice(0,count));
}

function startCollection(type) {
  const ids = type === "wrong" ? state.wrong : state.favorites;
  const qs = state.questions.filter(q => ids.has(q.id));
  if (!qs.length) {
    $$(".view").forEach(v => v.classList.remove("active")); $("#empty-view").classList.add("active");
    $("#page-title").textContent = type === "wrong" ? t("wrongAnswers") : t("favorites");
    $("#empty-title").textContent = type === "wrong" ? t("nothingWrong") : t("nothingFavorite");
    $("#empty-copy").textContent = type === "wrong" ? t("nothingWrongCopy") : t("nothingFavoriteCopy");
    return;
  }
  startSession(qs, type, type === "wrong" ? t("wrongReview") : t("favoriteReview"));
}

function startSession(questions, type = "practice", label = t("allDomains")) {
  if (!questions.length) return;
  state.session = questions; state.sessionType = type; state.index = 0; state.selected.clear(); state.revealed = false; state.sessionResults = {};
  $$(".view").forEach(v => v.classList.remove("active")); $("#practice-view").classList.add("active");
  $("#page-title").textContent = type === "exam" ? t("examMode") : t("practice");
  $$(".nav-item").forEach(n => n.classList.toggle("active", (type === "wrong" || type === "favorites") ? n.dataset.view === type : n.dataset.view === "practice"));
  $("#session-label").textContent = label;
  refreshSessionChrome();
  renderQuestion();
}

function questionText(q) { return localized(q, "stem"); }
function choiceText(q, key) { return q[state.lang]?.choices.find(c => c.key === key)?.text || q.en.choices.find(c => c.key === key)?.text || ""; }

function renderQuestion() {
  const q = state.session[state.index]; if (!q) return;
  state.selected = new Set(); state.revealed = false; state.lastId = q.id; persist();
  const domain = DOMAINS[q.domain-1];
  $("#question-position").textContent = `${state.index+1} / ${state.session.length}`;
  $("#session-progress-bar").style.width = `${(state.index+1)/state.session.length*100}%`;
  $("#question-domain").textContent = `D${q.domain}`;
  $("#question-domain").style.background = `color-mix(in srgb, ${domain.accent} 16%, white)`;
  $("#question-domain").style.color = domain.accent;
  $("#question-task").textContent = `Task ${q.task} · ${TASK_NAMES[q.task][state.lang]}`;
  $("#question-text").textContent = questionText(q);
  $("#selection-hint").textContent = q.answer.length > 1 ? t("selectMany", q.answer.length) : t("selectOne");
  $("#favorite-button").textContent = state.favorites.has(q.id) ? "★" : "☆";
  $("#favorite-button").classList.toggle("active", state.favorites.has(q.id));
  $("#choice-list").innerHTML = q.en.choices.map(c => `<button class="choice" data-key="${c.key}"><span class="choice-key">${c.key}</span><span class="choice-text">${choiceText(q,c.key)}</span></button>`).join("");
  $$(".choice").forEach(c => c.addEventListener("click", () => toggleChoice(c.dataset.key)));
  $("#answer-panel").hidden = true; $("#answer-panel").classList.remove("wrong");
  $("#check-answer").hidden = false; $("#check-answer").disabled = true; $("#next-question").hidden = true;
  $("#previous-question").disabled = state.index === 0;
  renderSessionMap();
}

function toggleChoice(key) {
  if (state.revealed) return;
  const q = state.session[state.index];
  if (q.answer.length === 1) state.selected = new Set([key]);
  else if (state.selected.has(key)) state.selected.delete(key); else if (state.selected.size < q.answer.length) state.selected.add(key);
  $$(".choice").forEach(c => c.classList.toggle("selected", state.selected.has(c.dataset.key)));
  $("#check-answer").disabled = state.selected.size !== q.answer.length;
}

function checkAnswer() {
  const q = state.session[state.index];
  const isCorrect = q.answer.length === state.selected.size && q.answer.every(a => state.selected.has(a));
  state.revealed = true; state.answered[q.id] = isCorrect; state.sessionResults[q.id] = isCorrect;
  if (isCorrect) { if (state.wrong.delete(q.id) && state.sessionType === "wrong") showToast(t("mastered")); }
  else state.wrong.add(q.id);
  $$(".choice").forEach(c => {
    c.disabled = true;
    if (q.answer.includes(c.dataset.key)) c.classList.add("correct");
    else if (state.selected.has(c.dataset.key)) c.classList.add("wrong");
  });
  const panel = $("#answer-panel"); panel.hidden = false; panel.classList.toggle("wrong", !isCorrect);
  $("#result-icon").textContent = isCorrect ? "✓" : "×";
  $("#result-title").textContent = isCorrect ? t("correctAnswer") : t("incorrectAnswer");
  $("#explanation-text").textContent = localized(q, "explanation") || t("noExplanation");
  $("#check-answer").hidden = true; $("#next-question").hidden = false;
  $("#next-question span").textContent = state.index === state.session.length-1 ? t("sessionComplete") : t("next");
  persist(); updateCounts(); renderSessionMap();
}

function renderSessionMap() {
  $("#session-dots").innerHTML = state.session.map((q,i) => `<button class="session-dot ${i===state.index?"current":""} ${state.sessionResults[q.id]===true?"correct":state.sessionResults[q.id]===false?"wrong":""}" data-index="${i}">${i+1}</button>`).join("");
  $$(".session-dot").forEach(d => d.addEventListener("click", () => { state.index=+d.dataset.index; renderQuestion(); }));
}

function nextQuestion() {
  if (state.index < state.session.length-1) { state.index++; renderQuestion(); }
  else { showToast(t("sessionComplete")); setView("dashboard"); }
}

function runSearch(query) {
  const needle = query.trim().toLowerCase(); if (!needle) return;
  const matches = state.questions.filter(q => `${q.en.stem} ${q.ko.stem} ${q.en.choices.map(c=>c.text).join(" ")} ${q.ko.choices.map(c=>c.text).join(" ")}`.toLowerCase().includes(needle));
  if (matches.length) startSession(matches, "search", `“${query.trim()}” · ${matches.length}`);
  else { $$(".view").forEach(v=>v.classList.remove("active")); $("#empty-view").classList.add("active"); $("#empty-title").textContent=t("noSearch"); $("#empty-copy").textContent=t("noSearchCopy"); }
}

async function init() {
  const response = await fetch("data/questions.json");
  const payload = await response.json(); state.questions = payload.questions;
  applyLanguage();
  $$(".nav-item").forEach(n => n.addEventListener("click", () => setView(n.dataset.view)));
  $$(".language-switch button").forEach(b => b.addEventListener("click", () => { state.lang=b.dataset.lang; applyLanguage(); }));
  $("#continue-study").addEventListener("click", () => { const i=Math.max(0,state.questions.findIndex(q=>q.id===state.lastId)); startSession([...state.questions.slice(i),...state.questions.slice(0,i)],"practice",t("allDomains")); });
  $("#random-set").addEventListener("click", () => startSession(shuffle(state.questions).slice(0,10),"random",t("randomPractice")));
  $("#start-exam").addEventListener("click", () => startSession(shuffle(weightedExam()),"exam",t("weightedExam")));
  $("#favorite-button").addEventListener("click", () => { const id=state.session[state.index].id; if(state.favorites.has(id)){state.favorites.delete(id);showToast(t("removed"));}else{state.favorites.add(id);showToast(t("saved"));} persist();updateCounts();renderQuestion(); });
  $("#check-answer").addEventListener("click", checkAnswer); $("#next-question").addEventListener("click", nextQuestion);
  $("#previous-question").addEventListener("click", () => { if(state.index>0){state.index--;renderQuestion();} });
  $("#exit-session").addEventListener("click", () => setView("dashboard")); $("#empty-action").addEventListener("click", () => startSession(state.questions,"practice",t("allDomains")));
  $("#search-input").addEventListener("keydown", e => { if(e.key==="Enter") runSearch(e.target.value); });
  $("#reset-progress").addEventListener("click", () => { if(confirm(t("confirmReset"))){state.favorites.clear();state.wrong.clear();state.answered={};state.lastId=1;persist();applyLanguage();showToast(t("resetDone"));} });
}

init().catch(error => { console.error(error); document.body.innerHTML = `<main style="padding:40px;font-family:system-ui"><h1>Could not load the question bank</h1><p>Run this site through the included local server instead of opening index.html directly.</p></main>`; });
