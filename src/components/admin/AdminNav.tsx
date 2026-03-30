"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { LayoutDashboard, Users, Calendar, ShoppingCart, LogOut } from "lucide-react";

export default function AdminNav() {
  const { data: session } = useSession();

  const menuItems = [
    { label: "ダッシュボード", href: "/admin", icon: LayoutDashboard },
    { label: "ユーザー管理", href: "/admin/users", icon: Users },
    { label: "予約管理", href: "/admin/bookings", icon: Calendar },
    { label: "体験管理", href: "/admin/experiences", icon: ShoppingCart },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white shadow-lg flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Theater Locals</h1>
        <p className="text-xs text-gray-400">Admin Dashboard</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors group"
            >
              <Icon size={20} className="group-hover:text-amber-500" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-1">ログイン中</p>
          <p className="text-sm font-semibold text-gray-200">{session?.user?.email}</p>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white rounded-lg transition-colors text-sm font-semibold"
        >
          <LogOut size={16} />
          ログアウト
        </button>
      </div>
    </aside>
  );
}
