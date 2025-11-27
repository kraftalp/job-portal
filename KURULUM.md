# 🚀 TALENDOX - KURULUM VE KULLANIM KILAVUZU

## 📋 İçindekiler
1. [Sistem Gereksinimleri](#sistem-gereksinimleri)
2. [Hızlı Başlangıç](#hızlı-başlangıç)
3. [Detaylı Kurulum](#detaylı-kurulum)
4. [Kullanıcı Paneli Kullanımı](#kullanıcı-paneli-kullanımı)
5. [Admin Paneli Kullanımı](#admin-paneli-kullanımı)
6. [Özellikler](#özellikler)
7. [Sorun Giderme](#sorun-giderme)

---

## 💻 Sistem Gereksinimleri

- **Node.js:** 18.0 veya üzeri
- **npm:** 9.0 veya üzeri (veya yarn)
- **İşletim Sistemi:** Windows, macOS, Linux
- **Tarayıcı:** Chrome, Firefox, Safari, Edge (güncel versiyonlar)

---

## ⚡ Hızlı Başlangıç

```bash
# 1. Klasöre gidin
cd job-portal

# 2. Bağımlılıkları yükleyin
npm install

# 3. Veritabanını hazırlayın
npx prisma generate
npx prisma db push

# 4. Geliştirme sunucusunu başlatın
npm run dev

# 5. Tarayıcıda açın
# http://localhost:3000
```

---

## 📦 Detaylı Kurulum

### 1. Proje Dosyalarını Açın
```bash
cd job-portal
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
# veya
yarn install
```

### 3. Ortam Değişkenlerini Ayarlayın
```bash
# .env.example dosyasını .env olarak kopyalayın
cp .env.example .env

# .env dosyasını düzenleyin (gerekirse)
```

### 4. Veritabanını Oluşturun
```bash
# Prisma client'ı oluştur
npx prisma generate

# Veritabanı tablolarını oluştur
npx prisma db push

# (Opsiyonel) Veritabanını görselleştir
npx prisma studio
```

### 5. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açın.

---

## 👥 Kullanıcı Paneli Kullanımı

### Kayıt Olma
1. Ana sayfada "YETENEKLER İÇİN" sekmesini seçin
2. Ad, Soyad, E-posta ve Şifre bilgilerini girin
3. Gizlilik politikasını onaylayın
4. "Şimdi ücretsiz kaydol" butonuna tıklayın

### Giriş Yapma
1. Ana sayfada "YETENEKLER İÇİN" sekmesini seçin
2. E-posta ve şifrenizi girin
3. "Giriş yap" butonuna tıklayın

### Profil Oluşturma
1. Sol menüden "Profil" sekmesine gidin
2. **Profil Fotoğrafı:** Kamera ikonuna tıklayarak yükleyin
3. **Kişisel Bilgiler:** Düzenle ikonuna tıklayarak doldurun
4. **İş Deneyimi:** "+" butonuna tıklayarak ekleyin
   - Şirket adı
   - Pozisyon
   - Başlangıç/Bitiş tarihi
   - Açıklama
5. **Eğitim:** "+" butonuna tıklayarak ekleyin
6. **Diller:** "+" butonuna tıklayarak ekleyin

### İş İlanlarına Başvurma
1. Sol menüden "İş İlanları" sekmesine gidin
2. Arama kutusunu kullanarak ilan arayın
3. Filtreleri kullanın (Uzaktan, Hibrit, vb.)
4. İlan kartında "Detayları Gör" butonuna tıklayın
5. İlan detaylarını inceleyin
6. "Başvur" butonuna tıklayın
7. Motivasyon mektubunuzu yazın (opsiyonel)
8. Başvurunuzu gönderin

### Başvurularınızı Takip Etme
1. Sol menüden "Başvurular" sekmesine gidin
2. Başvuru durumlarını görün:
   - ⏱️ **Değerlendiriliyor:** İnceleme aşamasında
   - 💬 **Görüşme:** Görüşme tarihi belirlendi
   - ✅ **Kabul Edildi:** Başvurunuz kabul edildi
   - ❌ **Reddedildi:** Başvurunuz reddedildi

### Favorilere Ekleme
1. İş ilanı kartında kalp ikonuna tıklayın
2. Sol menüden "Favoriler > İş ilanları" sekmesinden görün

---

## 🏢 Şirket Kullanımı

### Şirket Kaydı
1. Ana sayfada "ŞİRKETLER İÇİN" sekmesini seçin
2. Şirket bilgilerini girin
3. "Şimdi ücretsiz kaydol" butonuna tıklayın

### İş İlanı Ekleme
1. Dashboard'a gidin
2. "Yeni İlan Ekle" butonuna tıklayın
3. İlan bilgilerini doldurun:
   - İş başlığı
   - Açıklama
   - Gereksinimler
   - Lokasyon
   - Çalışma tipi (Tam zamanlı, Yarı zamanlı)
   - Çalışma şekli (Uzaktan, Ofis, Hibrit)
   - Maaş aralığı
4. "Yayınla" butonuna tıklayın

### Başvuruları İnceleme
1. "Başvurular" sekmesine gidin
2. Başvuran adayın CV'sini inceleyin
3. Durum güncelleyin:
   - Değerlendiriliyor
   - Görüşmeye çağır
   - Kabul et
   - Reddet

### Görüşme Tarihi Belirleme
1. Başvuru detayına gidin
2. "Görüşme tarihi belirle" butonuna tıklayın
3. Tarih ve saat seçin
4. Notlar ekleyin
5. Kaydedin

---

## ⚙️ Admin Paneli Kullanımı

### Admin Girişi
1. `http://localhost:3000/admin/login` adresine gidin
2. Admin e-posta ve şifrenizi girin
3. "Giriş Yap" butonuna tıklayın

### Dashboard Özellikleri
- **İstatistikler:**
  - Toplam kullanıcı sayısı
  - Toplam şirket sayısı
  - Aktif ilan sayısı
  - Toplam başvuru sayısı
  - Aylık grafikler

- **Son Başvurular:** En son gelen başvuruları görün
- **Hızlı İşlemler:** 
  - Yeni ilan ekle
  - Kullanıcıları yönet
  - Şirket ekle
  - Raporları görüntüle

### Kullanıcı Yönetimi
1. Sol menüden "Kullanıcılar" sekmesine gidin
2. Tüm kullanıcıları listeleyin
3. Arama yapın
4. Rol ve duruma göre filtreleyin
5. Kullanıcı işlemleri:
   - 👁️ Görüntüle
   - ✏️ Düzenle
   - 🗑️ Sil

### Şirket Yönetimi
1. Sol menüden "Şirketler" sekmesine gidin
2. Şirketleri listeleyin
3. Yeni şirket ekleyin
4. Şirket bilgilerini düzenleyin
5. Şirket ilanlarını görün

### İlan Yönetimi
1. Sol menüden "İş İlanları" sekmesine gidin
2. Tüm ilanları listeleyin
3. İlan durumunu değiştirin (Aktif/Pasif)
4. İlan düzenleyin veya silin
5. İlan istatistiklerini görün

### Başvuru Yönetimi
1. Sol menüden "Başvurular" sekmesine gidin
2. Tüm başvuruları listeleyin
3. Duruma göre filtreleyin
4. Başvuru detaylarını görün
5. Eşleşme raporlarını oluşturun

---

## ✨ Özellikler

### Kullanıcı Özellikleri
- ✅ Modern ve kullanıcı dostu arayüz
- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Detaylı profil oluşturma
- ✅ CV yükleme
- ✅ İş deneyimi ekleme
- ✅ Eğitim bilgileri
- ✅ Sertifika ekleme
- ✅ Dil becerileri
- ✅ İlan arama ve filtreleme
- ✅ Favorilere ekleme
- ✅ Başvuru takibi
- ✅ Görüşme takvimi

### Şirket Özellikleri
- ✅ Şirket profili oluşturma
- ✅ İlan ekleme/düzenleme/silme
- ✅ Başvuru yönetimi
- ✅ Aday filtreleme
- ✅ Görüşme planlama
- ✅ İlan istatistikleri

### Admin Özellikleri
- ✅ Kapsamlı dashboard
- ✅ Kullanıcı yönetimi
- ✅ Şirket yönetimi
- ✅ İlan yönetimi
- ✅ Başvuru yönetimi
- ✅ İstatistikler ve raporlar
- ✅ Sistem ayarları

---

## 🔧 Sorun Giderme

### Port Zaten Kullanımda
```bash
# 3000 portu zaten kullanılıyorsa başka port kullanın
PORT=3001 npm run dev
```

### Veritabanı Hatası
```bash
# Veritabanını sıfırlayın
npx prisma db push --force-reset

# Prisma client'ı yeniden oluşturun
npx prisma generate
```

### Modül Bulunamadı Hatası
```bash
# node_modules ve lock dosyalarını silin
rm -rf node_modules package-lock.json

# Yeniden yükleyin
npm install
```

### Build Hatası
```bash
# Cache'i temizleyin
rm -rf .next

# Yeniden build alın
npm run build
```

### Prisma Studio Açma
```bash
# Veritabanını görsel olarak yönetin
npx prisma studio
```

---

## 📊 Veritabanı Yönetimi

### Prisma Studio Kullanımı
```bash
npx prisma studio
```
Tarayıcıda `http://localhost:5555` açılır ve veritabanınızı görsel olarak yönetebilirsiniz.

### Migration Oluşturma
```bash
npx prisma migrate dev --name init
```

### Production Veritabanı
Production ortamında PostgreSQL kullanmanız önerilir:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/talendox"
```

---

## 🚀 Production'a Alma

### Build Oluşturma
```bash
npm run build
```

### Production Sunucu Başlatma
```bash
npm start
```

### Vercel'e Deploy
```bash
# Vercel CLI yükleyin
npm i -g vercel

# Deploy edin
vercel
```

---

## 📞 Destek

Sorunuz veya sorununuz mu var?

- 📧 Email: support@talendox.com
- 🌐 Website: https://talendox.com
- 📱 Telefon: +90 XXX XXX XX XX

---

## 📝 Notlar

- **Demo Amaçlı:** Bu proje demo amaçlıdır
- **Güvenlik:** Production'da authentication ve authorization ekleyin
- **Veritabanı:** Production'da PostgreSQL kullanın
- **Email:** SMTP ayarlarını yapılandırın
- **File Upload:** Dosya yükleme için cloud storage kullanın
- **Performans:** Production build öncesi optimizasyon yapın

---

**İyi Çalışmalar! 🎉**
