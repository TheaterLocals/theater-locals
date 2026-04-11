# Sonnet 4.6 ハンドオフ：L1サイト ブランド整合修正 + Vercelデプロイ

> 作成：2026年4月10日（Opus 4.6 セッションからの引き継ぎ）
> 対象デプロイ：https://theater-locals-dwtbtyvis-theater-locals.vercel.app/

---

## 🎯 このセッションのゴール

1. 現在ライブ中のサイトに残る**ブランド違反・コンテンツ矛盾を全て修正**
2. `git push` → Vercel自動デプロイを**1回で成功させる**（前回は7回のFixコミットが必要だった）

---

## 📍 参考にすべきドキュメント（必ず読むこと）

1. `website-implementation-plan.md` — 実装プラン全体（4月9日修正履歴付き）
2. `/sessions/nice-festive-mccarthy/mnt/.auto-memory/MEMORY.md` — プロジェクト文脈・判断事項・モデル選択方針
3. Notionの以下ページ（Notion MCPで取得可能）：
   - 🧭 TL｜ブランドプロポジション：何者であるべきか（`32f8effa2d84811eb591e7abbd0d9279`）
   - 🎯 TL｜ブランドプロミス＆競合優位性（`32e8effa2d848195b3dfcdab26b4571d`）
   - 🌱 TL｜春プロトタイプ：レシピ × ストーリー完全版（`3218effa2d8481328503e240b11d3b45`）

**重要ルール：** 実装前に必ずNotionから最新データを取得して突合すること。mdとNotionの乖離が過去に発生済み。

---

## 🔴 Part 1：ブランド整合の修正（P0〜P3）

### P0：ライブ前に絶対修正（最優先）

#### P0-1. BlogPreview.tsx を全面書き換えまたは一時非表示化
**問題：**
- 「SANGA田中のシェフ哲学」記事 → バイトオペレーション前提と矛盾（SANGA田中は翌日送客先であり、当日シェフではない）
- 「秋刀魚漁の歴史と古事記」→ メニュー不一致（春の五皿に秋刀魚は含まれない）、季節不一致（今は4月）、Explorer×Magicianアーキタイプと逆の「知的案内人」トーン
- 「能における身体技法」→ 三浦半島食体験と無関係
- 「By 〇〇」プレースホルダ → 伏字がライブに出ている

**対応：** `page.tsx` から `<BlogPreview />` を一旦コメントアウトで非表示化するのが最速。コンテンツが揃うまでは載せない。

#### P0-2. GuestTestimonials.tsx を一時非表示化
**問題：** プロトタイプ前なので実テスティモニアルは存在しない。「本当に驚きました」等の架空コメントは景品表示法リスク（偽証言）。
**対応：** `page.tsx` から `<GuestTestimonials />` を非表示化。

#### P0-3. MiuraInfo.tsx の修正
**問題：**
- 「〇〇地区（秋刀魚の産地）」「〇〇（工芸職人エリア）」という伏字ライブ公開
- 秋刀魚は春メニューにない

**対応：** 春の五皿に沿った3カードに差替：
1. 三崎港（マグロの産地・翌朝セリ見学可能）
2. 葉山（葉山牛の産地）
3. 三浦市（わかめ・サザエの産地）

または一時非表示化でも可。

#### P0-4. JourneyMap.tsx のコンテンツ修正
**問題：** 「調理を体験」など抽象表現で、春の五皿の具体性が失われている。
**対応：** 「メイン体験」を「わかめの蘇生から葉山牛の体温造りまで、五皿の物語を体験」のように具体化。

### P1：EN/JP両対応の完遂

以下のコンポーネントが**日本語のみ実装**になっている。content/*.jsonに `en` と `jp` 両キーを追加し、言語トグル状態に応じて表示切替：

- `JourneyMap.tsx`
- `MiuraInfo.tsx`（存続させる場合）
- `NewsletterCTA.tsx`
- Heroの下部ラベルや信頼シグナル（既に対応済みなら確認のみ）

**注意：** 上半分のコンポーネント（Hero, FeaturedExperience, UpcomingExperiences, WhyTheaterLocals, ECPreview）は既にEN/JP対応済みなので、その構造をそのまま踏襲すること。

### P2：ブランド差別化の強化（時間があれば）

#### P2-1. 生産者の固有名詞コンテンツ追加
ブランドルール「**食材ではなく人を語る**」を遵守するため、以下を追加検討：
- 三崎魚市場のセリ見学案内（朝8時〜10時・2階見学通路・無料）
- 伊豆のわさび農家
- 熊澤酒造（茅ヶ崎・天青）の蔵見学

`src/content/producers.json` を新設して `ProducersPreview.tsx` を作る、または Featured Experience の下に統合。

#### P2-2. Heroのスライドショーを絵文字から画像に置換
現状：`🔥` emoji + 暗い背景 + テキスト。
改善：ストック画像3枚の連続表示（わかめ、マグロ、葉山牛のイメージ）。`public/images/hero/` に配置。必ず「※ Photo is illustrative」免責表示を維持。

#### P2-3. Featured Experience のビジュアル（🍽️ emoji）をストック画像に置換

### P3：機能的整合性

- Footerのダミーリンク `href="#"` を適切に処理（`rel="nofollow"` または実URLへ）
- 「Find your experience」検索UIは体験が1つしかないので簡素化 or 直接CTAに
- Upcoming Sessions の June / July タブを「Coming Soon」表示に

---

## ⚙️ Part 2：Vercelビルド成功のための必須ルール

> **背景：** 前回のデプロイでは `ac8c5f7` から `6975b46` まで**7回のFixコミット**が必要だった。以下の原則を守れば1回で通る。

### ルール1：Next.js 16のビルド時プリレンダリングを理解する

Next.js 16は全ページをデフォルトで静的プリレンダリングしようとする。**ビルド環境にはDB接続もenv varもない**ため、Prismaやauthを触るページは必ずクラッシュする。

**対策：** 動的データに依存する全ページ・全ルートの先頭に必ず以下を追加：

```tsx
export const dynamic = 'force-dynamic';
```

### ルール2：force-dynamicが必須のファイル一覧

以下のファイルは**全て**先頭に `export const dynamic = 'force-dynamic';` を書くこと：

- `src/app/(admin)/layout.tsx`
- `src/app/(admin)/bookings/page.tsx`
- `src/app/(admin)/experiences/page.tsx`
- `src/app/(admin)/users/page.tsx`
- `src/app/api/auth/[...nextauth]/route.ts`
- **新規に作るadmin系ページ・Prisma触るAPI routeは全て同様に**

### ルール3：Prismaのlazy import + try/catch

`src/app/api/auth/[...nextauth]/route.ts` は以下のパターンを維持：

```tsx
export const dynamic = 'force-dynamic';

import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { handlers } = await import('@/lib/auth');
    return handlers.GET(req);
  } catch {
    return new Response(JSON.stringify({ error: 'Auth not available' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
// POSTも同様
```

**理由：** トップレベルで `@/lib/auth` をimportするとbuild時に評価されてPrismaがクラッシュする。動的import + try/catchで避ける。

### ルール4：src/lib/prisma.ts のsafe init を維持

```tsx
import { PrismaClient } from "../prisma-client/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | null };

function createPrismaClient(): PrismaClient | null {
  try {
    return new PrismaClient({} as any);
  } catch {
    return null;
  }
}

export const prisma: PrismaClient =
  (globalForPrisma.prisma ?? createPrismaClient()) as PrismaClient;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
```

**変更禁止。** これでbuild時にDB接続が無くてもクラッシュしない。

### ルール5：route group conflict を起こさない

Next.js App Routerの`(group)`ディレクトリは同じURLに展開される。**`(admin)/page.tsx` と `(public)/page.tsx` は両方とも `/` にマウントされるため衝突する。**

- `(public)/page.tsx` だけをルート`/`に配置
- `(admin)` 以下は `/admin/bookings` のようにサブパスを切る
- `(admin)/page.tsx`（admin のルート）は絶対に作らない

### ルール6：src/app/ 以外にapp/を作らない

`app/` ディレクトリと `src/app/` ディレクトリが両方あるとNext.jsが混乱する。**作業は `src/app/` のみ。** プロジェクトルートに `app/` があったら削除。

### ルール7：ビルド確認は必ずpush前にローカルで

```bash
npm run build
```

これが**ローカルで成功してから**pushする。TypeScriptエラー・ESLintエラー・プリレンダリングエラーが全てここで出る。エラー0でない限り絶対にpushしないこと。

### ルール8：`any` 型とESLintエラー

Next.jsビルドではESLintエラーでもビルドが失敗する。以下に注意：
- `any` 型の使用 → 型を明示するか `// eslint-disable-next-line @typescript-eslint/no-explicit-any` で回避
- 未使用import・未使用変数 → 削除
- `React Hook` 依存配列警告 → 修正

---

## 📋 推奨作業順序

```
Step 1: git pull で最新状態に同期
Step 2: Notionから最新ブランドデータを取得（3ページ）
Step 3: P0の修正を実施（Blog/Testimonials非表示化、MiuraInfo/JourneyMap修正）
Step 4: npm run build でローカルビルド確認（必ず成功させる）
Step 5: P1（EN/JP両対応の完遂）
Step 6: npm run build で再確認
Step 7: P2/P3（時間があれば）
Step 8: npm run build で最終確認
Step 9: git add → commit → push
Step 10: Vercelデプロイログを確認、エラーが出たら即修正
```

---

## ⚠️ やってはいけないこと

1. **force-dynamicを外す** → build即失敗
2. **lib/prisma.tsのtry/catchを外す** → build即失敗
3. **auth/route.tsのトップレベルimportに戻す** → build即失敗
4. **ローカルbuildをスキップしてpush** → Vercelで7回のFixループ再発
5. **(admin)/page.tsxを作る** → route group conflict
6. **app/ディレクトリを作る** → src/app/と競合
7. **Notionを見ずにmdだけで実装** → 情報の古さで手戻り発生

---

## ✅ 成功の定義

1. ライブサイトにSANGA田中、秋刀魚、能、〇〇プレースホルダが**1つも存在しない**
2. EN/JPトグルが全セクションで機能
3. `git push` → Vercel build が**1回で成功**
4. ブラウザで全セクションがブランド準拠のコンテンツを表示

---

## 参考：前回のエラー履歴（再発防止用）

```
6975b46 Fix: force-dynamic on all admin pages to prevent prerender
c152c2d Fix: robust auth route with try/catch for missing DB
716993c Fix: force-dynamic auth route and safe prisma init
072ff45 Fix: wrap Prisma init in try/catch, force-dynamic auth route
9ac981c Fix: remove (admin)/page.tsx that conflicts with (public) root
fd3a1ce Fix: rename route group directories
862ce78 Remove old app/ directory — use src/app/ exclusively
```

これが**今回の目標ゼロコミット**で通るようにすること。
