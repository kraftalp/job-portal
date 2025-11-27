'use client'

import { CheckCircle, XCircle, AlertCircle, Camera } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hoş Geldin Kartı */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Hoş geldiniz</h1>
            <p className="text-gray-600 text-lg mb-4">
              Talendox ile 5 adımda yeni işinize
            </p>
            <p className="text-gray-600">
              Almanya'da yeni işini bul ve bu süreçte sana destek olalım.
            </p>
          </div>
          <Link
            href="/dashboard/explore"
            className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            İşleri keşfet
          </Link>
        </div>
      </div>

      {/* İlerleme Adımları */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="space-y-4">
          {/* Adım 1 */}
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Hesap oluşturuldu</h3>
            </div>
          </div>

          {/* Adım 2 */}
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">E-posta adresi doğrulandı</h3>
            </div>
          </div>

          {/* Adım 3 */}
          <div className="flex items-start space-x-4">
            <XCircle className="text-gray-300 flex-shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Profil açıklaması eklendi</h3>
                <Link
                  href="/dashboard/profile"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  Ekle →
                </Link>
              </div>
            </div>
          </div>

          {/* Adım 4 */}
          <div className="flex items-start space-x-4">
            <XCircle className="text-gray-300 flex-shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Profil fotoğrafı eklendi</h3>
                <Link
                  href="/dashboard/profile"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  Ekle →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-amber-800">
              Şimdi Talendox Premium yükseltmesi alın ve tüm özelliklerin tadını çıkarın!
            </p>
          </div>
        </div>

        <div className="mt-4 flex space-x-3">
          <Link
            href="/premium"
            className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Talendox Premium
          </Link>
          <Link
            href="/dashboard/explore"
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            İşleri keşfet
          </Link>
        </div>
      </div>

      {/* Özellikler Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/premium"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">💎</span>
            </div>
            <h3 className="font-semibold text-gray-900">Premium satın al</h3>
          </div>
          <p className="text-sm text-gray-600">
            Talendox Dil Kursları ile CV'nizi ve profilinizi kişiselleştirin
          </p>
        </Link>

        <Link
          href="/store"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl">🏪</span>
            </div>
            <h3 className="font-semibold text-gray-900">Talendox Mağazasını keşfet</h3>
          </div>
          <p className="text-sm text-gray-600">
            Talendox Mağazası'ndan ek hizmetler satın alın
          </p>
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Başarılı</p>
            <p className="text-sm text-gray-600">Şimdi giriş yaptınız.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
