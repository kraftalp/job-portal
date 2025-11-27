'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Shield } from 'lucide-react'

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-4">
      <div className="w-full max-w-md">
        {/* Logo ve Başlık */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4">
            <Shield className="text-teal-600" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Paneli</h1>
          <p className="text-gray-300">Talendox Yönetim Sistemi</p>
        </div>

        {/* Giriş Formu */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Giriş Yap</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-posta adresi
              </label>
              <input
                type="email"
                required
                placeholder="admin@talendox.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şifre
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Beni hatırla
                </label>
              </div>
              <a href="#" className="text-sm text-teal-600 hover:text-teal-700">
                Şifremi unuttum
              </a>
            </div>

            <Link
              href="/admin/dashboard"
              className="block w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium text-center"
            >
              Giriş Yap
            </Link>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
