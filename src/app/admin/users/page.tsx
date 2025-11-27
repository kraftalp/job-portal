'use client'

import { useState } from 'react'
import { Search, Filter, Eye, Edit2, Trash2, UserPlus, Download } from 'lucide-react'

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  const users = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      email: 'ahmet@example.com',
      role: 'candidate',
      status: 'active',
      joinDate: '15.10.2025',
      applications: 5,
    },
    {
      id: 2,
      name: 'Tech Startup Inc.',
      email: 'info@techstartup.com',
      role: 'company',
      status: 'active',
      joinDate: '10.10.2025',
      jobs: 8,
    },
    {
      id: 3,
      name: 'Ayşe Demir',
      email: 'ayse@example.com',
      role: 'candidate',
      status: 'inactive',
      joinDate: '20.09.2025',
      applications: 2,
    },
    {
      id: 4,
      name: 'Creative Agency',
      email: 'contact@creative.com',
      role: 'company',
      status: 'active',
      joinDate: '05.11.2025',
      jobs: 3,
    },
  ]

  const getRoleBadge = (role: string) => {
    const config = {
      candidate: { label: 'Aday', color: 'bg-blue-100 text-blue-800' },
      company: { label: 'Şirket', color: 'bg-purple-100 text-purple-800' },
      admin: { label: 'Admin', color: 'bg-red-100 text-red-800' },
    }
    const roleConfig = config[role as keyof typeof config]
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleConfig.color}`}>
        {roleConfig.label}
      </span>
    )
  }

  const getStatusBadge = (status: string) => {
    return status === 'active' ? (
      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
        Aktif
      </span>
    ) : (
      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
        Pasif
      </span>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Kullanıcı Yönetimi</h1>
        <p className="text-gray-600">Tüm kullanıcıları görüntüleyin ve yönetin</p>
      </div>

      {/* Araç Çubuğu */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Arama */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Kullanıcı ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Filtreler */}
          <div className="flex gap-2">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="all">Tüm Roller</option>
              <option value="candidate">Adaylar</option>
              <option value="company">Şirketler</option>
              <option value="admin">Adminler</option>
            </select>

            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Filter size={20} />
              <span>Filtrele</span>
            </button>

            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Download size={20} />
              <span>Dışa Aktar</span>
            </button>

            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
              <UserPlus size={20} />
              <span>Yeni Kullanıcı</span>
            </button>
          </div>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-gray-600 mb-1">Toplam Kullanıcı</p>
          <p className="text-2xl font-bold text-gray-900">1,247</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-gray-600 mb-1">Adaylar</p>
          <p className="text-2xl font-bold text-blue-600">1,091</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-gray-600 mb-1">Şirketler</p>
          <p className="text-2xl font-bold text-purple-600">156</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-gray-600 mb-1">Bu Ay Yeni</p>
          <p className="text-2xl font-bold text-green-600">+42</p>
        </div>
      </div>

      {/* Kullanıcı Tablosu */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kullanıcı
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Katılım Tarihi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İstatistikler
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getRoleBadge(user.role)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(user.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.role === 'candidate' ? (
                      <span>{user.applications} Başvuru</span>
                    ) : user.role === 'company' ? (
                      <span>{user.jobs} İlan</span>
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-gray-600 hover:text-teal-600 transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="text-gray-600 hover:text-blue-600 transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button className="text-gray-600 hover:text-red-600 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sayfalama */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Toplam <span className="font-medium">1,247</span> kullanıcıdan{' '}
              <span className="font-medium">1-10</span> arası gösteriliyor
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed">
                ‹‹
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed">
                ‹
              </button>
              <span className="px-3 py-1">Sayfa 1 / 125</span>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white">
                ›
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white">
                ››
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
