import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Theater Locals</h3>
            <p className="text-gray-400">
              地方文化を、ショーのように擬似体験する。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">プロダクト</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">ホーム</Link></li>
              <li><Link href="/experiences" className="hover:text-white">体験一覧</Link></li>
              <li><Link href="/about" className="hover:text-white">プロジェクト概要</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サポート</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">ヘルプセンター</a></li>
              <li><a href="#" className="hover:text-white">キャンセルポリシー</a></li>
              <li><a href="#" className="hover:text-white">利用規約</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">パートナー</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">ホスト申請</a></li>
              <li><a href="#" className="hover:text-white">採用情報</a></li>
              <li><a href="#" className="hover:text-white">連携企業</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Theater Locals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
