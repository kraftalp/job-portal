'use client'

import {
  Users,
  Building2,
  Briefcase,
  FileText,
  TrendingUp,
  CheckCircle,
  Clock,
  XCircle,
} from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboardPage() {
  const stats = [
    {
      title: 'Toplam Kullanıcı',
      value: '1,247',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500',
      link: '/admin/users',
    },
    {
      title: 'Toplam Şirket',
      value: '156',
      change: '+8%',
      changeType: 'positive',
      icon: Building2,
      color: 'bg-purple-500',
      link: '/admin/companies',
    },
    {
      title: 'Aktif İlanlar',
      value: '342',
      change: '+23%',
      changeType: 'positive',
      icon: Briefcase,
      color: 'bg-teal-500',
      link: '/admin/jobs',
    },
    {
      title: 'Toplam Başvuru',
      value: '2,891',
      change: '+15%',
      changeType: 'positive',
      icon: FileText,
      color: 'bg-orange-500',
      link: '/admin/applications',
    },
  ]

  const recentApplications = [
    {
      id: 1,
      candidate: 'Ahmet Yılmaz',
      job: 'Senior Frontend Developer',
      company: 'Tech Startup Inc.',
      status: 'pending',
      date: '27.11.2025 14:30',
    },
    {
      id: 2,
      candidate: 'Ayşe Demir',
      job: 'UX/UI Designer',
      company: 'Creative Agency',
      status: 'interview',
      date: '27.11.2025 12:15',
    },
    {
      id: 3,
      candidate: 'Mehmet Kaya',
      job: 'Backend Developer',
      company: 'Enterprise Solutions',
      status: 'accepted',
      date: '27.11.2025 10:45',
    },
    {
      id: 4,
      candidate: 'Zeynep Şahin',
      job: 'Product Manager',
      company: 'Innovation Labs',
      status: 'rejected',
      date: '26.11.2025 16:20',
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: {
        label: 'Beklemede',
        color: 'bg-yellow-100 text-yellow-800',
        icon: Clock,
      },
      interview: {
        label: 'Görüşme',
        color: 'bg-blue-100 text-blue-800',
        icon: TrendingUp,
      },
      accepted: {
        label: 'Kabul Edildi',
        color: 'bg-green-100 text-green-800',
        icon: CheckCircle,
      },
      rejected: {
        label: 'Reddedildi',
        color: 'bg-red-100 text-red-800',
        icon: XCircle,
      },
    }

    const config = statusConfig[status as keyof typeof statusConfig]
    const Icon = config.icon

    return (
      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
        <Icon size={14} />
        <span>{config.label}</span>
      </span>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Sistem istatistikleri ve genel bakış</p>
      </div>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.title}
              href={stat.link}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span
                  className={`text-sm font-semibold ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </Link>
          )
        })}
      </div>

      {/* İki Sütunlu Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Son Başvurular */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Son Başvurular</h2>
            <Link
              href="/admin/applications"
              className="text-sm text-teal-600 hover:text-teal-700 font-medium"
            >
              Tümünü Gör →
            </Link>
          </div>

          <div className="space-y-4">
            {recentApplications.map((application) => (
              <div
                key={application.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {application.candidate}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {application.job} • {application.company}
                  </p>
                  <p className="text-xs text-gray-500">{application.date}</p>
                </div>
                <div>{getStatusBadge(application.status)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hızlı İşlemler */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Hızlı İşlemler</h2>
          <div className="space-y-3">
            <Link
              href="/admin/jobs/new"
              className="block w-full px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-center font-medium"
            >
              + Yeni İlan Ekle
            </Link>
            <Link
              href="/admin/users"
              className="block w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
            >
              Kullanıcıları Yönet
            </Link>
            <Link
              href="/admin/companies/new"
              className="block w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
            >
              Şirket Ekle
            </Link>
            <Link
              href="/admin/reports"
              className="block w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
            >
              Raporları Görüntüle
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Sistem Durumu</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Veritabanı</span>
                <span className="text-green-600 font-medium">✓ Aktif</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">API</span>
                <span className="text-green-600 font-medium">✓ Aktif</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Depolama</span>
                <span className="text-gray-600 font-medium">68% Kullanımda</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aylık Grafik Önizlemesi */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Aylık İstatistikler</h2>
        <div className="h-64 flex items-end justify-between space-x-2">
          {[45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 88, 100].map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-teal-500 rounded-t hover:bg-teal-600 transition-colors cursor-pointer"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-gray-500 mt-2">
                {['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'][index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
