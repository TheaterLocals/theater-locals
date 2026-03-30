import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              地方の食文化を
              <br />
              <span className="text-amber-600">ショーのように</span>
              <br />
              擬似体験する
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              五感で感じる、日本文化のストーリー。その先、三浦半島へ。
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    実施日時
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    人数
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>1-2名</option>
                    <option>3-4名</option>
                    <option>5-10名</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    言語
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>日本語</option>
                    <option>English</option>
                    <option>中文</option>
                  </select>
                </div>
              </div>
              <button className="w-full btn-primary flex items-center justify-center gap-2">
                <Search size={20} />
                体験を予約する
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              2026年5月下旬開始。先行予約受付中
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 bg-gradient-to-br from-amber-300 to-orange-400 rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder for hero image */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🎭</div>
                <p className="text-2xl font-bold">調理体験の場面</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
