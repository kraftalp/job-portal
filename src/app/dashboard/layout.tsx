'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  User,
  Briefcase,
  FileText,
  Heart,
  MessageSquare,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Globe
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showFavorites, setShowFavorites] = useState(false)

  const menuItems = [
    { icon: LayoutDashboard, label: 'Panel', href: '/dashboard' },
    { icon: User, label: 'Profil', href: '/dashboard/profile' },
    { icon: Briefcase, label: 'Şirketler', href: '/dashboard/companies' },
    { icon: FileText, label: 'İş İlanları', href: '/dashboard/jobs' },
    { icon: FileText, label: 'Başvurular', href: '/dashboard/applications' },
    { icon: MessageSquare, label: 'Eşleşmeler', href: '/dashboard/matches' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-900 to-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 flex items-center justify-between border-b border-slate-700">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-900">T</span>
              </div>
              <div>
                <span className="text-white text-xl font-bold">Talendox</span>
                <span className="text-white text-sm">.com</span>
              </div>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Kullanıcı Bilgisi */}
          <div className="p-4">
            <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                ST
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">Said Taşdelen</p>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                  Aktif değil
                </span>
              </div>
              <ChevronDown className="text-white" size={20} />
            </div>
          </div>

          {/* Menü */}
          <nav className="flex-1 px-4 py-2 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-slate-700 text-white'
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}

              {/* Favoriler Dropdown */}
              <li>
                <button
                  onClick={() => setShowFavorites(!showFavorites)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Heart size={20} />
                    <span>Favoriler</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      showFavorites ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {showFavorites && (
                  <ul className="ml-8 mt-1 space-y-1">
                    <li>
                      <Link
                        href="/dashboard/favorites/companies"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-slate-700"
                      >
                        Şirketler
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/favorites/jobs"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-slate-700"
                      >
                        İş ilanları
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Alt Menü */}
          <div className="p-4 space-y-2 border-t border-slate-700">
            <Link
              href="/dashboard/settings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
            >
              <Settings size={20} />
              <span>Ayarlar</span>
            </Link>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors">
              <LogOut size={20} />
              <span>Çıkış yap</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Ana İçerik */}
      <div className="flex-1 lg:ml-64">
        {/* Üst Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                <Menu size={24} />
              </button>

              <div className="flex-1 lg:flex-none">
                <h1 className="text-xl font-semibold text-gray-900">Talendox</h1>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Globe size={16} />
                  <span>Türkçe</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Sayfa İçeriği */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
