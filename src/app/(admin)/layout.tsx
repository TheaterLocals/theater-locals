import AdminNav from "@/components/admin/AdminNav";
import type { ReactNode } from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await auth();

  if (!session || session.user?.role !== "ADMIN") {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminNav />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
