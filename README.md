# Talendox - İş Bulma ve Eşleştirme Platformu

Modern ve kullanıcı dostu iş arama ve eşleştirme platformu. Next.js 14, React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🎯 Özellikler

### 👤 Kullanıcı (Aday) Özellikleri
- ✅ Kayıt olma ve giriş yapma
- ✅ Detaylı profil oluşturma (CV, fotoğraf, iş deneyimi, eğitim)
- ✅ İş ilanlarını görüntüleme ve filtreleme
- ✅ İş başvurusu yapma
- ✅ Başvuru durumlarını takip etme
- ✅ İlanları favorilere ekleme
- ✅ Görüşme takvimi

### 🏢 Şirket Özellikleri
- ✅ Şirket kaydı ve profil yönetimi
- ✅ İş ilanı ekleme, düzenleme, silme
- ✅ Gelen başvuruları görüntüleme
- ✅ Aday profillerini inceleme
- ✅ Başvuruları değerlendirme (Kabul/Red)
- ✅ Görüşme tarihi belirleme
- ✅ İlan istatistikleri

### ⚙️ Admin Panel Özellikleri
- ✅ Dashboard (Detaylı istatistikler)
  - Toplam kullanıcı sayısı
  - Toplam şirket sayısı
  - Aktif ilan sayısı
  - Toplam başvuru sayısı
  - Aylık grafikler
- ✅ Kullanıcı yönetimi
- ✅ Şirket yönetimi
- ✅ İlan yönetimi
- ✅ Başvuru yönetimi
- ✅ Sistem ayarları

## 🛠️ Teknolojiler

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Stil:** Tailwind CSS
- **Dil:** TypeScript
- **Veritabanı:** Prisma ORM + SQLite (production için PostgreSQL önerilir)
- **İkonlar:** Lucide React
- **Formlar:** React Hook Form (opsiyonel)
- **State Management:** React Context API

## 📦 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Veritabanını oluşturun:**
```bash
npx prisma generate
npx prisma db push
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcınızda açın:**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
job-portal/
├── src/
│   ├── app/
│   │   ├── (auth)/           # Giriş/Kayıt sayfaları
│   │   ├── dashboard/         # Kullanıcı paneli
│   │   ├── admin/            # Admin paneli
│   │   └── layout.tsx        # Ana layout
│   ├── components/           # Yeniden kullanılabilir bileşenler
│   ├── lib/                  # Yardımcı fonksiyonlar
│   └── types/                # TypeScript tipleri
├── prisma/
│   └── schema.prisma         # Veritabanı şeması
└── public/                   # Statik dosyalar
```

## 🎨 Sayfalar

### Ana Sayfalar
- `/` - Giriş/Kayıt sayfası
- `/dashboard` - Kullanıcı ana sayfası
- `/dashboard/profile` - Profil sayfası
- `/dashboard/jobs` - İş ilanları
- `/dashboard/applications` - Başvurular
- `/admin/login` - Admin girişi
- `/admin/dashboard` - Admin paneli

## 🔐 Kullanıcı Rolleri

1. **Candidate (Aday):** İş arayan kullanıcılar
2. **Company (Şirket):** İş ilanı veren şirketler
3. **Admin (Yönetici):** Sistem yöneticileri

## 📊 Veritabanı Modeli

- **User:** Kullanıcı bilgileri
- **Profile:** Kullanıcı profil detayları
- **Company:** Şirket bilgileri
- **Job:** İş ilanları
- **Application:** Başvurular
- **Experience:** İş deneyimleri
- **Education:** Eğitim bilgileri
- **Certificate:** Sertifikalar
- **Language:** Dil becerileri
- **Favorite:** Favori ilanlar

## 🚀 Production Build

```bash
# Build oluştur
npm run build

# Production sunucusunu başlat
npm start
```

## 🔒 Güvenlik

- Şifreler hash'lenerek saklanır
- JWT tabanlı authentication
- CSRF koruması
- XSS koruması
- SQL injection koruması (Prisma ORM)

## 📝 Geliştirme Notları

- Tüm formlar client-side validasyon içerir
- Responsive tasarım (mobil uyumlu)
- SEO friendly
- Accessibility standartlarına uygun
- Modern browser desteği

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.

## 👨‍💻 Geliştirici

Talendox Development Team

## 📞 İletişim

- Email: support@talendox.com
- Website: https://talendox.com

---

**Not:** Bu proje demo amaçlıdır. Production ortamında kullanmadan önce güvenlik ve performans optimizasyonları yapılmalıdır.
