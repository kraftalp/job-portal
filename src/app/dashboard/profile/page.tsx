'use client'

import { useState } from 'react'
import { Camera, Edit2, Plus, Trash2, Video } from 'lucide-react'

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2">
          Panel / Profil
        </nav>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Profiliniz</h1>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <span>Önay talep et</span>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">↗</span>
          </button>
        </div>
      </div>

      {/* Profil Kartı */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-start space-x-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center">
              <Camera className="text-white" size={32} />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50">
              <Camera size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Kullanıcı Bilgisi */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">Said Taşdelen</h2>
              <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                Aktif değil
              </span>
            </div>
            <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
              Premium'a yükselt →
            </button>
          </div>
        </div>
      </div>

      {/* Bilgiler */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Bilgiler</h3>
          <button className="text-teal-600 hover:text-teal-700">
            <Edit2 size={20} />
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <span className="text-gray-500 w-32">Doğum tarihi:</span>
            <span className="text-gray-900">-</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 w-32">Doğum yeri:</span>
            <span className="text-gray-900">-</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 w-32">Meslek:</span>
            <span className="text-gray-900">-</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 w-32">Sektör:</span>
            <span className="text-gray-900">-</span>
          </div>
        </div>
      </div>

      {/* Kişisel Video */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Kişisel Video</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Video className="mx-auto text-gray-400 mb-3" size={48} />
          <p className="text-gray-500 text-sm mb-4">
            Bir tanıtım videosu yüklemek için lütfen Talendox yöneticinizle iletişime geçin.
          </p>
        </div>
      </div>

      {/* Nitelikler */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Nitelikler</h3>
        <p className="text-sm text-gray-500 mb-4">
          Talendox soruları tarafından değerlendirilmeler.
        </p>
      </div>

      {/* Hakkımda */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Hakkımda</h3>
          <button className="text-teal-600 hover:text-teal-700">
            <Edit2 size={20} />
          </button>
        </div>
        <p className="text-gray-500 italic text-sm">Lütfen kendinizi tanıtın.</p>
      </div>

      {/* İş Deneyimi */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">İş Deneyimi</h3>
          <button
            onClick={() => setActiveSection('experience')}
            className="text-teal-600 hover:text-teal-700"
          >
            <Plus size={20} />
          </button>
        </div>
        {activeSection === 'experience' ? (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Şirket adı"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Pozisyon"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                placeholder="Başlangıç tarihi"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="date"
                placeholder="Bitiş tarihi"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <textarea
              placeholder="Açıklama"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                Kaydet
              </button>
              <button
                onClick={() => setActiveSection(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                İptal
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Henüz iş deneyimi eklenmedi.</p>
        )}
      </div>

      {/* Eğitim */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Eğitim</h3>
          <button
            onClick={() => setActiveSection('education')}
            className="text-teal-600 hover:text-teal-700"
          >
            <Plus size={20} />
          </button>
        </div>
        {activeSection === 'education' ? (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <input
              type="text"
              placeholder="Okul adı"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Derece"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Bölüm"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                placeholder="Başlangıç tarihi"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="date"
                placeholder="Bitiş tarihi"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                Kaydet
              </button>
              <button
                onClick={() => setActiveSection(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                İptal
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Henüz eğitim bilgisi eklenmedi.</p>
        )}
      </div>

      {/* Diller */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Diller</h3>
          <button
            onClick={() => setActiveSection('language')}
            className="text-teal-600 hover:text-teal-700"
          >
            <Plus size={20} />
          </button>
        </div>
        {activeSection === 'language' ? (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Dil"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                <option>Seviye seçin</option>
                <option>Başlangıç</option>
                <option>Orta</option>
                <option>İleri</option>
                <option>Ana Dil</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                Kaydet
              </button>
              <button
                onClick={() => setActiveSection(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                İptal
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            Talendox soruları tarafından değerlendirilmeler.
          </p>
        )}
      </div>

      {/* Belgeler */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Belgeler</h3>
        <p className="text-sm text-gray-500 mb-4">
          Bu alanı yalnızca siz ve Talendox yöneticiniz düzenleyebilirsiniz.
        </p>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700 mb-1">Başlık</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700 mb-1">Belge türü</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700 mb-1">Verilen kurum</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700 mb-1">Dosya</div>
          </div>
        </div>
        <div className="text-center py-8 text-gray-500">
          Sonuç yok
        </div>
      </div>
    </div>
  )
}
