'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

export default function HomePage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex">
      {/* Sol Taraf - Karanlık Arka Plan */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-12 flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-12">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-900">T</span>
            </div>
            <span className="text-white text-2xl font-bold">Talendox</span>
            <span className="text-white text-xl">.com</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-white leading-tight">
              En İyi Yetenekler.<br />
              Başarılı Şirketler.
            </h1>
          </div>
        </div>

        <div className="space-y-4 text-sm text-gray-300">
          <p>Yardıma ihtiyacınız var mı veya hizmetlerimizle ilgili bir sorunuz mu var?</p>
          <p>
            O zaman destek ekibimizle iletişime geçin.{' '}
            <a href="mailto:support@talendox.com" className="text-teal-400 hover:underline">
              Destek
            </a>
            . 48 saat içinde bir yanıt alacaksınız.
          </p>
          <p className="mt-8">Talendox Ekibiniz</p>
        </div>
      </div>

      {/* Sağ Taraf - Giriş Formu */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobil Logo */}
          <div className="lg:hidden flex items-center justify-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">T</span>
            </div>
            <span className="text-slate-900 text-2xl font-bold">Talendox</span>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Hoş geldiniz</h2>
            <p className="text-gray-600 mb-8">
              Portala erişim sağlamak için lütfen kimliğinizi doğrulayın.
            </p>

            {/* Sekmeler */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  isLogin
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                YETENEKLER İÇİN
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  !isLogin
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                ŞİRKETLER İÇİN
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {!isLogin && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ad <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Soyad <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon numarası
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  )}
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta adresi <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isLogin ? 'Şifre' : 'Şifre belirle'} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Şifreyi onayla <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {!isLogin && (
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                    Gizlilik politikasını okudum ve kabul ediyorum. <span className="text-red-500">*</span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
              >
                {isLogin ? 'Giriş yap' : 'Şimdi ücretsiz kaydol'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              {isLogin ? (
                <p className="text-gray-600">
                  Henüz bir hesabınız yok mu?{' '}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-teal-600 hover:underline font-medium"
                  >
                    Şimdi kaydolun ve bir hesap oluşturun!
                  </button>
                </p>
              ) : (
                <p className="text-gray-600">
                  Zaten bir hesabınız var mı?{' '}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-teal-600 hover:underline font-medium"
                  >
                    Hesabınıza giriş yapın
                  </button>
                </p>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-600 text-center">
                Buradan{' '}
                <a href="/files/gizlilik-ve-cerez-politikasi.pdf" className="text-teal-600 hover:underline">
                  KVKK
                </a>
                {' '}ve{' '}
                <a href="/files/gizlilik-ve-cerez-politikasi.pdf" className="text-teal-600 hover:underline">
                  gizlilik politikamıza
                </a>
                {' '}ulaşabilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/admin/login"
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              Admin Girişi
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
