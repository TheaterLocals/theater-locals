export default function WhyTheaterLocals() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold mb-4 text-center">Theater Localsがいい理由。</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          単なる「観光体験」ではない、「記憶に刻まれる学習体験」
        </p>

        {/* Comparison Table */}
        <div className="mb-16 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-4 px-4 font-semibold">体験の要素</th>
                <th className="text-left py-4 px-4 font-semibold">従来の観光体験</th>
                <th className="text-left py-4 px-4 font-semibold text-amber-600">Theater Locals</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 font-semibold">形式</td>
                <td className="py-4 px-4">「見学」「説明」</td>
                <td className="py-4 px-4 text-amber-600">「参加」「役割」</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 font-semibold">主体性</td>
                <td className="py-4 px-4">受け身</td>
                <td className="py-4 px-4 text-amber-600">能動的（役割を演じる）</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 font-semibold">記憶への定着</td>
                <td className="py-4 px-4">脳に残る</td>
                <td className="py-4 px-4 text-amber-600">体に刻まれる</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 font-semibold">旅後の行動</td>
                <td className="py-4 px-4">写真・SNS投稿で終了</td>
                <td className="py-4 px-4 text-amber-600">購買・リピート・周辺旅行</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold">文化理解の深さ</td>
                <td className="py-4 px-4">表面的なハイライト</td>
                <td className="py-4 px-4 text-amber-600">歴史・風土・技術の背景知識</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3 Design Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "👥",
              title: "一体感（役割）",
              description:
                "あなたは単なる見物人ではありません。体験中、あなたは『調理者』『文化の継承者』の役割を持ちます。Savi's Workshopが生み出した没入体験の本質です。",
            },
            {
              icon: "💪",
              title: "身体性",
              description:
                "手で刻む、口で味わう、リズムで感じる。記憶は『頭』ではなく『体』に刻まれます。チームラボ猪子氏が追求した『身体認識』の理論を体験に落とし込みました。",
            },
            {
              icon: "✨",
              title: "サプライズ",
              description:
                "ディズニー『美女と野獣』の変身シーンのように、『え？』という驚きが脳に感動を刻む。予測不可能な瞬間が、最高の記憶になる。",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg border border-amber-200"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Business Model */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6">Theater Localsの事業設計</h3>
          <p className="text-lg font-semibold text-gray-900 mb-4">
            「体験は『始まり』。旅後の『つながり』が本質。」
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: "旅前", content: "期待値を高める（このWebサイト）" },
              { phase: "旅ナカ", content: "五感体験 ＋ BGストーリー学習" },
              { phase: "旅後", content: "EC購買 → 関係人口化 → 三浦半島へのリピート訪問" },
            ].map((phase) => (
              <div key={phase.phase} className="bg-white p-4 rounded border border-gray-200">
                <p className="font-bold text-amber-600 mb-2">{phase.phase}</p>
                <p className="text-gray-700">{phase.content}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-gray-700 italic">
            WithLocalsは『ツアー体験』を完成させる。
            <br />
            Theater Localsは『人生の一部に、その地域を組み込む』。
          </p>
        </div>
      </div>
    </section>
  );
}
