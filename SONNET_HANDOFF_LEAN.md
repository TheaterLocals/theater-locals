# Theater Locals — トップ痩身 & サブページ化ハンドオフ（Sonnet 4.6向け）

> **ドキュメント優先順位：**
> 1. **本ドキュメント（SONNET_HANDOFF_LEAN.md）** ← 最優先・最新
> 2. `SONNET_HANDOFF_BRAND.md` ← ブランド方向性（併読）
> 3. `SONNET_HANDOFF.md` ← Vercelビルド安全ルール（必ず遵守）
>
> 矛盾があれば上位を優先してください。

---

## 0. 背景 — なぜ今、これをやるのか

前回のブランド再構築で「SaaS予約サイト」から「劇場的ブランドサイト」へ一歩進化したが、**まだWithLocals / Airbnb PDP の重力圏** から抜けきれていない。根本原因は **トップページに情報を詰め込みすぎている** こと。

具体的には、現状のトップページは次の6つの機能を1ページに圧縮している：
1. ブランドサイト
2. Product Detail Page（プログラム詳細）
3. How it works（ジャーニー説明）
4. 予約カレンダー（Upcoming Sessions）
5. EC プレ販売
6. ニュースレター登録

これは **4つのコンバージョンファネルが同居している状態** で、Hick's Law によりメインCTA（予約）のクリック率が希釈される。売上最大化の観点では明確に非効率。

**ベンチマーク：** teamLab Planets / Noma / Alchemist Copenhagen / Eleven Madison Park / Ghibli Museum / MUJI HOTEL — これらのプレミアム体験ブランドはすべて **トップで語りすぎない**。情報は全てサブページに逃がし、トップは「入口」に徹する。

**今回の目的：** トップを痩せさせて、サブページに詳細を逃がす。トップの役割は **① ブランドイメージ伝達、② What is it? の10秒理解、③ プログラム/ECのチラ見せ、④ 単一の強いCTA** に絞る。

---

## 1. 現在のトップに存在する重複（修正前に把握）

以下は現ページを実際に読んで確認した重複。これらを解消するのが本タスクの一部：

1. **"Not a food tour. A live window."** が2回出現（"What this is" と "Why this exists"）
2. **Journey が 2 バージョン**：
   - `Tonight / Tomorrow / Forever`（"Why this exists" 末尾）
   - `Before / During / After`（"Your Journey" セクション全体）
3. **Tonight's Program 完全詳細 + Upcoming Sessions** が同じプログラム情報を2回見せる
4. **"Watch dried seaweed resurrect in 10 seconds"** が Hero と Program 両方に同文

---

## 2. 新しいトップページ構造（Lean版・7セクション）

**現状の約10セクション → 7セクションに削減。** 各セクションに含めるべき内容と、**明示的に含めてはいけない内容** を併記する。

### ① Hero（現状維持 + 微調整）
- **維持：** 全画面映像 + "Taste local tonight. Live it tomorrow." + 単一CTA `Reserve a seat` + 極小サブコピー `Miura Peninsula · 47 min from Shinagawa`
- **削除：** Hero 内のスライド 3 つのうち重複キャプション（`Watch dried seaweed resurrect in 10 seconds` 等）は、Tonight's Program の体験リストと被るのでスライド説明を**抽象化**する
- **スライド3枚のキャプションは視覚的な一言のみ**（例: "Transformation." "Rhythm." "Fire."）に置き換え

### ② What this is（10秒で理解させる）
- **維持：** `Not a food tour. A live window.` の宣言と、`Five courses. Five transformations. Each dish opens a door to the land where it was born.`
- **追加：** Unity / Physicality / Surprise を **3つの極小アイコン + 1行キャプション** として提示（長文の展開はしない）。各項目クリックで `/about#unity` 等のアンカーへ
- **削除：** 現状 "Why this exists" セクションにある長文の展開・table・大きな3カラムは削除（`/about` へ移動）
- これにより `Not a food tour. A live window.` の **2回出現を1回に**集約される

### ③ Tonight's Program — ティーザーのみ
- **維持：** 大きな1枚のメインビジュアル + プログラム名 `Spring Tasting: Miura Peninsula's Five Stories` + 1〜2文のティーザーコピー + CTA `See the full program →`（リンク先 `/programs/spring-miura`）
- **削除（`/programs/spring-miura` へ移動）：**
  - `¥15,000` / `per person, tax incl.`
  - `2 hours (Pre-show 15 min + Main 90 min + Post 20 min)`
  - `15 guests per session`
  - `What you'll experience` の4つの体験ポイントリスト
  - `Your team` セクション（Storyteller / Kitchen crew）
  - `Allergen information will be provided after booking.`
  - `Reserve your seat` のセクション内CTA
- トップに残るのは **欲望を喚起する1枚 + 1〜2文 + リンク** のみ

### ④ Social Proof ストリップ（**新規追加・必須**）
- **目的：** ¥15,000の高関与購買の信頼の足場を作る
- **内容（素材が揃うまでの優先順）：**
  1. **生産者の顔写真 2〜3名**（漁師・農家・わさび農家等）+ 氏名 + 1行のロール（例: `石井 翔 · Wakame harvester, Miura`）
  2. メディア掲載ロゴ（確定次第）
  3. パートナーロゴ（確定次第）
- **現時点で素材がない場合：** 生産者の実名と職能のみをタイポグラフィで列挙する静的ブロックでも可（`Harvested by Ishii Shoten. Grated with wasabi from Tanaka Farm, Izu. Aged by Hayama Meat Co.` のような "credit roll" スタイル）
- **絶対にNG：** `Aさん / Bさん` 匿名プレースホルダ、`Featured in COMING SOON`、絵文字

### ⑤ Next Session 1行モジュール（希少性メッセージング）
- **現状の月別タブ付きカレンダーは削除**
- 代わりに **1行コンパクト**：
  ```
  Next: Sat, May 24, 2026 · 18:00 · 12 / 15 seats remaining
  → Reserve this session
  ```
- 全セッションリストは `/sessions` サブページへ移動、トップには `View all upcoming sessions →` の小さなリンクのみ
- **scarcity messaging** として残席数は必ず表示（Ghibli Museum 方式）

### ⑥ Shop Teaser（コンパクト化）
- **現状の4商品カード並列は削除**
- 代わりに：
  - 1〜2枚の商品ビジュアル（もしくは生産物のマクロ写真）
  - 1文のコピー: `Take tonight home. Shop opening 2026.`
  - CTA: `Join the waitlist →`（Newsletter と統合してもよい）
- 全商品リストは `/shop` サブページへ

### ⑦ Newsletter（コンパクト）
- **維持：** メール入力 + Subscribe
- **削除：** `Interested in joining as a chef or performer?` / `Apply as Partner / Host` ボタン → Footer または `/partners` へ移動
- トップの Newsletter は **純粋に訪問者向けの1アクションのみ**

---

## 3. トップから削除するセクション（全消）

次のセクションは **トップから完全に削除** し、それぞれ該当サブページへ移動：

| 削除するセクション | 移動先 |
|---|---|
| Why this exists (table + 3 pillars 長文 + The Journey Tonight/Tomorrow/Forever) | `/about` |
| Your Journey (Before/During/After 詳細タイムライン) | `/about#how-it-works` or `/how-it-works` |
| After tonight, Miura Peninsula (Misaki Port / Hayama / Miura City の3場所詳細) | `/miura` |
| Upcoming Sessions 月別タブ UI | `/sessions` |
| Shop 4商品カード | `/shop` |
| Tonight's Program の完全詳細（価格・時間・定員・体験リスト・チーム・アレルゲン） | `/programs/spring-miura` |
| Partner / Host 応募ブロック | Footer or `/partners` |

---

## 4. 作成するサブページ（5 routes）

Next.js App Router で次の5ページを新規作成：

### `/programs/spring-miura` （最重要）
- 現状トップの "Tonight's Program" 完全詳細をそのまま移植
- 追加で各皿の詳細ストーリー（皿①〜皿⑤）、生産者プロファイル、料金・所要時間・定員・チーム構成・アレルゲン・アクセス
- ページ下部に大きな `Reserve your seat` CTA
- 将来的に `/programs/[slug]` で他シーズンも追加できる構造にしておく

### `/about`
- `Not a food tour. A live window.` を大見出しに
- Unity / Physicality / Surprise の3柱を展開（大きなステートメント + 背景画像）
- `Typical food tour vs Theater Locals` の比較 table
- `Tonight / Tomorrow / Forever` の意義ジャーニー
- アンカー: `#unity`, `#physicality`, `#surprise`

### `/how-it-works`（または `/about#how-it-works`）
- Before (7 days → day of) / During (the evening) / After (next day → 30 days) の詳細タイムライン
- 現状トップの "Your Journey" セクションを移植

### `/miura`
- 三浦半島の紹介
- Misaki Port / Hayama / Miura City の3場所
- **コピーは観光ガイド調から Magician voice に書き換え**（`SONNET_HANDOFF_BRAND.md` §3.5 参照）
- マップ、生産者紹介、アクセス情報

### `/sessions`
- 月別の Upcoming Sessions カレンダー UI（現状のものを移植）
- 各セッションに残席数、時間、`Book this session` リンク

### （オプション）`/shop`
- EC ページ。現時点では Coming Soon で可、4商品のラインナップ + Waitlist 登録

---

## 5. ナビゲーション更新

ヘッダーとフッターのナビゲーションを次のように更新：

**ヘッダー：**
```
Theater Locals    Program  ·  About  ·  Sessions  ·  Shop    [EN | JP]    [Reserve a seat]
```

- `Program` → `/programs/spring-miura`
- `About` → `/about`
- `Sessions` → `/sessions`
- `Shop` → `/shop`

**フッター：** 現状の `About / Help / Partners / Stay in the loop` 4カラム構造を維持。`Partners` カラムに `/partners` 応募リンクを正式追加。

---

## 6. コピーライティング指示（重複解消）

1. `Not a food tour. A live window.` は **サイト全体で1回のみ** 出現させる（トップの ② What this is セクションのみ）。`/about` ページでは別の言い回し（例: `We built this because food is a doorway, not a display.`）に変える
2. Hero スライドキャプション（`Watch dried seaweed resurrect in 10 seconds` 等）は Tonight's Program の体験リストと被るため、**抽象化**：
   - Slide 1: `Transformation.`
   - Slide 2: `Rhythm.`
   - Slide 3: `Fire.`
3. Tonight's Program のティーザーコピー（トップに残る1〜2文）は、現状の体験リストを "要約" ではなく **"予告編"** として書く：
   - 例: `Five courses. Five transformations. One evening you won't be able to describe afterward — only relive.`

---

## 7. SEO / パフォーマンス の副次効果

この構造変更により次の副次効果が得られる（実装時に意識すべき点）：

- **各サブページが独立した URL + meta tags を持つ** → `三浦半島 食体験`、`わかめ 復活`、`葉山牛 体温` 等のロングテール SEO 流入経路が生まれる
- **トップの LCP / CLS 改善** → Hero 映像以外の heavy コンテンツが減るため、Core Web Vitals が改善
- **各ページの `generateMetadata`** を必ず実装する：
  ```tsx
  export async function generateMetadata(): Promise<Metadata> {
    return {
      title: 'Spring Tasting: Miura Peninsula\'s Five Stories | Theater Locals',
      description: '...',
      openGraph: { ... },
    };
  }
  ```
- **内部リンク構造：** トップから各サブページへのリンク、各サブページからトップ or 関連ページへの回遊リンクを必ず設置

---

## 8. 実装順序

**Step 0:** `SONNET_HANDOFF.md` の Vercel ビルド安全ルール8項目を再確認。特に：
- force-dynamic が必要な既存ファイルに触らない
- Prisma lazy init パターンを壊さない
- 新規ページでも route group conflict を作らない
- push 前に必ず `npm run build` をローカル実行

**Step 1（トップページ痩身）：**
1. `src/app/(public)/page.tsx` を編集し、現状のセクション読み込みを 7 つに削減
2. 削除するコンポーネント（`WhyTheaterLocals`, `JourneyMap`, `MiuraInfo`, 旧 `UpcomingExperiences` 全体、旧 `ECPreview` 全体）をトップから外す
3. `HeroSection` のスライドキャプションを抽象化
4. `FeaturedExperience` を **ティーザー版** に作り直す（価格・時間・リスト等を削除）
5. `UpcomingExperiences` を **1行モジュール版** に作り直す（`NextSessionTeaser` として分離推奨）
6. `ECPreview` を **1〜2枚のティーザー版** に作り直す（`ShopTeaser` として分離推奨）
7. 新規コンポーネント `SocialProofStrip` を作成して④の位置に挿入

**Step 2（サブページ作成）：**
8. `src/app/(public)/programs/spring-miura/page.tsx` を新規作成し、旧 Tonight's Program の完全詳細を移植
9. `src/app/(public)/about/page.tsx` を新規作成し、Why this exists + 3 pillars + The Journey を移植
10. `src/app/(public)/how-it-works/page.tsx` を新規作成（または `/about` 内のアンカーセクションとして統合）
11. `src/app/(public)/miura/page.tsx` を新規作成し、3場所を Magician voice で書き直し
12. `src/app/(public)/sessions/page.tsx` を新規作成し、月別タブ UI を移植
13. （オプション）`src/app/(public)/shop/page.tsx` を新規作成

**Step 3（ナビ & 内部リンク）：**
14. ヘッダーナビを `Program / About / Sessions / Shop` に更新
15. フッターの Partners カラムに応募リンクを追加
16. 各サブページに `generateMetadata` を実装
17. 各サブページ→トップ、トップ→各サブページの回遊リンクを確認

**Step 4（コンテンツ・重複解消）：**
18. `Not a food tour. A live window.` がトップに1回しか出現しないことを確認
19. `Journey` 系の重複が完全に解消されたことを確認
20. `Watch dried seaweed resurrect in 10 seconds` がトップで Hero スライドから除去されたことを確認

**Step 5（ビルド検証）：**
21. `npm run build` をローカル実行 → **ゼロエラー** を確認
22. 各新規ルートが build output に正しく表示されるか確認
23. dev server (`npm run dev`) で全ページを実際に開いて 404 がないか確認
24. 全てクリア後に push（**1コミットで通すこと**）

---

## 9. 成功基準

- [ ] トップのセクション数が **7以下**
- [ ] `Not a food tour. A live window.` がトップに **1回のみ** 出現
- [ ] `Journey` 系のセクションがトップから完全に消えている（`/about` or `/how-it-works` に移動済）
- [ ] `Tonight's Program` のトップ掲載が **ティーザー1枚 + 1〜2文 + リンク** のみ
- [ ] `Social Proof Strip` がトップに存在（プレースホルダではなく生産者実名等で）
- [ ] `Next Session` が **1行 + 残席数** の希少性メッセージとしてトップに存在
- [ ] `Shop` がトップで **1〜2枚のティーザー + Join waitlist** のみ
- [ ] 5つの新規サブページ（`/programs/spring-miura`, `/about`, `/how-it-works`, `/miura`, `/sessions`）が全て 200 で返る
- [ ] 各サブページに `generateMetadata` が実装されている
- [ ] ヘッダーナビが `Program / About / Sessions / Shop` に更新されている
- [ ] `npm run build` がローカルでゼロエラー
- [ ] Vercel push が **1コミットで通る**（前回累計7コミット → 今回目標 1）
- [ ] トップページを開いて最初の **1〜2スクロール以内** に、メインCTA（Reserve a seat）と Social Proof の両方が視界に入る

---

## 10. 絶対にやってはいけないこと

1. **サブページを作らずにトップのセクションをコメントアウトだけで済ませる** — 情報を削除するだけでは不足。必ず受け皿となるサブページを作る
2. **ナビゲーションを更新し忘れる** — サブページを作ったのにヘッダーから辿れないのは致命的
3. **`/about` と `/how-it-works` と `/miura` を1ページに統合して 'massive about page' にする** — 情報を逃がす意味がなくなる。必ず別ルートに分ける
4. **Social Proof Strip を絵文字や "Coming Soon" で埋める** — 信頼シグナルがプレースホルダでは逆効果。実名（生産者）で埋めるか、セクションごと非表示
5. **Next Session 1行モジュールに残席数を書かない** — scarcity messaging の心臓部。必ず `12 / 15 remaining` のような数字を出す
6. **`SONNET_HANDOFF_BRAND.md` の暗背景・serif typography・ブランド voice 指示を忘れる** — トップを痩せさせても voice が観光ガイド調に戻ったら意味がない
7. **build を通さずに push** — 前回の7連続fix commitを絶対に繰り返さない

---

## 11. 参照すべきベンチマーク（実装中に迷ったら見る）

- https://www.teamlab.art/e/planets/ — トップの情報量・余白・映像の使い方
- https://noma.dk/ — 極端な情報削減
- https://alchemist.dk/ — 劇場メタファーの実装
- https://www.elevenmadisonpark.com/ — Reserve CTA の置き方
- https://www.ghibli-museum.jp/ — 希少性メッセージング
- https://hotel.muji.com/ — ティーザー + サブページ リンク モデル

迷ったら自問：
> 「今書いているこのセクションは、**teamLab Planets のトップに載るか？**」
> 載らないならサブページに逃がす。

---

以上。本ドキュメントと `SONNET_HANDOFF_BRAND.md` と `SONNET_HANDOFF.md` を併読し、**トップを痩せさせてサブページに情報を逃がす** 作業を実施してください。
