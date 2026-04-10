"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSignIn = async (provider: string) => {
    await signIn(provider, { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Theater Locals</h1>
          <p className="text-gray-600">
            ログインして、体験を予約しましょう。
          </p>
        </div>

        <div className="space-y-4">
          {/* Google Sign In */}
          <button
            onClick={() => handleSignIn("google")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google で登録
          </button>

          {/* Apple Sign In */}
          <button
            onClick={() => handleSignIn("apple")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 13.5c-.91 2.18-.5 3.35.37 4.75.55 1.08 1.5 2.58 2.9 2.58 1.3 0 1.75-.59 2.58-.59.92 0 1.4.59 2.62.59 1.5 0 2.74-1.53 3.35-2.62.91-1.73 1.22-3.52.86-4.77-.43-1.5-1.58-2.62-2.74-2.62-1.12 0-1.98.63-2.59.63-.51 0-1.27-.68-2.36-.68-1.93 0-3.52 1.48-4.39 3.73zM12.45 2.49c.59.68.73 1.58.73 2.4 0 1.12-.15 2.25-.73 3.14-1.07 1.58-2.78 2.68-4.65 2.68-.5 0-.97-.06-1.43-.18.68-2.18 1.98-4.06 4.41-5.22.95-.48 1.67-1.26 1.67-2.82z" />
            </svg>
            Apple で登録
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            サインインすることで、利用規約とプライバシーポリシーに同意したことになります。
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link href="/" className="text-center block text-amber-600 font-semibold hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
