'use client'

import { useState } from 'react'
import { Search, MapPin, Briefcase, Clock, Heart, Building2 } from 'lucide-react'
import Link from 'next/link'

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Örnek iş ilanları
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Startup Inc.',
      location: 'İstanbul, Türkiye',
      type: 'Tam Zamanlı',
      workType: 'Hibrit',
      salary: '₺40.000 - ₺60.000',
      postedDate: '2 gün önce',
      logo: '🚀',
      isFavorite: false,
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Creative Agency',
      location: 'Ankara, Türkiye',
      type: 'Tam Zamanlı',
      workType: 'Uzaktan',
      salary: '₺35.000 - ₺50.000',
      postedDate: '5 gün önce',
      logo: '🎨',
      isFavorite: true,
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'Enterprise Solutions',
      location: 'İzmir, Türkiye',
      type: 'Tam Zamanlı',
      workType: 'Ofis',
      salary: '₺45.000 - ₺65.000',
      postedDate: '1 hafta önce',
      logo: '💼',
      isFavorite: false,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2">
          Panel / İş İlanları
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">İş İlanları</h1>

        {/* Arama ve Filtreler */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="İş ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tümü
              </button>
              <button
                onClick={() => setSelectedFilter('remote')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedFilter === 'remote'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Uzaktan
              </button>
              <button
                onClick={() => setSelectedFilter('hybrid')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedFilter === 'hybrid'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Hibrit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* İş İlanları Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {job.logo}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 flex items-center">
                    <Building2 size={16} className="mr-1" />
                    {job.company}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <Heart size={24} fill={job.isFavorite ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin size={16} className="mr-2 text-gray-400" />
                {job.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Briefcase size={16} className="mr-2 text-gray-400" />
                {job.type} • {job.workType}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={16} className="mr-2 text-gray-400" />
                {job.postedDate}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="text-lg font-semibold text-teal-600">{job.salary}</span>
              <Link
                href={`/dashboard/jobs/${job.id}`}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Detayları Gör
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sonuç Yok Durumu */}
      {jobs.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <p className="text-gray-500 text-lg">Sonuç yok</p>
          <p className="text-gray-400 mt-2">Arama kriterlerinize uygun iş ilanı bulunamadı.</p>
        </div>
      )}

      {/* Sayfalama */}
      <div className="mt-8 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Sayfa 1 / 1
        </div>
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
    </div>
  )
}
