import prisma from "@/lib/prisma";

export default async function BookingsPage() {
  const bookings = await prisma.booking.findMany({
    include: {
      user: true,
      experience: true,
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">予約管理</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                ユーザー
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                体験
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                人数
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                ステータス
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                予約日
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {booking.user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {booking.experience.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {booking.participants}名
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      booking.status === "CONFIRMED"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(booking.createdAt).toLocaleDateString("ja-JP")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {bookings.length === 0 && (
          <div className="px-6 py-12 text-center text-gray-600">
            <p>予約はまだありません。</p>
          </div>
        )}
      </div>
    </div>
  );
}
