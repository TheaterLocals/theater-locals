# Theater Locals — About ページ再設計ハンドオフ（Sonnet 4.6向け）

> **ドキュメント優先順位：**
> 1. **本ドキュメント（SONNET_HANDOFF_ABOUT.md）** ← About ページ専用・最優先
> 2. `SONNET_HANDOFF_V4.md` ← トップページのユーザージャーニー設計
> 3. `SONNET_HANDOFF_BRAND.md` ← ブランド方向性
> 4. `SONNET_HANDOFF.md` ← Vercelビルド安全ルール（必ず遵守）

---

## 0. About ページの役割定義

### 現状の問題

現在の About ページ（`/about`）は以下の構成：
1. Hero: "We built this because food is a doorway, not a display."
2. 比較テーブル（Typical food tour vs Theater Locals）+ Unity / Physicality / Surprise
3. The Journey: Tonight / Tomorrow / Forever（3語のみ）

これは **ブランド哲学のページ** であり、**セールスページ** ではない。訪問者が「¥15,000を払う価値があるか」を判断するための情報が一切ない。

### About ページの新しい役割

**このページは Theater Locals というサービスの「セールスページ」である。**

具体的には、以下を達成する：

1. **訪問者の課題を言語化する** — 「日本の地方文化を深く知りたいが、時間がない・情報がない・日本語がわからない」
2. **Theater Locals が提供する解決策を説明する** — 1回の夕食体験から、翌日の行き先、帰国後の通販まで、**ワンストップで地方の食文化にアクセスできる唯一のプログラム**
3. **具体的なプログラムの仕組みを見せる** — Tonight → Tomorrow → Forever の3つのフェーズで何が得られるかを具体的に
4. **信頼を構築する** — 生産者との直接取引、バイリンガル対応、運営の背景
5. **CTA へ導く** — 「現在のプログラムを見る → /programs/spring-miura」

### 重要な方針

- **特定の地域（三浦半島等）に限定しない。** About ページは Theater Locals というプラットフォーム全体の説明。三浦半島は「現在のプログラム」の一例として触れるのみ
- **現在の構成（比較テーブル、3 pillars、Journey 3語）は全て破棄してよい。** ゼロから再設計する
- ブランド哲学を捨てるのではなく、**セールスの文脈の中に織り込む**

---

## 1. 訪問者ペルソナ

About ページに来る人は、トップページを見て「もっと知りたい」と思った人。つまり：

- Theater Locals に興味はあるが、まだ **何をするサービスなのか完全にはわかっていない**
- 「これは自分にとって価値があるか？」を判断しようとしている
- 頭の中の問い：
  - 「普通のフードツアーと何が違うの？」
  - 「¥15,000は高い。それだけの価値はあるの？」
  - 「翌日のことまで面倒見てくれるって、具体的にどういうこと？」
  - 「通販？帰国後も買えるの？」

---

## 2. 新しい About ページ構成（7セクション）

### ① Hero（感情的フック — 課題の言語化）

**現状：** "We built this because food is a doorway, not a display." — 作り手目線の哲学。

**新しい方向：** 訪問者の課題をそのまま言語化する。作り手目線ではなく **訪問者目線**。

```
大見出し（EN）:
  You came to Japan for the real thing.
  But the real thing doesn't have a website.

サブコピー:
  The best food in Japan comes from people who don't advertise.
  Fishermen who wake at 3am. Farmers who've worked the same soil 
  for three generations. You'll never find them on a travel app.
  
  That's why we built Theater Locals.
```

```
大見出し（JP）:
  「本物」は、検索しても出てこない。

サブコピー:
  日本で最も美味しい食材を作る人たちは、
  広告を出さない。SNSもやらない。
  午前3時に起きる漁師。三代続く農家。
  旅行アプリでは、彼らに出会えない。
  
  だから、Theater Localsを作りました。
```

**ポイント：** 訪問者が「そうそう、まさにそれが困ってた」と思える課題提起。ここで共感を掴む。

### ② The Solution（価値提案 — ワンストップの全体像）

**Theater Locals が何を解決するかを、1文 + 3カラム で構造的に見せる。**

```
見出し: One evening. Three doors.

サブコピー:
  Theater Locals is a one-stop gateway to Japan's local food culture.
  One immersive dinner opens three doors — tonight, tomorrow, and beyond.

3カラム（大きく、ビジュアルで）:

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│     TONIGHT      │ │    TOMORROW      │ │     FOREVER      │
│                  │ │                  │ │                  │
│  [食卓のアイコン  │ │  [地図のアイコン  │ │  [箱のアイコン    │
│   or 写真]       │ │   or 写真]       │ │   or 写真]       │
│                  │ │                  │ │                  │
│ An immersive     │ │ A curated guide  │ │ An online shop   │
│ 5-course dinner  │ │ to visit the     │ │ where you can    │
│ where you touch, │ │ producers and    │ │ order the same   │
│ taste, and       │ │ places behind    │ │ ingredients —    │
│ discover local   │ │ your meal.       │ │ delivered to     │
│ ingredients with │ │ We tell you      │ │ your door,       │
│ your own hands.  │ │ where to go,     │ │ anywhere in the  │
│                  │ │ how to get there,│ │ world.           │
│                  │ │ and who to meet. │ │                  │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

**ポイント：**
- `One evening. Three doors.` でワンストップの価値を一言で伝える
- Tonight / Tomorrow / Forever は以前の Journey から転用するが、**抽象的な3語ではなく、各フェーズで得られるものを具体的に説明する**
- 3カラムは等幅・等重量で。3つが対等であることが重要（「夕食だけじゃない」ことを構造で示す）
- 各カラムにアイコン or 写真を入れる

### ③ How Tonight Works（今夜の体験の具体像）

**「で、具体的に何するの？」に答える。** トップページの "What this is" は10秒の理解だったが、ここでは30秒で **体験の全体像を頭に描けるようにする**。

```
見出し: What happens at a Theater Locals evening

タイムライン形式:

  18:00  ARRIVE
         Step into a venue on the Miura Peninsula.
         15 guests. One long table. No menus.

  18:15  PRE-SHOW
         Your storyteller introduces the land, the sea, 
         and the people who grew tonight's food.

  18:30  FIVE COURSES
         Each course is a live demonstration + participation.
         You grate the wasabi. You torch the tuna. 
         You taste three cuts of the same fish and learn why 
         they're different.
         
         The food is not brought to you — it transforms 
         in front of you.

  20:00  CONNECT
         Receive your personal guide to tomorrow's adventure:
         where to go, who to visit, how to get there.
         Register for the online shop to order ingredients later.

  20:15  END
         You leave with a full stomach, a plan for tomorrow,
         and a connection to a region you didn't know existed.
```

**ポイント：**
- タイムライン形式で「到着から退出まで」を具体的に描く
- 「No menus」「The food transforms in front of you」のような一文で普通のレストランとの違いが伝わる
- 最後に「full stomach + plan for tomorrow + connection to a region」= Tonight/Tomorrow/Forever の3つが1回のプログラムから生まれることを自然に再確認させる

### ④ What Happens Tomorrow（翌日の価値）

**他のどの食体験サービスにもない Theater Locals の最大の差別化ポイント。ここを厚く描く。**

```
見出し: The next morning, you have a plan.

本文:
  Most food experiences end when you leave the table.
  Ours is designed to begin there.
  
  After your evening, you receive a personalized guide:
  
  · Where to go — the specific ports, farms, and workshops 
    behind each course
  · How to get there — trains, buses, walking routes, 
    all in English and Japanese
  · Who to meet — introductions to the producers, 
    so you're not a stranger when you arrive
  
  Yesterday you tasted their food. Today you stand 
  in their kitchen.

（将来的にはここに実際のガイドのサンプル画像・PDF見本を入れる）
```

**ポイント：**
- 「Most food experiences end when you leave the table. Ours is designed to begin there.」が最も強いコピー。ここで他の全てのフードツアーとの差別化が決まる
- 具体的なアウトプット（ガイド）が存在することを明示する
- 単なる「観光情報」ではなく、**生産者への紹介** まで含むことが唯一無二

### ⑤ What Happens Forever（EC / 通販の価値）

```
見出し: Back home, the connection stays.

本文:
  Three weeks after your trip, you're cooking dinner 
  and you remember the wakame that came back to life 
  in ten seconds. 
  
  You open the Theater Locals shop.
  It's there. The same wakame, from the same harvester,
  shipped to your door.
  
  Every ingredient and vessel from your evening — 
  available to order from the producers you met.
  No middlemen. No markup on their stories.

CTA: Browse the shop → /shop

（※ ECが Coming Soon のうちは以下を追加:）
  "The shop opens in 2026. Join the waitlist to be first."
```

**ポイント：**
- 「3週間後」のシーンから入ることで、**帰国後の生活の中にTheater Localsが残る** ことを具体的にイメージさせる
- 「Same wakame, from the same harvester」で体験とECが1つの線で繋がっていることを示す
- ミドルマンなし（直接取引）が信頼と価値の根拠

### ⑥ What Makes This Different（差別化の根拠 — 信頼構築）

**ここで初めて、ブランド哲学と差別化ポイントを説明する。ただし、比較テーブルではなく「事実の列挙」で。**

```
見出し: Built different.

事実リスト（大きなタイポ + 余白で1つずつ見せる）:

  "Every ingredient is sourced directly from producers.
   No wholesalers. No importers."

  "Every evening is limited to 15 guests.
   Not 50. Not 30. Fifteen."

  "Every program is bilingual — Japanese and English —
   narrated live, not subtitled."

  "Every course is participatory.
   You don't watch someone cook. You cook."

  "Every guest receives a next-day guide
   with real logistics, not tourist brochures."
```

**ポイント：**
- 比較テーブル（Typical food tour vs Theater Locals）は削除する。テーブルは「他を貶める」構造であり、プレミアムブランドにふさわしくない
- 代わりに「自分たちの事実だけを力強く宣言する」スタイル
- 各宣言が1つの画面に1つだけ表示されるような大きなタイポグラフィ。スクロールするたびに1つずつ現れる形が理想的
- Unity / Physicality / Surprise の3 pillars はここに自然に内包される（Participatory = Unity + Physicality、Next-day guide = Surprise）

### ⑦ CTA（行動喚起）

```
見出し: See what's playing now.

サブコピー:
  Each season, we open a new door to a different region of Japan.
  Here's the current program.

CTA ボタン: Spring 2026: Miura Peninsula → /programs/spring-miura

小さな注記:
  "15 seats per session. Next: May 24, 2026."
```

**ポイント：**
- 「Each season, we open a new door to a different region」で、三浦半島は「今シーズンのプログラム」であり、Theater Locals は特定の地域に限定されないプラットフォームであることが伝わる
- CTA にプログラム名 + 地域名を具体的に入れる
- 残席数と次回日程で urgency を維持

---

## 3. 削除するもの（現在の About ページから）

| 削除 | 理由 |
|---|---|
| 比較テーブル（Typical food tour vs Theater Locals） | 他を貶める構造はプレミアムブランドに不適切。§2-⑥ の事実宣言に置き換え |
| Unity / Physicality / Surprise（3 pillars 個別セクション） | §2-⑥ の事実宣言に自然に内包。独立セクションは不要 |
| The Journey（Tonight / Tomorrow / Forever 3語だけ） | §2-② の3カラムに具体的内容を伴って再構成済み。抽象的3語は不要 |
| "See the full journey map → /how-it-works" | How it works の内容は §2-③ に統合。別ページは不要（`/how-it-works` ルートは残すがリダイレクト or 統合） |

---

## 4. ページ全体のトーン

- **作り手目線（"We built this because..."）ではなく、訪問者目線（"You came to Japan for..."）** で語る
- セクション①〜⑤ は全て **訪問者の時間軸** に沿って進む：来日前の課題 → 今夜 → 明日 → 帰国後
- セクション⑥で初めて作り手側の信念・事実を語る
- 全体として読むと「自分の旅行のストーリーが描かれている」と感じさせる構成
- 日本語版は観光パンフ調（です・ます）ではなく、**語りかける常体**（「あなたは〜」「ここで〜」）

---

## 5. EN/JP 対応

About ページは **セールスページ** であるため、英語と日本語の両方で **ニュアンスまで正確に** 伝える必要がある。直訳ではなく、各言語のネイティブが自然に感じるコピーを書くこと。

- Hero のコピーは §2-① に EN/JP 両方の案を記載済み
- 以降のセクションも **content ファイル（`en.json` / `ja.json`）** に分離し、toggle で切り替える
- 日本語では「Theater Locals」をカタカナ化しない（ブランド名は英語表記で統一）

---

## 6. 実装順序

**Step 1:** 現在の `/about` ページ（`src/app/(public)/about/page.tsx`）の既存コンテンツを全て置き換え

**Step 2:** 7セクション（Hero → Solution → How Tonight Works → Tomorrow → Forever → Built Different → CTA）を順に実装

**Step 3:** 各セクションにビジュアル要素を追加：
- § ②の3カラムにアイコンまたはストック写真
- § ③のタイムラインにタイム表記とレイアウト
- § ⑥の事実宣言を大きなタイポで1画面1宣言の演出

**Step 4:** EN/JP コンテンツを content ファイルに分離し、toggle 対応

**Step 5:** `/how-it-works` ルートを `/about` にリダイレクト（または `/about#how-tonight-works` へのリダイレクト）。内容は統合済みのため独立ページは不要。

**Step 6:** `npm run build` → ゼロエラー確認 → push

---

## 7. 成功基準

- [ ] About ページを読んだ訪問者が以下を理解できる：
  - Theater Locals は **1回の夕食体験から、翌日の行き先、帰国後の通販まで** ワンストップで提供するサービスである
  - 今夜の体験は **90分・15名・参加型・バイリンガル** である
  - 翌日には **生産者を訪問するための具体的なガイド** がもらえる
  - 帰国後も **同じ食材をオンラインで買える**
  - 各シーズンで **異なる地域** のプログラムが開催される（三浦半島は一例）
- [ ] 比較テーブルが削除されている
- [ ] Unity / Physicality / Surprise の独立セクションが削除されている
- [ ] 抽象的な Journey 3語セクションが削除されている
- [ ] コピーが訪問者目線で書かれている（"We built..." ではなく "You came..." "You'll receive..." 等）
- [ ] EN/JP 両対応
- [ ] CTA が `/programs/spring-miura` への明確なリンク
- [ ] `npm run build` ゼロエラー

### 最重要

- [ ] **About ページを読了した訪問者が「¥15,000でこの3つ（今夜の体験 + 翌日のガイド + 帰国後のEC）が全部手に入るなら安い」と感じる**

---

## 8. 迷ったときの判断基準

> **「このセクションを読んだ訪問者は、¥15,000を払う判断に1歩近づくか？」**

近づかないなら、そのセクションは About ページに不要。

> **「このコピーは "作り手が言いたいこと" か、"訪問者が知りたいこと" か？」**

前者ならボツ。About ページは自己紹介ではなく、訪問者のための判断材料。

---

以上。`/about` ページを **セールスページ** として全面再設計してください。
