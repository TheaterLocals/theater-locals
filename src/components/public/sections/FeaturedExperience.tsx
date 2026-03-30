import { Star, Clock, Users } from "lucide-react";

export default function FeaturedExperience() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold mb-4 text-center">今、体験できるプログラム</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          2026年5月下旬〜 東京駅近辺でのプレミアム体験
        </p>

        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          {/* Image */}
          <div className="h-64 bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🍂</div>
              <p className="text-2xl font-bold">秋刀魚の調理体験</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  秋刀魚の擬似体験
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span>5.0</span>
                  </div>
                  <span>（申し込み予定数）</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-amber-600">¥15,000</div>
                <div className="text-sm text-gray-600">/1人</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock size={16} />
                <span>3時間 (プレショー30分 + メイン90分 + 旅後30分)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Users size={16} />
                <span>最大10名</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-amber-50 p-3 rounded-lg text-center">
                <p className="font-semibold text-amber-900 text-sm">一体感</p>
                <p className="text-xs text-amber-700">役割を演じる</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg text-center">
                <p className="font-semibold text-amber-900 text-sm">身体性</p>
                <p className="text-xs text-amber-700">体で知る</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg text-center">
                <p className="font-semibold text-amber-900 text-sm">サプライズ</p>
                <p className="text-xs text-amber-700">驚きが感動に</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6">
              秋刀魚の調理という「動作」を通じて、日本の食文化と鎌倉時代の風土を体験します。
              パフォーマーとシェフの日英対話で、なぜこの文化がすごいのかを、
              地形・風土・技術のロジックで理解します。
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 btn-primary">詳細を見る</button>
              <button className="flex-1 btn-secondary">今すぐ予約</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
