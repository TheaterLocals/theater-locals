export default function JourneyMap() {
  const stages = [
    {
      title: "旅前（7日前〜当日）",
      steps: [
        "発見 → サイト訪問、プログラム閲覧",
        "期待醸成 → 背景ストーリー記事を読む",
        "予約 → 申し込み、参加確認メール",
      ],
    },
    {
      title: "旅ナカ（当日）",
      steps: [
        "到着 → 会場に来た",
        "プレショー → 世界観へのセットアップ（30分）",
        "メイン体験 → 調理を体験（90分）",
        "旅後つながり → EC, CRM登録（20分）",
      ],
    },
    {
      title: "旅後（翌日～30日）",
      steps: [
        "思い出共有 → SNS投稿、友人と会話",
        "学習続行 → ブログ記事、背景知識コンテンツ閲覧",
        "EC購入 → 食材・器をオンライン購入",
        "旅先訪問 → 三浦半島への周辺旅行予約",
      ],
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl font-bold mb-12 text-center">
          体験のジャーニーマップ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage, idx) => (
            <div key={stage.title} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {stage.title}
                </h3>
              </div>

              <div className="space-y-3">
                {stage.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex gap-3">
                    <div className="text-amber-600 font-bold min-w-fit">
                      {String.fromCharCode(97 + stepIdx)}.
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-amber-50 border-l-4 border-amber-600 rounded">
          <p className="text-lg text-gray-900">
            <span className="font-bold">💡 Insight:</span>{" "}
            各ステップに「あなたの体験」と「Theater Localsのサポート」を並列で用意し、
            シームレスなジャーニーを実現します。
          </p>
        </div>
      </div>
    </section>
  );
}
