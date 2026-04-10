import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Users, Calendar, ShoppingCart, MessageSquare } from "lucide-react";

export default async function AdminDashboard() {
  const session = await auth();

  const [totalUsers, totalBookings, totalExperiences, totalReviews] = await Promise.all([
    prisma.user.count({ where: { role: "USER" } }),
    prisma.booking.count(),
    prisma.experience.count(),
    prisma.review.count(),
  ]);

  const stats = [
    {
      label: "ユーザー数",
      value: totalUsers,
      icon: Users,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      label: "予約数",
      value: totalBookings,
      icon: Calendar,
      color: "bg-amber-100",
      textColor: "text-amber-600",
    },
    {
      label: "体験プログラム",
      value: totalExperiences,
      icon: ShoppingCart,
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      label: "レビュー",
      value: totalReviews,
      icon: MessageSquare,
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">管理者ダッシュボード</h1>
        <p className="text-gray-600">Theater Locals CRM管理画面</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`${stat.color} p-6 rounded-lg shadow hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
                </div>
                <Icon size={32} className={stat.textColor} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">クイックアクション</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/admin/users"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 mb-1">ユーザー管理</h3>
            <p className="text-sm text-gray-600">ユーザー一覧を確認・管理</p>
          </a>

          <a
            href="/admin/bookings"
            className="p-4 border border-gray-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 mb-1">予約管理</h3>
            <p className="text-sm text-gray-600">予約状況を確認・編集</p>
          </a>

          <a
            href="/admin/experiences"
            className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 mb-1">体験管理</h3>
            <p className="text-sm text-gray-600">プログラムを作成・管理</p>
          </a>
        </div>
      </div>
    </div>
  );
}
