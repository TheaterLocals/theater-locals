"use client";

import { Mail } from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="container-max max-w-2xl">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Theater Localsに参加する</h2>
          <p className="text-xl mb-8 text-amber-50">
            新プログラムの先行予約、業界ニュース、文化コラムが届きます
          </p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail size={20} />
                今すぐ登録
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-amber-500">
              <p className="text-sm text-amber-50 mb-4">
                また、シェフ・パフォーマーとしての参画をお考えの方
              </p>
              <button
                type="button"
                className="px-8 py-2 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white"
              >
                パートナー・ホスト申請
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
