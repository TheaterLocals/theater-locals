"use client";
import { useState, useEffect, useRef } from "react";

const content = {
  jp: {
    nav: ["物語を見る", "擬似体験する", "お土産を買う", "旅に出る"],
    heroEyebrow: "三浦半島、神奈川",
    heroTitle: "五感で感じる三浦半島を。",
    heroSub: "城ヶ島の朝霧、三崎のまぐろ、漁師の笑顔。\nここには、まだ知らない日本がある。",
    heroCta1: "旅をはじめる",
    heroCta2: "体験を見る",
    chapter1: "夜明け前の港",
    chapter1Sub: "DAWN",
    articles: [
      { tag: "漁師の朝", title: "三崎港、夜明け前", desc: "まだ暗いうちから船が出る。40年間、海と向き合ってきた漁師が語る、一日のはじまり。", time: "05:30" },
      { tag: "食文化", title: "三浦大根と冬の食卓", desc: "江戸時代から続く三浦大根の歴史と、地元のおばあちゃんから受け継がれた料理の知恵。", time: "07:00" },
      { tag: "風景", title: "城ヶ島の朝霧", desc: "島が目を覚ます時間。漁師たちが語る、霧の中の島の静けさ。", time: "06:15" },
    ],
    chapter2: "擬似体験イベント",
    chapter2Sub: "EXPERIENCE",
    chapter2Desc: "現地に行かなくても、三浦半島の空気を感じられるコンテンツ。",
    experiences: [
      { num: "01", title: "三崎漁港の夜明け", type: "映像体験", duration: "15分" },
      { num: "02", title: "地元料理人の台所", type: "インタラクティブ", duration: "20分" },
      { num: "03", title: "城ヶ島一周ガイド", type: "音声ガイド", duration: "45分" },
    ],
    chapter3: "夕暮れのおみやげ",
    chapter3Sub: "SHOP",
    chapter3Desc: "旅の記憶を、食卓に持ち帰る。",
    products: [
      { name: "三浦大根　干し大根セット", price: "¥1,800", origin: "三浦市" },
      { name: "城ヶ島産　天然わかめ", price: "¥2,400", origin: "城ヶ島" },
      { name: "三崎まぐろ　ツナ缶6個入り", price: "¥3,200", origin: "三崎港" },
      { name: "地元農家の　野菜詰め合わせ", price: "¥3,800", origin: "三浦半島" },
    ],
    chapter4: "旅に出る",
    chapter4Sub: "RESERVE",
    chapter4Desc: "地元の案内人と一緒に、三浦半島を歩きませんか。",
    fields: [
      { label: "お名前", type: "text", placeholder: "山田 太郎" },
      { label: "メールアドレス", type: "email", placeholder: "your@email.com" },
      { label: "気になる体験", type: "text", placeholder: "例：漁港の早朝ツアー" },
      { label: "ご希望日", type: "date", placeholder: "" },
    ],
    submitBtn: "旅のリクエストを送る",
    chatBtn: "旅の相談をする",
    footer: "© 2026 Theater Locals. All rights reserved.",
  },
  en: {
    nav: ["Stories", "Experience", "Shop", "Go There"],
    heroEyebrow: "Miura Peninsula, Kanagawa",
    heroTitle: "Your journey starts here.",
    heroSub: "Morning mist over Jogashima, tuna at Misaki port,\na fisherman's smile. A Japan you haven't met yet.",
    heroCta1: "Start the Journey",
    heroCta2: "See Experiences",
    chapter1: "Before Dawn at the Port",
    chapter1Sub: "DAWN",
    articles: [
      { tag: "Fisherman's Morning", title: "Misaki Port, Before Sunrise", desc: "The boats leave before light. A fisherman who has faced the sea for 40 years shares how his day begins.", time: "05:30" },
      { tag: "Food Culture", title: "Miura Daikon & the Winter Table", desc: "The centuries-old history of Miura daikon and the culinary wisdom passed down from local grandmothers.", time: "07:00" },
      { tag: "Landscape", title: "Morning Mist over Jogashima", desc: "The island wakes slowly. The quiet that fishermen know before the world does.", time: "06:15" },
    ],
    chapter2: "Daytime Experiences",
    chapter2Sub: "EXPERIENCE",
    chapter2Desc: "Feel the atmosphere of Miura Peninsula without leaving home.",
    experiences: [
      { num: "01", title: "Dawn at Misaki Fishing Port", type: "Video Experience", duration: "15 min" },
      { num: "02", title: "A Local Chef's Kitchen", type: "Interactive", duration: "20 min" },
      { num: "03", title: "Jogashima Island Walk", type: "Audio Guide", duration: "45 min" },
    ],
    chapter3: "Evening Souvenirs",
    chapter3Sub: "SHOP",
    chapter3Desc: "Bring the memory of the journey to your table.",
    products: [
      { name: "Miura Daikon Dried Set", price: "¥1,800", origin: "Miura City" },
      { name: "Jogashima Wild Wakame", price: "¥2,400", origin: "Jogashima" },
      { name: "Misaki Tuna Canned Set ×6", price: "¥3,200", origin: "Misaki Port" },
      { name: "Local Farm Vegetable Box", price: "¥3,800", origin: "Miura Peninsula" },
    ],
    chapter4: "Go There",
    chapter4Sub: "RESERVE",
    chapter4Desc: "Walk the Miura Peninsula with a local guide by your side.",
    fields: [
      { label: "Full Name", type: "text", placeholder: "Taro Yamada" },
      { label: "Email", type: "email", placeholder: "your@email.com" },
      { label: "Experience of Interest", type: "text", placeholder: "e.g. Early morning port tour" },
      { label: "Preferred Date", type: "date", placeholder: "" },
    ],
    submitBtn: "Send My Journey Request",
    chatBtn: "Plan My Trip",
    footer: "© 2026 Theater Locals. All rights reserved.",
  },
};

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"jp" | "en">("jp");
  const [chatOpen, setChatOpen] = useState(false);
  const t = content[lang];

  const colors = {
    bg: "#faf7f2",
    bgAlt: "#f3ede3",
    text: "#2a1f14",
    textMid: "#6b5438",
    textLight: "#a08860",
    gold: "#8c6d3f",
    goldLight: "#c8a96e",
    border: "#e4d9c8",
    white: "#fefcf8",
  };

  return (
    <main style={{ fontFamily: lang === "jp" ? "'Hiragino Mincho ProN','Yu Mincho',Georgia,serif" : "'Palatino Linotype','Book Antiqua',Georgia,serif", background: colors.bg, color: colors.text, minHeight: "100vh", overflowX: "hidden" }}>

      {/* ナビ */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px", borderBottom: `1px solid ${colors.border}`, position: "sticky", top: 0, background: "rgba(250,247,242,0.96)", backdropFilter: "blur(10px)", zIndex: 100 }}>
        <div>
          <div style={{ fontSize: "1rem", letterSpacing: "0.25em", color: colors.gold, fontWeight: 400 }}>THEATER LOCALS</div>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: colors.textLight, marginTop: "2px" }}>三浦半島の物語</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          <div style={{ display: "flex", gap: "28px", fontSize: "0.82rem", letterSpacing: "0.1em" }}>
            {t.nav.map((item, i) => (
              <a key={i} href={`#${["stories","experience","shop","reserve"][i]}`} style={{ color: colors.textMid, textDecoration: "none" }}>{item}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "3px" }}>
            {(["jp","en"] as const).map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ padding: "4px 10px", background: lang === l ? colors.gold : "transparent", color: lang === l ? colors.white : colors.gold, border: `1px solid ${colors.gold}`, cursor: "pointer", fontSize: "0.7rem", letterSpacing: "0.12em" }}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* ヒーロー：夜明けの海 */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 48px", position: "relative", overflow: "hidden" }}>
        {/* 動画背景 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* オーバーレイ（文字を読みやすくする） */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(160deg, rgba(20,30,45,0.65) 0%, rgba(20,30,45,0.4) 50%, rgba(20,30,45,0.2) 100%)",
          zIndex: 1,
        }} />
        {/* スクロールヒント */}
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 2 }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "rgba(254,252,248,0.5)" }}>SCROLL</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(254,252,248,0.4), transparent)" }} />
        </div>
        {/* テキスト */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <RevealSection>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.4em", color: "rgba(255,220,150,0.9)", marginBottom: "20px" }}>{t.heroEyebrow}</p>
            <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "0.04em", marginBottom: "24px", color: "#fefcf8", textShadow: "0 2px 40px rgba(0,0,0,0.3)" }}>
              {t.heroTitle}
            </h1>
            <p style={{ fontSize: "1.05rem", lineHeight: 2, color: "rgba(254,252,248,0.8)", maxWidth: "480px", marginBottom: "48px", whiteSpace: "pre-line" }}>
              {t.heroSub}
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#stories" style={{ padding: "14px 36px", background: colors.gold, color: colors.white, textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.15em" }}>{t.heroCta1}</a>
              <a href="#experience" style={{ padding: "14px 36px", border: "1px solid rgba(255,255,255,0.5)", color: colors.white, textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.15em" }}>{t.heroCta2}</a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Chapter 1：夜明け前の港（メディア） */}
      <section id="stories" style={{ padding: "100px 48px", background: colors.bg, borderBottom: `1px solid ${colors.border}` }}>
        <RevealSection>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "56px" }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: colors.textLight }}>{t.chapter1Sub}</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 400, color: colors.text }}>{t.chapter1}</h2>
          </div>
        </RevealSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          {t.articles.map((article, i) => (
            <RevealSection key={i} delay={i * 120}>
              <div style={{ cursor: "pointer" }}>
                <div style={{
                  height: "220px",
                  background: i === 0
                    ? "linear-gradient(160deg, #1a2535, #2d3d52)"
                    : i === 1
                    ? "linear-gradient(160deg, #3d2e1e, #6b4c2a)"
                    : "linear-gradient(160deg, #1e2d38, #3a5068)",
                  marginBottom: "20px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "20px",
                }}>
                  <div style={{ position: "absolute", top: "20%", right: "15%", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(255,200,80,0.2) 0%, transparent 70%)", filter: "blur(20px)" }} />
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "rgba(255,220,150,0.6)", position: "relative", zIndex: 1 }}>{article.time}</span>
                </div>
                <p style={{ fontSize: "0.68rem", letterSpacing: "0.25em", color: colors.gold, marginBottom: "8px" }}>{article.tag}</p>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 400, marginBottom: "10px", color: colors.text, lineHeight: 1.5 }}>{article.title}</h3>
                <p style={{ fontSize: "0.85rem", color: colors.textLight, lineHeight: 1.85 }}>{article.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Chapter 2：昼間の体験 */}
      <section id="experience" style={{ padding: "100px 48px", background: colors.bgAlt, borderBottom: `1px solid ${colors.border}` }}>
        <RevealSection>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: colors.textLight }}>{t.chapter2Sub}</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 400, color: colors.text }}>{t.chapter2}</h2>
          </div>
          <p style={{ color: colors.textMid, marginBottom: "56px", lineHeight: 1.85, maxWidth: "480px" }}>{t.chapter2Desc}</p>
        </RevealSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {t.experiences.map((exp, i) => (
  <RevealSection key={i} delay={i * 100}>
    <div
      style={{ position: "relative", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(140,109,63,0.18)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {/* 動画背景 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={`/videos/experience0${i + 1}.mp4`} type="video/mp4" />
      </video>
      {/* オーバーレイ */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "linear-gradient(160deg, rgba(20,15,10,0.55) 0%, rgba(20,15,10,0.3) 100%)",
        zIndex: 1,
      }} />
      {/* テキスト */}
      <div style={{ position: "relative", zIndex: 2, padding: "44px 32px" }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.35em", color: "rgba(255,220,150,0.5)", marginBottom: "32px" }}>{exp.num}</p>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 400, marginBottom: "12px", color: "#fefcf8" }}>{exp.title}</h3>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "rgba(255,200,100,0.8)", marginBottom: "8px" }}>{exp.type}</p>
        <p style={{ fontSize: "0.72rem", color: "rgba(254,252,248,0.5)" }}>{exp.duration}</p>
      </div>
    </div>
  </RevealSection>
))}
        </div>
      </section>

      {/* Chapter 3：夕暮れのおみやげ */}
      <section id="shop" style={{ padding: "100px 48px", background: colors.bg, borderBottom: `1px solid ${colors.border}` }}>
        <RevealSection>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: colors.textLight }}>{t.chapter3Sub}</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 400, color: colors.text }}>{t.chapter3}</h2>
          </div>
          <p style={{ color: colors.textMid, marginBottom: "56px", lineHeight: 1.85 }}>{t.chapter3Desc}</p>
        </RevealSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "32px" }}>
          {t.products.map((item, i) => (
            <RevealSection key={i} delay={i * 80}>
              <div style={{ cursor: "pointer" }}>
                <div style={{
                  height: "200px",
                  background: i % 2 === 0 ? "linear-gradient(135deg, #f0e8d5, #e0d0b8)" : "linear-gradient(135deg, #e8f0e5, #d0e0cc)",
                  border: `1px solid ${colors.border}`,
                  marginBottom: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  padding: "16px",
                }}>
                  <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: colors.textLight }}>{item.origin}</span>
                </div>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 400, marginBottom: "6px", lineHeight: 1.6, color: colors.text }}>{item.name}</h3>
                <p style={{ fontSize: "0.9rem", color: colors.gold }}>{item.price}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Chapter 4：旅に出る（予約） */}
      <section id="reserve" style={{ padding: "100px 48px", background: colors.bgAlt, borderBottom: `1px solid ${colors.border}` }}>
        <RevealSection>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: colors.textLight }}>{t.chapter4Sub}</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 400, color: colors.text }}>{t.chapter4}</h2>
          </div>
          <p style={{ color: colors.textMid, marginBottom: "56px", lineHeight: 1.85, maxWidth: "480px" }}>{t.chapter4Desc}</p>
        </RevealSection>
        <RevealSection delay={100}>
          <form style={{ maxWidth: "500px" }} onSubmit={e => e.preventDefault()}>
            {t.fields.map((field, i) => (
              <div key={i} style={{ marginBottom: "32px" }}>
                <label style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.25em", color: colors.textLight, marginBottom: "10px" }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} style={{ width: "100%", padding: "10px 0", background: "transparent", border: "none", borderBottom: `1px solid ${colors.goldLight}`, color: colors.text, fontSize: "1rem", outline: "none", boxSizing: "border-box" as const }} />
              </div>
            ))}
            <button type="submit" style={{ padding: "14px 48px", background: colors.gold, color: colors.white, border: "none", fontSize: "0.85rem", letterSpacing: "0.15em", cursor: "pointer", marginTop: "8px" }}>{t.submitBtn}</button>
          </form>
        </RevealSection>
      </section>

      {/* フッター */}
      <footer style={{ padding: "40px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.72rem", color: colors.textLight, letterSpacing: "0.12em" }}>
        <span style={{ color: colors.gold }}>THEATER LOCALS</span>
        <span>{t.footer}</span>
      </footer>

      {/* チャットボットボタン */}
      <div style={{ position: "fixed", bottom: "32px", right: "32px", zIndex: 200 }}>
        {chatOpen && (
          <div style={{ position: "absolute", bottom: "64px", right: 0, width: "300px", background: colors.white, border: `1px solid ${colors.border}`, padding: "24px", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
            <p style={{ fontSize: "0.85rem", color: colors.text, lineHeight: 1.7, marginBottom: "16px" }}>三浦半島の旅について、なんでも相談してください。</p>
            <input placeholder={lang === "jp" ? "例：1泊2日でおすすめは？" : "e.g. Best 2-day itinerary?"} style={{ width: "100%", padding: "10px 0", background: "transparent", border: "none", borderBottom: `1px solid ${colors.border}`, fontSize: "0.85rem", outline: "none", boxSizing: "border-box" as const, color: colors.text }} />
            <p style={{ fontSize: "0.68rem", color: colors.textLight, marginTop: "12px", letterSpacing: "0.1em" }}>※ チャットボット機能は準備中です</p>
          </div>
        )}
        <button onClick={() => setChatOpen(!chatOpen)} style={{ padding: "14px 24px", background: colors.gold, color: colors.white, border: "none", borderRadius: "40px", fontSize: "0.82rem", letterSpacing: "0.1em", cursor: "pointer", boxShadow: "0 4px 24px rgba(140,109,63,0.35)", display: "flex", alignItems: "center", gap: "8px" }}>
          💬 {t.chatBtn}
        </button>
      </div>

    </main>
  );
}