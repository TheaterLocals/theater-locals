import prisma from "@/lib/prisma";

export default async function ExperiencesPage() {
  const experiences = await prisma.experience.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">体験プログラム管理</h1>
        <button className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
          新しい体験を作成
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                タイトル
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                実施日
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                定員
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                金額
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                ステータス
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                アクション
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {experiences.map((exp) => (
              <tr key={exp.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  {exp.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(exp.date).toLocaleDateString("ja-JP")}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {exp.availableSeats}/{exp.capacity}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  ¥{exp.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.status === "ACTIVE"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {exp.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:underline">
                    編集
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {experiences.length === 0 && (
          <div className="px-6 py-12 text-center text-gray-600">
            <p>体験プログラムはまだ作成されていません。</p>
          </div>
        )}
      </div>
    </div>
  );
}
