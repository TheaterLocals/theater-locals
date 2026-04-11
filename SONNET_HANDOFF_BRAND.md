# Theater Locals — ブランド再構築ハンドオフ（Sonnet 4.6向け）

> このドキュメントは `SONNET_HANDOFF.md`（タクティカル修正 + Vercelビルド安全ルール）の**上位**に位置する、ブランド方向性の指示書です。実装前に必ず最後まで読んでください。矛盾があればこのドキュメントを優先してください。

---

## 0. 現状診断：なぜ今のサイトは「失敗」なのか

現在の `https://theater-locals.vercel.app/` は、機能的には動いていますが、**ブランドとして完全に毀損**しています。

**起きていること：**
- サイトが **WithLocals / Airbnb Experiences のような予約SaaS** に引きずられている
- ブランドが本来目指すべき **teamLab のブランドサイトのような「まるで体験しているかのような感覚」** が完全に消えている
- 訪問者は「予約したいかどうか」を判断する前に、まず **感情的に惹き込まれる** 必要があるのに、その入り口が存在しない

**ルートコーズ：** コンポーネント構造が "Hero → Booking form → Feature cards → Table → Testimonials → Footer" という SaaS ランディングページの典型パターンで組まれている。これをブランドサイト（= 体験の予告編）として組み直す必要がある。

---

## 1. 北極星（North Star）

作るべきサイトの比喩は次の3つです。**1行のコピーを書く前、1pxを動かす前に、この3つを頭に焼き付けてください。**

1. **teamLab Planets / Borderless のウェブサイト** — 訪問した瞬間に「もう体験が始まっている」感覚。黒/暗背景、フルブリードの映像、最小限のテキスト、余白の呼吸。
2. **劇場のプログラム冊子（パンフレット）** — 予約ページではなく、"今夜上演される物語" を読ませる紙面。章立て、幕構成、出演者（= 生産者）紹介。
3. **映画の予告編サイト** — "見たあとに行きたくなる" が成立している設計。機能説明より先に、五感を撃つ。

**これらに反している実装は、たとえ SONNET_HANDOFF.md の P0〜P3 を全て満たしていても「失敗」とみなします。**

**アンチ北極星（絶対に似せてはいけない参照）：**
- WithLocals / Airbnb Experiences / Klook / Viator（旅行予約SaaS）
- Linear / Vercel / Notion のランディングページ（Clean SaaS）
- 一般的な飲食店予約サイト

---

## 2. ブランドアーキタイプの再確認

**Explorer × Magician**

| 軸 | 意味 | UIへの翻訳 |
|---|---|---|
| Explorer | 未知の土地、発見、地平線、朝の光、足元の土、海の匂い | 三浦半島の地理・生産者・素材の"現地性"を視覚で見せる。マップ、現場写真、素材のマクロショット。 |
| Magician | 変容、驚き、秘密、儀式、"えっ" と息を呑む瞬間 | 乾燥わかめが10秒で蘇る、マグロが三つの顔を持つ、葉山牛が体温で溶ける — **変容の瞬間を動画/GIFで"見せる"**。テキストで説明しない。 |

**今のサイトに欠けているのはどちらか：** **両方**。Explorer側は「47 min from Shinagawa」という機能情報に矮小化され、Magician側は絵文字🍽️で代替されている。

---

## 3. 具体的な再設計指示

### 3.1 Hero セクション — 完全に作り直す

**現状：** 左に見出しとブッキングフォーム、右に無地の緑カードと葉っぱ絵文字。

**あるべき姿：**

- **フルブリード（画面いっぱい）の映像/GIF/スライドショー**が背景。暗め（70%ブラック寄せ）。ブッキングフォームはヒーローから**撤去**する。
- 中央〜左下に、小さな一行詩のみ：
  - 英語: `Taste local tonight. Live it tomorrow.`
  - 日本語: `今夜、土地を味わう。明日、土地を生きる。`
- その下に、**1つだけの CTA**: `Reserve a seat →`（劇場メタファーを維持）
- 左上または右下に極小テキスト: `Miura Peninsula · 47 min from Shinagawa`（機能情報は脇役）
- 背景映像は **5皿の変容の瞬間** を順にクロスフェード（各2〜3秒）：
  1. 乾燥わかめが水で蘇る瞬間（黒→鮮やかな緑）
  2. 本わさびをおろす手の動き
  3. 冷凍マグロ塊が炙られる瞬間
  4. 葉山牛が手のひらで溶ける瞬間
  5. 能的な所作で皿が運ばれる瞬間
- 画像が未確定のうちは、**高品質なストックビデオ**でプレースホルダーする。絵文字は絶対に使わない。

**実装上の注意：**
- Hero は `h-screen` または `min-h-[90vh]` でフル表示
- オーバーレイは `bg-gradient-to-t from-black/70 via-black/20 to-transparent` 等で読み取れるようにコントラスト確保
- 動画は `<video autoplay muted loop playsinline>` で、`poster` 属性に1フレーム目の画像を設定（LCP対策）
- モバイルでは動画が重い場合は静止画にフォールバック

### 3.2 ブッキングフォームはHeroから分離

現状の日付選択・ゲスト数・言語のフォームは、**別のセクション「Book your evening」** として **ページ中盤以降**に移動。Heroに置くとSaaS感が出る。もしくはフッター固定の「Reserve」ボタンから開くモーダル/ドロワーにする。

### 3.3 情報アーキテクチャの再配置

**現状の順番（SaaS型）：**
Hero → Featured Experience → Upcoming Sessions → Why (table) → Journey → Testimonials → Miura → Shop → Blog → Newsletter

**あるべき順番（劇場プログラム型）：**

1. **Hero（幕開け）** — 全画面の変容映像 + 一行詩
2. **Prologue / Why we exist** — "Not a food tour. A live window." の短い宣言文。黒背景。センタリング。大きな余白。
3. **Tonight's Program（今夜の演目）** — 5皿をそれぞれ1枚のフルワイドカード／縦スクロールで、各皿ごとに：
   - マクロ写真（素材）
   - 一行の詩的タイトル（例: `第三幕 -60℃の三つの顔`）
   - 2〜3文の物語
   - 生産者名
4. **Your Role（あなたの役）** — Unity / Physicality / Surprise の3つ。カード型ではなく、大きなステートメント＋背景画像。
5. **The Journey（時間軸）** — Tonight → Tomorrow → Forever の物語的タイムライン
6. **Voices（観客の声）** — テスティモニアル。匿名プレースホルダは削除。実データが揃うまでセクションごと非表示
7. **After tonight, Miura（明日の窓）** — 三浦半島の地図 + 場所の物語。観光ガイド調ではなく、**今夜の皿の続きとしての場所**
8. **Book your evening** — ここで初めて予約フォームが登場。劇場の窓口の雰囲気で
9. **Upcoming Sessions** — カレンダー
10. **The Shop（Coming Soon）** — テーマ継続
11. **Stay in the loop** — Newsletter
12. **Footer**

**Blog セクションは P0 で非表示**（SONNET_HANDOFF.md 準拠）。

### 3.4 色・タイポ・質感

**現状：** 白背景 + ソフトクリーム + オレンジCTA + sans。SaaS感の最大要因。

**あるべき：**

- **複数の背景トーンを交互に使う**。白オンリーはNG。最低限：
  - Hero: 黒 or 暗緑 (#0B1F15 等)
  - Prologue: 黒 (#0A0A0A)
  - Tonight's Program: 黒と白の交互、または深い墨色 (#1A1A1A) と紙色 (#F5F1E8)
  - Miura: 朝の光をイメージした薄い青グレー (#E8ECEF)
  - Book: 深い赤茶（劇場の緞帳） (#3A1F1F) または黒
- **タイポ**：
  - 見出しは **serif / 明朝 or ディスプレイセリフ** を導入。sans だけだと SaaS。
  - 英語見出し: `Fraunces`, `Cormorant Garamond`, `Playfair Display` 等（Google Fonts）
  - 日本語見出し: `Noto Serif JP` の `Bold` 以上、または `Shippori Mincho`
  - 本文は現状の sans 継続でOK
- **質感レイヤー**：
  - グレイン / ノイズテクスチャを暗背景セクションに重ねる（`bg-[url('/textures/grain.png')] mix-blend-overlay opacity-20`）
  - 区切り線は細い金/銅色（`#B8956A` 等）を使う
  - 角丸は最小限。カードは直角または極小（`rounded-sm`）。SaaSの `rounded-xl` を避ける
- **オレンジ**は劇場の「スポットライト色」としてアクセントのみに使う。広面積では使わない

### 3.5 コピーのvoice統一

**観光ガイド調を駆逐し、Magicianのvoiceに統一する。**

| Before（現状） | After（指針） |
|---|---|
| The tuna capital | The port where tomorrow's tuna begins its journey before dawn |
| Home to one of Japan's premier tuna markets. Join an early morning auction viewing (8–10am, 2F gallery) | Stand in the cold before sunrise. Watch frozen bodies the size of children being auctioned in seconds. |
| Watch dried seaweed resurrect in 10 seconds | Ten seconds. Black becomes green. Dead becomes alive. |
| 47 minutes from Shinagawa. Tonight's dinner becomes tomorrow's adventure. | （Heroサブコピーとして）極小文字で `Miura Peninsula · 47 min from Shinagawa` のみ |
| Great real wasabi from Miura（← 情報誤り） | Real wasabi, grated by your own hand（産地は脇役に） |

**voiceルール：**
- 命令形・体言止め・現在形を多用（"Stand." "Watch." "Taste."）
- 形容詞を削り、動詞と名詞で殴る
- 数字は小さく使う（"Ten seconds." のように短く）
- 日本語版は、観光パンフ的敬体ではなく、**詩的な常体**（"〜である" ではなく "〜する"）
- `A live window into local food culture.` の "live" は "生きている" と "ライブ配信の" の両義。日本語では **"生きた窓"** を推奨

### 3.6 プレースホルダ全撤去（SONNET_HANDOFF.md P0 と同じ、再強調）

以下は **ゼロトレランス**。1つでも残っていたら実装未完了とみなす：

- `〇〇` を含む全て
- `By 文化研究家 〇〇`, `By 能師 〇〇`, `By SANGA田中`
- 記事 `秋刀魚漁の歴史と古事記`（春の体験と無関係）
- 記事 `能における身体技法`（プレースホルダ）
- 記事 `SANGA田中のシェフ哲学`（バイトオペ方針と矛盾）
- テスティモニアル `Aさん`, `Bさん`, `Cさん` — 実データが揃うまで**セクションごと非表示**
- 絵文字 `🍽️`, `🌱` 等のfallback画像

### 3.7 EN/JP 完全両対応

現状、以下のセクションが日本語のみ or 英語のみでtoggle効かない：
- Testimonials (`参加者からのコメント`)
- Blog (`体験をもっと深く知る`)

**実装方針：**
- `src/content/` 配下に `en.json`, `ja.json` を作成
- `src/lib/content.ts` で language state を hook 化
- 全セクションがこの hook から引く構造に統一
- toggle ボタンは **グローバル状態**（ヘッダーの1箇所のみ、各セクションの重複ボタンは削除）

---

## 4. 絶対にやってはいけないこと（Brand Redlines）

1. **絵文字をイラスト/写真のfallbackとして使う** — 🍽️ 🌱 ❌
2. **白背景オンリーで全セクションを統一する** — SaaS化
3. **Heroにブッキングフォームを置く** — 劇場の幕が上がる前に券売機を見せる行為
4. **「5 courses • 90 min • From ¥15,000」のような仕様ピルをHero直下に置く** — 劇場の入口にメニューと価格表を貼るようなもの（ページ中盤の Book セクションへ移動）
5. **`rounded-2xl` `shadow-xl` の典型SaaSカード** を多用する
6. **観光ガイド調のコピー**（"Home to one of Japan's premier..." 等）を残す
7. **機能一覧の比較テーブル**を `Why` の中心に据える（現状の "Typical food tour vs Theater Locals" テーブルは、ブランド的には**宣言文＋映像**に置き換えた方が強い。テーブルを残すなら極めて控えめに）
8. **Blog / Testimonials を placeholder のまま公開** — 非表示が正解
9. **生産者名 / 場所名をカタログ的に列挙** — 各場所は「今夜の皿の続き」として物語的に紹介

---

## 5. 実装順序（推奨）

**Step 0:** `SONNET_HANDOFF.md` の Vercel ビルド安全ルール8項目を熟読。本ドキュメントは**それと併読**する。

**Step 1（P0 - ブランド崩壊の止血）:**
1. 全プレースホルダの削除（〇〇、秋刀魚、Aさん等）
2. BlogSection / TestimonialsSection をコメントアウト（非表示）
3. Featured Experience の `🍽️` 絵文字を削除し、高品質ストック写真にフォールバック
4. Hero の booking form を別セクションに分離
5. EN/JP の全セクション両対応

**Step 2（P0 - ブランド再構築）:**
6. フォント導入（Fraunces + Noto Serif JP を `app/layout.tsx` で読み込み）
7. Hero を暗背景 + フルブリード映像（未確定ならダーク色＋高品質写真でOK） + 一行詩 + 単一CTAに作り変え
8. 情報アーキテクチャの並べ替え（Prologue → Tonight's Program → Your Role → Journey → Miura → Book → Upcoming → Shop → Newsletter）
9. 各セクションに背景トーンのバリエーション付与（白/黒/暗緑/紙色を交互に）

**Step 3（P1 - voice統一）:**
10. 全コピーをMagician voiceに書き換え（観光ガイド調の駆逐）
11. 三浦半島のセクションを "物語の続き" として書き直す
12. Your Role (Unity / Physicality / Surprise) を大きなステートメント型に

**Step 4（P2 - ディテール）:**
13. 質感レイヤー（グレイン、細い金線区切り）
14. マイクロインタラクション（スクロール時のフェードイン等、ただし過剰にしない）
15. Upcoming Sessions を劇場プログラム風のタイムテーブル UI に

**Step 5（必須 - ビルド検証）:**
16. **ローカルで `npm run build` を実行し、エラーゼロを確認**
17. force-dynamic が必要なファイルに残っているか確認（`SONNET_HANDOFF.md` 参照）
18. Prisma lazy init / auth try/catch パターンに触っていないか確認
19. **全てクリア後に push**。前回7回のfix commitを再発させないこと

---

## 6. 成功基準

実装完了後、以下を満たしていること：

- [ ] Heroが全画面の暗背景 + フルブリード映像（またはハイクオリティ写真）で、ブッキングフォームがHeroから消えている
- [ ] サイト内に絵文字1つもない（Nav絵文字を除く）
- [ ] サイト内に `〇〇` や `Aさん` 等のプレースホルダが0個
- [ ] 背景色が最低3トーン以上（白だけではない）
- [ ] 見出しにserif / 明朝フォントが使われている
- [ ] EN/JP toggleがヘッダー1箇所、全セクションに反映される
- [ ] 観光ガイド調のコピー（"Home to..." "The ... capital" 等）が0個
- [ ] BlogPreview / Testimonials が非表示（もしくは実データで差し替え済み）
- [ ] `npm run build` がローカルでゼロエラー
- [ ] Vercel push が **1コミット** で通る（前回: 7コミット必要）

そして最重要：

- [ ] **訪問者が最初の3秒で "これは予約サイトではない。何かの入り口だ" と感じられる**

この最後の項目を満たせない実装は、他の項目がすべてチェックされていても不合格です。

---

## 7. 迷ったときの判断基準

実装中に迷ったら、次の問いを自分に投げてください：

> **"teamLabのサイトを開いた時の感覚"** と、**"WithLocalsのサイトを開いた時の感覚"** のどちらに近いか？

teamLab側に倒れていれば正解。WithLocals側に倒れていれば作り直す。

---

以上。`SONNET_HANDOFF.md` のタクティカル修正リストとVercel安全ルールと併せて、本ドキュメントの方向性を反映した実装を行ってください。
