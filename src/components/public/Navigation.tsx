"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navigation() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-amber-600">
          Theater Locals
        </Link>

        <div className="flex items-center gap-6">
          {session ? (
            <>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              {session.user?.role === "ADMIN" && (
                <Link href="/admin" className="text-amber-600 font-semibold">
                  Admin
                </Link>
              )}
              <button
                onClick={() => signOut()}
                className="text-gray-600 hover:text-gray-900"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login" className="btn-primary">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
