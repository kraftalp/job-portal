# 🎉 WORDPRESS TARZI OTOMATIK KURULUM

## 🚀 ÜÇ FARKLI KURULUM YÖNTEMİ

Artık Talendox'u WordPress gibi kolayca kurabilirsiniz!

---

## 📋 **YÖNTEM 1: WEB ARAYÜZÜ İLE (EN KOLAY) ⭐**

### WordPress gibi tarayıcıdan kurulum

**Adımlar:**

1. **Dosyaları Sunucuya Yükleyin:**
   - ZIP'i cPanel File Manager'a yükleyin
   - Extract edin
   - `job-portal` klasörüne girin

2. **Tarayıcıdan Açın:**
   ```
   http://yourdomain.com/install.php
   ```

3. **4 Adımlı Kurulum Sihirbazı:**
   
   **ADIM 1: Sistem Kontrolü**
   - Node.js ✓
   - npm ✓
   - Yazma izinleri ✓
   - Disk alanı ✓
   
   **ADIM 2: Veritabanı**
   - Veritabanı tipini seçin (PostgreSQL/MySQL/SQLite)
   - Bağlantı bilgilerini girin
   - "Bağlantıyı Test Et" ile kontrol edin
   
   **ADIM 3: Site Ayarları**
   - Site URL'inizi girin
   - Site başlığını girin
   
   **ADIM 4: Kurulum**
   - Otomatik kurulum başlar
   - İlerlemeyi canlı izleyin
   - "Siteye Git" ile tamamlayın!

4. **Tamamlandı! 🎉**
   - `install.php` otomatik silinir
   - Siteniz hazır!

---

## 📋 **YÖNTEM 2: TERMINAL SCRIPTI (HİZLI)**

### Tek komutla otomatik kurulum

```bash
# 1. Proje klasörüne gidin
cd job-portal

# 2. Kurulum scriptini çalıştırın
bash install.sh
```

**Script Özellikleri:**
- ✅ Renkli ve interaktif arayüz
- ✅ Sistem gereksinimlerini kontrol eder
- ✅ Veritabanı bilgilerini sorar
- ✅ Otomatik .env oluşturur
- ✅ Bağımlılıkları yükler
- ✅ Veritabanını hazırlar
- ✅ Production build alır

**Ekran Görüntüsü:**
```
╔════════════════════════════════════════════════════════════╗
║   ████████╗ █████╗ ██╗     ███████╗███╗   ██╗██████╗      ║
║   ╚══██╔══╝██╔══██╗██║     ██╔════╝████╗  ██║██╔══██╗     ║
║      ██║   ███████║██║     █████╗  ██╔██╗ ██║██║  ██║     ║
║      ██║   ██╔══██║██║     ██╔══╝  ██║╚██╗██║██║  ██║     ║
║      ██║   ██║  ██║███████╗███████╗██║ ╚████║██████╔╝     ║
╚════════════════════════════════════════════════════════════╝

[1/6] Sistem Gereksinimleri Kontrol Ediliyor...
Node.js kontrolü... ✓ v18.17.0
npm kontrolü... ✓ 9.6.7

[2/6] Veritabanı Yapılandırması
Hangi veritabanını kullanmak istersiniz?
  1) PostgreSQL (Önerilen)
  2) MySQL
  3) SQLite
```

---

## 📋 **YÖNTEM 3: MANUEL KURULUM**

### Geleneksel yöntem (İsteğe bağlı)

Hala eski usul yapabilirsiniz:

```bash
cd job-portal
npm install
npx prisma generate
npx prisma db push
npm run build
npm start
```

---

## 🎯 **KURULUM KARŞILAŞTIRMASI**

| Özellik | Web Arayüzü | Terminal Script | Manuel |
|---------|-------------|-----------------|--------|
| Kolaylık | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Hız | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Görsel | ✅ Evet | ✅ Evet | ❌ Hayır |
| Teknik Bilgi | ❌ Gerekli Değil | ⚠️ Biraz | ✅ Gerekli |
| WordPress Benzeri | ✅ Evet | ❌ Hayır | ❌ Hayır |

---

## 💡 **WEB ARAYÜZÜ DETAYLARI**

### Özellikler:
- 🎨 Modern ve kullanıcı dostu tasarım
- 📊 Adım adım ilerleme göstergesi
- ✅ Gerçek zamanlı sistem kontrolü
- 🔌 Veritabanı bağlantı testi
- 📝 Canlı kurulum log'ları
- 🔐 Otomatik güvenlik anahtarı oluşturma
- 🗑️ Kurulum sonrası otomatik temizlik

### Güvenlik:
- ✅ Kurulum tamamlandıktan sonra `install.php` otomatik silinir
- ✅ `.env` dosyası güvenli şekilde oluşturulur
- ✅ Random `NEXTAUTH_SECRET` üretilir

### Sistem Gereksinimleri:
Web arayüzü bunları otomatik kontrol eder:
- Node.js 18+
- npm
- Yazma izinleri
- Disk alanı (500MB+)

---

## 🛠️ **KURULUM SONRASI**

### 1. Siteyi Açın
```
http://yourdomain.com
```

### 2. Admin Paneline Giriş
```
http://yourdomain.com/admin/login
```

### 3. İlk Ayarlar
- [ ] Admin hesabı oluşturun
- [ ] Test şirket kaydı yapın
- [ ] Örnek ilan ekleyin
- [ ] SSL sertifikasını aktif edin

---

## 🔧 **SORUN GİDERME**

### Web Arayüzü Açılmıyor

**Çözüm 1:** PHP versiyonu
```bash
php -v  # 7.4+ olmalı
```

**Çözüm 2:** Apache .htaccess
```apache
<Files "install.php">
    Require all granted
</Files>
```

### Terminal Script Çalışmıyor

**Çözüm:** Execute permission
```bash
chmod +x install.sh
bash install.sh
```

### Veritabanı Bağlantı Hatası

1. Veritabanının oluşturulduğundan emin olun
2. Kullanıcı izinlerini kontrol edin
3. Firewall ayarlarını kontrol edin

---

## 📞 **YARDIM**

Kurulum sırasında sorun yaşarsanız:

1. **Log Dosyalarını Kontrol Edin:**
   ```bash
   cat /var/log/nginx/error.log
   tail -f ~/job-portal/passenger.log
   ```

2. **Dokümantasyona Bakın:**
   - README.md
   - KURULUM.md
   - CPANEL_KURULUM.md

3. **Manuel Kurulum Deneyin:**
   - KURULUM.md dosyasındaki adımları takip edin

---

## 🎉 **SONUÇ**

Artık Talendox'u **3 farklı yöntemle** kurabilirsiniz:

1. **Web Arayüzü** - WordPress gibi, en kolay
2. **Terminal Script** - Hızlı ve otomatik
3. **Manuel** - Tam kontrol

Hepsinde de sonuç aynı: **Profesyonel bir iş arama platformu!**

---

## 📦 **KURULUM DOSYALARI**

Proje içinde:
- `install.php` - Web kurulum arayüzü
- `install.sh` - Terminal kurulum scripti
- `server.js` - cPanel için sunucu dosyası
- `.env.example` - Örnek yapılandırma

---

**İyi Kurulumlar! 🚀**

Not: Kurulum tamamlandıktan sonra `install.php` dosyası güvenlik için otomatik silinir.
