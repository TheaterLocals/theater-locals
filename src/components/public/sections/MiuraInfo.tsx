export default function MiuraInfo() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container-max">
        <h2 className="text-4xl font-bold mb-4 text-center">体験後、三浦半島へ。</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          今夜の体験が、明日の旅への入口になる。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-blue-300 to-teal-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-2xl font-bold">三浦半島インタラクティブマップ</p>
            </div>
          </div>

          {/* Featured Locations */}
          <div className="space-y-4">
            {[
              {
                title: "秋刀魚漁の今",
                desc: "〇〇地区（秋刀魚の産地）",
              },
              {
                title: "鎌倉の歴史・文化",
                desc: "鎌倉（歴史・文化）",
              },
              {
                title: "職人との出会い",
                desc: "〇〇（工芸職人エリア）",
              },
            ].map((loc, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-1">{loc.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{loc.desc}</p>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                  詳しく→
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center space-x-4">
          <button className="btn-primary">三浦半島ガイドを見る</button>
          <button className="btn-secondary">次の旅を計画する</button>
        </div>
      </div>
    </section>
  );
}
