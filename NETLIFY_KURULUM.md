# 🚀 NETLIFY'A DEPLOY - ADIM ADIM

## ⚡ 5 DAKİKADA YAYINDA!

---

## 📦 **ADIM 1: YENİ ZIP İNDİR**

Netlify için özel hazırlanmış yeni ZIP'i indir:
- `netlify.toml` eklendi
- `next.config.js` güncellendi
- Netlify için optimize edildi

---

## 🌐 **ADIM 2: NETLIFY'A YÜKLE**

### **Yöntem A: Sürükle-Bırak (EN KOLAY)**

1. ZIP'i extract et
2. `job-portal` klasörünü Netlify'daki kutucuğa sürükle
3. Bırak!
4. 2-3 dakika bekle
5. ✅ Site yayında!

### **Yöntem B: Browse Upload**

1. "browse to upload" tıkla
2. `job-portal` klasörünü seç
3. Yükle
4. Bekle
5. ✅ Hazır!

---

## ⚙️ **ADIM 3: VERİTABANI AYARLARI**

Netlify'da ücretsiz veritabanı yok. İki seçenek:

### **Seçenek 1: Supabase (Ücretsiz PostgreSQL)**

1. https://supabase.com git
2. "New Project" oluştur
3. Database connection string'i kopyala
4. Netlify → Site Settings → Environment Variables:

```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.xxx.supabase.co:5432/postgres
NEXT_PUBLIC_APP_URL=https://your-site.netlify.app
NEXTAUTH_URL=https://your-site.netlify.app
NEXTAUTH_SECRET=random-secret-123456789
```

### **Seçenek 2: Neon (Ücretsiz PostgreSQL)**

1. https://neon.tech git
2. Project oluştur
3. Connection string kopyala
4. Netlify environment variables'a ekle

---

## 🔧 **ADIM 4: ENVIRONMENT VARIABLES**

Netlify'da:
1. Site Settings
2. Build & deploy
3. Environment variables
4. Add variable:

```
DATABASE_URL → postgresql://...
NEXT_PUBLIC_APP_URL → https://your-site.netlify.app
NEXTAUTH_URL → https://your-site.netlify.app
NEXTAUTH_SECRET → random-gizli-anahtar-123
```

5. Redeploy site

---

## 🎯 **ADIM 5: VERİTABANINI HAZIRLA**

Lokal bilgisayarında:

```bash
# 1. Klasöre git
cd job-portal

# 2. .env oluştur (Supabase/Neon bilgileriyle)
DATABASE_URL="postgresql://..."

# 3. Prisma ile veritabanını hazırla
npx prisma generate
npx prisma db push
```

---

## ✅ **TAMAMLANDI!**

Siteniz yayında:
```
https://your-site-name.netlify.app
```

---

## 🎨 **BONUS: CUSTOM DOMAIN**

1. Netlify → Domain settings
2. Add custom domain
3. DNS ayarlarını yap
4. ✅ Kendi domain'iniz!

---

## 🆘 **SORUN GİDERME**

### Deploy Başarısız:

1. Build logs'u kontrol et
2. Environment variables doğru mu?
3. `netlify.toml` dosyası var mı?

### Sayfa Açılmıyor:

1. Environment variables eklenmiş mi?
2. Site redeploy edilmiş mi?
3. Database bağlantısı çalışıyor mu?

### Database Hatası:

```bash
# Lokal test et:
npx prisma db push
```

Hata veriyorsa database bilgileri yanlış.

---

## 💡 **NETLIFY vs cPANEL**

| Özellik | Netlify | cPanel |
|---------|---------|--------|
| Kurulum | ⭐⭐⭐⭐⭐ Çok Kolay | ⭐⭐⭐ Orta |
| Hız | ⚡ Çok Hızlı | 🐢 Yavaş |
| SSL | ✅ Otomatik | ⚠️ Manuel |
| Maliyet | 💚 Ücretsiz | 💰 Ücretli |
| Node.js | ✅ Var | ⚠️ Değişken |

---

## 🚀 **HIZLI BAŞLANGIÇ**

```bash
# 1. Supabase'de database oluştur
# 2. Connection string'i al
# 3. Lokal:
cd job-portal
npm install
npx prisma generate
DATABASE_URL="postgresql://..." npx prisma db push

# 4. Netlify'a job-portal klasörünü yükle
# 5. Environment variables ekle
# 6. Redeploy
# 7. ✅ Hazır!
```

---

**Netlify çok daha kolay! 🎉**
