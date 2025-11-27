'use client'

import { Building2, MapPin, Calendar, Eye } from 'lucide-react'
import Link from 'next/link'

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      company: 'Tech Startup Inc.',
      location: 'İstanbul, Türkiye',
      appliedDate: '15.11.2025',
      status: 'Değerlendiriliyor',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 2,
      jobTitle: 'UX/UI Designer',
      company: 'Creative Agency',
      location: 'Ankara, Türkiye',
      appliedDate: '10.11.2025',
      status: 'Görüşme',
      statusColor: 'bg-blue-100 text-blue-800',
      interviewDate: '25.11.2025 14:00',
    },
    {
      id: 3,
      jobTitle: 'Backend Developer',
      company: 'Enterprise Solutions',
      location: 'İzmir, Türkiye',
      appliedDate: '05.11.2025',
      status: 'Kabul Edildi',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 4,
      jobTitle: 'Product Manager',
      company: 'Innovation Labs',
      location: 'İstanbul, Türkiye',
      appliedDate: '01.11.2025',
      status: 'Reddedildi',
      statusColor: 'bg-red-100 text-red-800',
    },
  ]

  const getStatusBadge = (status: string, statusColor: string) => {
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
        {status}
      </span>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2">
          Panel / Başvurular
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Başvurularım</h1>

        {/* Sekmeler */}
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">
            Başvurularınız (4)
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Gelen Talepler (0)
          </button>
        </div>
      </div>

      {/* Başvurular Listesi */}
      <div className="space-y-4">
        {applications.map((application) => (
          <div
            key={application.id}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {application.jobTitle}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building2 size={16} className="mr-2 text-gray-400" />
                        {application.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-gray-400" />
                        {application.location}
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(application.status, application.statusColor)}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-gray-400" />
                      Başvuru: {application.appliedDate}
                    </div>
                    {application.interviewDate && (
                      <div className="flex items-center text-blue-600 font-medium">
                        <Calendar size={16} className="mr-2" />
                        Görüşme: {application.interviewDate}
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/dashboard/applications/${application.id}`}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Eye size={18} />
                    <span>Detay</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sonuç Yok Durumu */}
      {applications.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <p className="text-gray-500 text-lg">Henüz başvurunuz yok</p>
          <p className="text-gray-400 mt-2 mb-6">
            İş ilanlarına göz atın ve hemen başvurmaya başlayın!
          </p>
          <Link
            href="/dashboard/jobs"
            className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            İş İlanlarına Git
          </Link>
        </div>
      )}

      {/* Sayfalama */}
      {applications.length > 0 && (
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-gray-600">Sayfa 1 / 1</div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              ‹‹
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              ‹
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              ›
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              ››
            </button>
          </div>
          <select className="px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500">
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
        </div>
      )}
    </div>
  )
}
