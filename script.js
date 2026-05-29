// main.js

// ------------------------
// Typed effect with EN/JP support
// ------------------------
(function () {
  const phrases = {
    en: ['Frontend Developer', 'Web Developer', 'System Engineer'],
    jp: ['フロントエンド開発者', 'ウェブ開発者', 'システムエンジニア']
  };

  const el = document.getElementById('typed-target');
  let lang = 'en';
  let i = 0, j = 0, forward = true, text = '';

  function tick() {
    const currentPhrases = phrases[lang];
    const full = currentPhrases[i];

    if (forward) {
      text = full.slice(0, j + 2);
      j++;
      if (j === full.length) {
        forward = false;
        setTimeout(tick, 900);
        return;
      }
    } else {
      text = full.slice(0, j - 1);
      j--;
      if (j === 0) {
        forward = true;
        i = (i + 1) % currentPhrases.length;
      }
    }

    el.textContent = text;
    setTimeout(tick, forward ? 80 : 50);
  }

  window.setTypedLang = function (newLang) {
    if (phrases[newLang]) {
      lang = newLang;
      i = 0;
      j = 0;
      forward = true;
      text = '';
    }
  };

  tick();
})();

// IMAGE POPUP
const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".popup-close");

document.querySelectorAll(".project-img, .profile-img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});


// ------------------------
// Language toggle (EN / JP)
// ------------------------
const langEnBtn = document.getElementById('lang-en');
const langJpBtn = document.getElementById('lang-jp');

function setLang(lang) {
  const isEn = lang === 'en';

  langEnBtn.classList.toggle('active', isEn);
  langJpBtn.classList.toggle('active', !isEn);
  langEnBtn.setAttribute('aria-pressed', isEn);
  langJpBtn.setAttribute('aria-pressed', !isEn);

  document.getElementById('logoname').textContent = isEn ? "Saw Thar Htoo Kyaw" : 'ソータートゥチョー';
  document.getElementById('greeting-en').textContent = isEn ? "Hello — I'm" : 'こんにちは — 私は';
  document.getElementById('name').textContent = isEn ? "Saw Thar Htoo Kyaw" : 'ソータートゥチョー';
  document.getElementById('intro-en').textContent = isEn
    ? 'Frontend developer focused on responsive UI, performance, and clean code. Experienced converting designs into production-ready interfaces and integrating backend APIs.'
    : 'レスポンシブなUI、パフォーマンス、読みやすいコードに重点を置くフロントエンド開発者です。デザインを本番用インターフェースに変換し、バックエンドAPIと統合した経験があります。';
  document.getElementById('about-span').textContent = isEn ? 'Me' : '私';
  document.getElementById('about-en').textContent = isEn
    ? 'I studied Zoology at West Yangon University but transitioned to web development after the pandemic. I studied at JPGA (2023–2025) and currently attend ECC vocational school to deepen my web development skills.'
    : '私はWest Yangon大学で動物学を学んでいましたが、パンデミック後にウェブ開発へ転向しました。JPGAで学び（2023〜2025）、現在はECCでウェブ開発を学んでいます。';
  document.getElementById('edu-title').textContent = isEn ? 'Education' : '学歴';
  document.getElementById('edu-en').textContent = isEn
    ? 'West Yangon University — Zoology (incomplete)\nJPGA — Web Studies (2023–2025)\nECC — Current (Web Development)'
    : 'West Yangon大学 — 動物学（中断）\nJPGA — ウェブ学習（2023〜2025）\nECC — 現在（ウェブ開発）';
  document.getElementById('work-title').textContent = isEn ? 'Languages' : '言語';
  document.getElementById('work-en').textContent = isEn
    ? 'Burmese (native), Japanese (studying), English (conversational)'
    : 'ビルマ語（ネイティブ）、日本語（学習中）、英語（会話可）';
  document.getElementById('footer-name').textContent = isEn
    ? 'Saw Thar Htoo Kyaw'
    : 'ソータートゥチョー (Saw Thar Htoo Kyaw)';

  // ------------------------
  // Skills Section
  // ------------------------
  document.getElementById('skills-title').textContent = isEn ? "Skills" : "スキル";
  document.getElementById('skills-sub').textContent = isEn ? "Core frontend skills and tools I use." : "主に使用しているフロントエンドスキルとツールです。";
  document.getElementById('html-desc').textContent = isEn ? "Semantic HTML structure, clean markup, and accessibility-focused layouts." : "セマンティックHTML、クリーンなマークアップ、アクセシビリティを意識した構造。";
  document.getElementById('css-desc').textContent = isEn ? "Responsive design, Flexbox, Grid, animations, and modern UI styling." : "レスポンシブデザイン、Flexbox、Grid、アニメーション、モダンなUIスタイル。";
  document.getElementById('js-desc').textContent = isEn ? "Interactive UI, DOM manipulation, event handling, and modular code." : "インタラクティブなUI、DOM操作、イベント処理、モジュール化されたコード。";
  document.getElementById('mysql-desc').textContent = isEn ? "Database design, queries, CRUD operations, and integration with server-side Java." : "データベース設計、クエリ、CRUD操作、サーバーサイドJavaとの連携。";
  document.getElementById('java-desc').textContent = isEn ? "Object-oriented programming, backend logic, and integration with database systems." : "オブジェクト指向開発、バックエンドロジック、データベース連携。";
  document.getElementById('servlet-desc').textContent = isEn ? "Server-side request handling, MVC architecture, and dynamic web application development." : "サーバーサイドのリクエスト処理、MVCアーキテクチャ、動的Webアプリ開発。";

  // ------------------------
  // Projects Section
  // ------------------------
  document.getElementById('projects-title').textContent = isEn ? "Projects" : "プロジェクト";
  document.getElementById('projects-sub').textContent = isEn ? "Childhood Games" : "子供の頃のゲーム";

  // Project 3: Rock Paper Scissors
  document.getElementById('project3-title').textContent = isEn ? "Rock Paper Scissors" : "じゃんけんゲーム";
  document.getElementById('project3-desc').textContent = isEn ? "A classic Rock, Paper, Scissors game featuring an interactive UI and score tracking." : "インタラクティブなUIとスコア記録機能を備えた、クラシックなじゃんけんゲーム。";
  document.getElementById('project3-tech-label').textContent = isEn ? "Tech:" : "技術:";

  // Project 4: Color Match
  document.getElementById('project4-title').textContent = isEn ? "Color Match" : "カラーマッチング";
  document.getElementById('project4-desc').textContent = isEn ? "A vibrant color-matching puzzle game designed to test your visual speed and accuracy." : "視覚的なスピードと正確性をテストするために設計された、鮮やかな色彩のパズルゲーム。";
  document.getElementById('project4-tech-label').textContent = isEn ? "Tech:" : "技術:";

  // Project 5: Snake Game
  document.getElementById('project5-title').textContent = isEn ? "Snake Game" : "スネークゲーム";
  document.getElementById('project5-desc').textContent = isEn ? "The traditional arcade Snake game built from scratch, featuring smooth controls and high-score saving." : "スムーズな操作性とハイスコア保存機能を備えた、一から構築された伝統的なスネークゲーム。";
  document.getElementById('project5-tech-label').textContent = isEn ? "Tech:" : "技術:";

  document.getElementById('contact-title').textContent = isEn ? "Contact" : "お問い合わせ";
  document.getElementById('contact-sub').textContent = isEn ? "Send me a message or find me on GitHub / Twitter / Instagram" : "メール、GitHub / Twitter / Instagram でご連絡ください。";

  window.setTypedLang(lang);
}

langEnBtn.addEventListener('click', () => setLang('en'));
langJpBtn.addEventListener('click', () => setLang('jp'));
