# Theater Locals — V4 ユーザージャーニー再設計ハンドオフ（Sonnet 4.6向け）

> **ドキュメント優先順位（最新が最優先）：**
> 1. **本ドキュメント（SONNET_HANDOFF_V4.md）** ← 最優先・最新
> 2. `SONNET_HANDOFF_LEAN.md` ← トップ痩身・サブページ化
> 3. `SONNET_HANDOFF_BRAND.md` ← ブランド方向性
> 4. `SONNET_HANDOFF.md` ← Vercelビルド安全ルール（必ず遵守）
>
> 矛盾があれば上位を優先。ただし `SONNET_HANDOFF.md` の **Vercelビルド安全ルール8項目** は常に遵守。

---

## 0. 今回の核心 — ユーザージャーニーの再設計

前回までの修正でトップは痩せたが、**ユーザーの心理的な旅路がまだ設計されていない**。

今回は「見た目」や「セクション数」ではなく、**訪問者がどんな心理状態でこのサイトに来て、どんな心理状態になったら RESERVE ボタンを押すか** を定義し、それに合わせてトップページの各セクションの役割・内容・順序を再構成する。

---

## 1. ユーザー心理のジャーニー定義

### 1.1 訪問時の心理状態（Before）

訪問者は以下のいずれかの状態でサイトに来る：

- Instagram / 口コミ / 検索で見つけた。Theater Locals を **全く知らない**
- 「Miura 食体験」「immersive dining Tokyo」等のキーワードで来た
- 頭の中の問い：**「これは何？レストラン？料理教室？フードツアー？」**
- 比較対象として頭にあるもの：食べログのレストラン、Airbnb Experiences、WithLocals

### 1.2 RESERVE を押す直前に必要な心理状態（After）

訪問者が RESERVE を押すためには、以下の **5つの確信** が全て揃っている必要がある：

| # | 確信 | 心の中の言葉 |
|---|---|---|
| ① | **理解**（Understand） | 「なるほど、これは普通のレストランでもツアーでもない。15人限定の参加型・劇場型の食体験か」 |
| ② | **欲望**（Desire） | 「わかめが10秒で蘇る？マグロに3つの顔？葉山牛が体温で溶ける？…見てみたい、触ってみたい」 |
| ③ | **信頼**（Trust） | 「食材は仲介なしで産地直送、石井商店のわかめ、伊豆の田中農園のわさび…本物だ」 |
| ④ | **緊急性**（Urgency） | 「次回は5/24で、もう12/15席しかない。今予約しないと埋まる」 |
| ⑤ | **安心**（Safety） | 「¥15,000でバイリンガル対応、アレルゲン対応もある。行って後悔しなさそう」 |

### 1.3 現状のサイトで不足しているもの

**① 理解が足りない：** 現在の "What this is" は `Not a food tour. A live window.` + `Five courses. Five transformations.` + 3 pillars（Unity / Physicality / Surprise）。これは **ブランド価値観** であって、**コンテンツの説明** ではない。初めて訪問した人は「で、具体的に何するの？座って食べるの？自分で作るの？どこで？何人で？」が依然としてわからない。

**③ 信頼が分離している：** "The hands behind tonight"（生産者4名）が独立セクションとして Tonight's Program の **下に** 分離されている。しかし本来、生産者情報は **プログラムの Reason to Believe（信じる根拠）** であり、プログラムの内側にあるべき。「こういう体験をします」→「なぜなら、この人たちが今朝採ったものだから」が1つの流れで伝わらないと、信頼が欲望と結合しない。

**② 欲望が不十分：** Tonight's Program のティーザーが「タイトル + 1文 + See the full program →」のみで、体験の具体的な断片（わかめの復活、わさびおろし、マグロ炙り等）がトップから消えてしまった。前回の痩身で削りすぎた。これらは **欲望を喚起する最も強い武器** なので、ティーザーに戻す必要がある。

---

## 2. トップページ再構成（6セクション）

以下の順序・内容で再構成する。各セクションには **果たすべき心理的役割** を明記する。

### ① Hero（役割：注意 Attention + 感情 Emotion）
- **現状維持。変更不要。** 全画面暗背景 + "Taste local tonight. Live it tomorrow." + RESERVE A SEAT + Miura Peninsula · 47 min from Shinagawa
- Hero は感情の導入であり、ここで説明しようとしない

### ② What this is（役割：理解 Understand）
- **ここが最重要の改修ポイント。** 現状のブランド宣言だけでは「何をするのか」がわからない。

**新しい構成：**

```
大見出し: Not a food tour. A live window.
（維持。ブランドの一行詩。これは "何でないか" を宣言する。）

本文（新規・具体的な説明）:
  A 90-minute immersive dinner for 15 guests 
  on the Miura Peninsula, 47 minutes from Shinagawa.
  
  You don't just watch — you grate wasabi with your own hands,
  torch-sear tuna over open flame, and taste the difference
  between three cuts of the same fish.
  
  Five courses. Each one a live story about the land,
  the sea, and the people who work them.

3 pillars（維持だがコンパクト化）:
  Unity · Physicality · Surprise
  （1行キャプション付き、/about へのリンク維持）
```

**ポイント：**
- 「90分」「15名」「三浦半島」「品川から47分」「わさびをおろす」「マグロを炙る」「3種の食べ比べ」— これらの **具体的事実** が入ることで、初訪問者は「ああ、こういうことか」と理解できる
- 「You don't just watch — you...」の構文で、**受動的な食事ではなく参加型である** ことが動詞で伝わる
- 3 pillars は理解の補足であり主役ではない。小さく

### ③ Tonight's Program + Producers 統合（役割：欲望 Desire + 信頼 Trust）

**現状の問題：** "Tonight's Program"（ティーザー）と "The hands behind tonight"（生産者4名）が **別セクションに分離** されている。この分離が、「すごい食材で、すごい体験ができる」という欲望と信頼の **結合を阻害** している。

**新しい構成：1つの統合セクションにする。**

```
セクション名: Tonight's Program

左カラム or 上部:
  見出し: Spring Tasting: Miura Peninsula's Five Stories
  サブ: ¥15,000 · 15 guests · 2 hours
  （※ 前回トップから削除した価格・時間をここに戻す。
     理由：⑤安心 の要素として必要。ただしPDP的な全詳細ではなく1行に圧縮）

中央: 体験ハイライト 3〜4 行（欲望の喚起）
  · Watch dried seaweed resurrect — black to vivid green in 10 seconds
  · Grate real wasabi from Izu — feel the texture change under your hands
  · Discover frozen tuna's three faces — from frozen block to three distinct tastes
  · Feel Hayama beef melt on your palm at body temperature
  （※ これらを前回トップから削除したが、戻す。ここがDesireの核心。）

下部: 生産者 — 「この食材はこの人たちから直接届く」
  石井商店 · わかめ漁師 · 三浦
  田中農園 · わさび栽培 · 伊豆
  葉山ミートCo. · 葉山牛 · 葉山
  三崎魚市場 · 本マグロ · 三崎港
  
  ← ここが Reason to Believe。体験ハイライトの直後に出すことで
     「この体験は本物の食材を使う本物の体験だ」が1セクションで伝わる。

CTA: See the full program → /programs/spring-miura
```

**つまり：** 現在の2セクション（Tonight's Program + The hands behind tonight）を **1セクションに統合** する。体験の "What" と食材の "Who/Where" が一体化することで、**欲望と信頼が同時に成立** する。

### ④ Next Session（役割：緊急性 Urgency）
- **現状維持。変更不要。**
- `Sat, May 24, 2026 · 18:00 - 20:00 · 12 / 15 seats remaining · Reserve this session`
- **ただし1つ変更：** `View all sessions →` のリンク先を `/sessions` ではなく `/programs/spring-miura#sessions` に変更（理由は後述 §3 のナビ統合）

### ⑤ The Shop（役割：発見 Discovery + 物欲）

**現状の問題：**
- トップのティーザーが「見出し + 1文 + リンク2つ」のみで、**商品ビジュアルが0枚**
- `/shop` ページも4商品テキスト並列で画像なし
- どの商品がどの地域と紐づくかの情報がない
- 売上人気順（＝推し商品先頭）の設計がない

**新しい構成（トップティーザー）：**

```
見出し: Take tonight home.
サブ: Every ingredient from tonight — sourced directly from the producers you just met.

商品カード 3枚（横スクロール or 3カラム）:
  1. Miura Wakame Set · ¥2,500 · from Ishii Shoten, Miura
     [高品質ストック写真: わかめのマクロショット]
     
  2. Hayama Beef (limited) · ¥6,000 · from Hayama Meat Co.
     [高品質ストック写真: 和牛のマクロショット]
     
  3. Misaki Tuna Selection · ¥4,500 · from Misaki Fish Market
     [高品質ストック写真: マグロのマクロショット]

各商品に "Coming Soon" バッジ（控えめに）
CTA: See all products → /shop

小さな注記: "Can't visit Miura? We bring the peninsula to your door."
```

**ポイント：**
- 商品は **3枚のビジュアルカード** で見せる（画像必須・ストックでOK）
- **各商品に生産者名と地域名** を紐づける（`from Ishii Shoten, Miura`）— これにより「自分では手に入らないローカルの商品がここで買える」が伝わる
- 並び順は **推し商品・利益率・ストーリー性** で決める。現時点ではわかめ（最も印象的な変容体験に紐づく）を先頭に推奨
- `/shop` ページも同様に画像付きカードに更新

### ⑥ Newsletter（役割：関係維持）
- **現状維持。変更不要。**
- Partner 応募はフッターに移動済み（前回完了確認）

---

## 3. ナビゲーション統合

### 3.1 ヘッダー：Program と Sessions を統合

**現状の問題：** `Program` と `Sessions` が別メニュー項目だが、体験イベントが1つしかないため、どちらも事実上同じ内容を指している。訪問者は「Program と Sessions の違いは何？」と迷う。

**変更：**

```
Before: Program · About · Sessions · Shop
After:  Experience · About · Shop
```

- `Experience` → `/programs/spring-miura`（プログラム詳細ページ）
- `/programs/spring-miura` ページの下部に Upcoming Sessions セクションを統合（`#sessions` アンカー）
- `/sessions` は **独立ルートとして残す**が、ヘッダーナビからは外す。`/programs/spring-miura#sessions` と `/sessions` の両方からアクセス可能にしておく（将来複数プログラムが増えたときのために）
- ヘッダー右端の `RESERVE` ボタンは維持

### 3.2 フッター：EN/JP トグル削除

**現状の問題：** ヘッダーとフッターの両方に EN/JP トグルがある。

**変更：** フッターの EN/JP トグル（`ref_75`, `ref_76`）を **削除**。言語切替はヘッダーの1箇所のみ。フッターの `Theater Locals` / `A live window into local food culture.` のテキストは維持。

---

## 4. `/programs/spring-miura` ページの強化

トップの統合セクション（§2-③）から `See the full program →` で飛ぶ先。現状はテキストのみで薄い。

**追加すべき内容：**

1. **各皿の詳細ストーリー**（皿①〜皿⑤）— 各皿ごとに：
   - 皿のタイトル（例: `第一幕 · わかめの復活`）
   - 2〜3文の物語
   - 使用食材と生産者名
   - （将来的に）写真
2. **タイムライン**：Pre-show 15min → Main 90min → Post 20min の流れ
3. **Upcoming Sessions**（現在 `/sessions` にあるものを統合・セクション化）
   - 月別タブ UI
   - 各セッションに残席・時間・Reserve ボタン
4. **Reserve CTA**（ページ下部に大きく）

**ナビ上のアンカー：** `/programs/spring-miura#sessions` で直接セッション一覧にジャンプ可能に

---

## 5. `/shop` ページの強化

**現状の問題：** 4商品がテキストのみ、画像なし、地域紐づけなし。

**変更：**

```
ページ上部:
  見出し: Take tonight home.
  サブ: Every ingredient and vessel from tonight — available to order.
        Sourced directly from the producers. No intermediaries.

商品カード（グリッド or リスト）:
  各カードに:
  - 商品名
  - 高品質ストック写真
  - 価格
  - 生産者名 + 地域（例: "from Ishii Shoten · Miura Peninsula"）
  - 1〜2文の商品ストーリー（例: "The same wakame you watched resurrect tonight. Hand-harvested off the coast of Miura."）
  - Coming Soon バッジ
  
商品順（推奨）:
  1. Miura Wakame Set · ¥2,500 — 体験で最もインパクトある変容に紐づく
  2. Hayama Beef (limited) · ¥6,000 — 限定感 + 高単価
  3. Misaki Tuna Selection · ¥4,500 — 三崎の代名詞
  4. Craft Sake Set · ¥5,500 — ペアリング提案

ページ下部:
  Waitlist 登録フォーム
  "Shop opens 2026. Be the first to know."
```

---

## 6. 追加提案（Yasu未指摘だが改善すべき点）

### 6.1 フッターの死リンク群を整理

現在のフッターに以下の **全て `href="#"` のリンク** がある：
- About Theater Locals, Our Story, Sustainability
- Help Center, Booking FAQs, Cancellation Policy, Terms of Service, Privacy Policy, Specified Commercial Transactions Act
- For Performers, Partnership, Careers

**これらは全て実ページが存在しない。** 2つの選択肢：
- **Option A（推奨）：** 存在しないリンクを全削除。残すのは Privacy Policy / Terms of Service / 特商法表記 のみ（法的に必要なもの）。それ以外は実ページを作ってから追加
- **Option B：** `href="#"` のリンクを `href="/about"` 等の既存ページにリダイレクト

死リンクはSEO的にもUX的にもマイナス。プレミアムブランドサイトとして不適切。

### 6.2 Newsletter がヘッダー下部と Footer に重複

現在、Footer に `Stay in the loop` の Newsletter フォーム（`your@email.com` + Subscribe）があり、トップの §⑥ Newsletter セクション（`Your email address` + Subscribe）と **機能が完全重複** している。

**変更：** Footer の Newsletter フォームを削除。トップに1箇所のみ。Footer には `Follow us: Instagram · X` のリンクのみ残す。

### 6.3 "Back to top" リンクの表記改善

サブページ（`/programs/spring-miura`, `/shop` 等）に `Back to top` リンクがあるが、これは**ページ最上部に戻る**のか**トップページに戻る**のか曖昧。

**変更：** `← Back to top` → `← Home` に変更（`href="/"` はそのまま）

### 6.4 モバイル時の RESERVE ボタン常時表示

現状ヘッダーに `RESERVE` ボタンがあるが、スクロール後に画面から消える可能性がある。

**追加：** モバイル（`md:` 以下）ではページ下部に **sticky な RESERVE ボタン** を常時表示。デスクトップではヘッダーのスティッキーナビで十分。

---

## 7. 実装順序

**Step 0:** `SONNET_HANDOFF.md` の Vercel ビルド安全ルール8項目を再確認。

**Step 1（トップページ再構成）:**
1. "What this is" セクションのコピーを §2-② に従い書き換え（具体的説明文を追加）
2. "Tonight's Program" と "The hands behind tonight" を **1セクションに統合**
3. 統合セクション内に体験ハイライト4行を復活させる（トップから消えていたもの）
4. 統合セクション内に `¥15,000 · 15 guests · 2 hours` を1行で復活
5. Shop ティーザーを3枚のビジュアルカードに作り変え（生産者名・地域紐づけ付き）
6. ストック写真の配置（Unsplash 等から適切な food photography を `/public/images/` に配置）

**Step 2（ナビゲーション統合）:**
7. ヘッダーを `Experience · About · Shop` に変更
8. フッターの EN/JP トグルを削除
9. フッターの死リンク（`href="#"`）を整理（法的に必要なもの以外は削除）
10. フッターの Newsletter フォームを削除

**Step 3（サブページ強化）:**
11. `/programs/spring-miura` に Upcoming Sessions を統合（`#sessions` アンカー付き）
12. `/programs/spring-miura` に各皿の詳細ストーリーを追加（皿①〜⑤）
13. `/shop` に画像付きカード + 生産者名・地域・ストーリーを追加
14. サブページの `Back to top` を `← Home` に変更

**Step 4（UX改善）:**
15. モバイル用 sticky RESERVE ボタンを追加
16. 全体の EN/JP toggle 動作確認（ヘッダー1箇所のみから全セクションに反映されるか）

**Step 5（ビルド検証）:**
17. `npm run build` をローカル実行 → **ゼロエラー** を確認
18. dev server で全ページ・全リンクを確認（404 なし）
19. 全てクリア後に push（**1コミット目標**）

---

## 8. 成功基準

### コンテンツ面
- [ ] "What this is" を読んだ初訪問者が **「90分・15人・参加型・三浦半島の食体験」** を10秒で理解できる
- [ ] Tonight's Program と生産者情報が **1つのセクション** に統合されている
- [ ] 体験ハイライト4行（わかめ復活、わさびおろし、マグロ三面、葉山牛体温）がトップに存在する
- [ ] `¥15,000 · 15 guests · 2 hours` がトップに1行で存在する（PDP的詳細ではなく概要として）
- [ ] Shop ティーザーに **3枚の画像付き商品カード** があり、各カードに生産者名と地域が紐づいている

### ナビ面
- [ ] ヘッダーナビが `Experience · About · Shop` の3項目（+ RESERVE ボタン）
- [ ] EN/JP トグルがヘッダーの **1箇所のみ** に存在（フッターから削除済み）
- [ ] フッターに `href="#"` のリンクが **0個**
- [ ] フッターの Newsletter フォームが削除済み（トップに1箇所のみ）

### サブページ面
- [ ] `/programs/spring-miura` に Upcoming Sessions が統合されている（`#sessions` アンカー）
- [ ] `/programs/spring-miura` に各皿のストーリーがある（皿①〜⑤）
- [ ] `/shop` に画像付き商品カード + 生産者・地域紐づけがある

### UX面
- [ ] モバイルで sticky RESERVE ボタンが画面下部に常時表示される
- [ ] サブページの `Back to top` が `← Home` に変更済み

### ビルド面
- [ ] `npm run build` がローカルでゼロエラー
- [ ] 全ページ・全リンクが 200 で返る（404 なし）
- [ ] Vercel push が 1 コミットで通る

### 最重要（ユーザージャーニー検証）
- [ ] **トップを Hero → What this is → Program+Producers → Next Session → Shop → Newsletter の順にスクロールした時、5つの確信（理解→欲望→信頼→緊急性→安心）が自然に積み上がる**

---

## 9. 絶対にやってはいけないこと

1. **"What this is" をブランド宣言だけで終わらせる** — 「具体的に何をするのか」が伝わらなければ失敗
2. **Tonight's Program と生産者を別セクションのまま残す** — 欲望と信頼が分離する
3. **体験ハイライト4行をトップから削除したままにする** — Desire の核心がない
4. **Shop を画像なしテキストリストのまま残す** — 物欲が喚起されない
5. **Program と Sessions を別ナビ項目のまま残す** — ユーザーが迷う
6. **EN/JP トグルをヘッダー・フッター両方に残す** — 重複
7. **`href="#"` の死リンクをフッターに残す** — プレミアムブランドとして不適格
8. **build を通さずに push**

---

## 10. 迷ったときの判断基準

ページのどの箇所を編集するときも、自問する：

> **「このセクションは、5つの確信（理解・欲望・信頼・緊急性・安心）のうち、どれを担当しているか？」**

担当が不明なセクションは、不要か、位置が間違っている。

> **「初訪問者がここまでスクロールした時点で、まだ理解していない情報は何か？」**

まだ理解していない情報があるなら、そのセクションより上に足りていない情報がある。

---

以上。本ドキュメントと過去3つのハンドオフを併読し、**ユーザージャーニーの再設計** を軸に実装してください。
