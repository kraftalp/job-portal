# 🚀 CPANEL KURULUM - BASİT KILAVUZ

## ⚡ 7 ADIMDA KURULUM

---

## 📋 **ADIM 1: VERİTABANI OLUŞTUR**

cPanel → **MySQL Databases** (veya PostgreSQL)

**Yeni Veritabanı:**
- Database adı: `talendox_db`

**Yeni Kullanıcı:**
- Kullanıcı: `talendox_user`  
- Şifre: `güçlüşifre123` (değiştir!)

**Yetki Ver:**
- User'ı database'e ekle
- ALL PRIVILEGES seç

✅ **Database bilgilerini not et!**

---

## 📦 **ADIM 2: DOSYALARI YÜKLE**

cPanel → **File Manager** → `public_html`

1. ZIP dosyasını **Upload** et
2. Sağ tıkla → **Extract**
3. `job-portal` klasörüne gir

✅ **Dosyalar hazır!**

---

## ⚙️ **ADIM 3: NODE.JS APP OLUŞTUR**

cPanel → **Setup Node.js App** → **Create Application**

```
Node.js version: 18.x
Application mode: Production
Application root: public_html/job-portal
Application URL: yourdomain.com
Application startup file: server.js
```

**Create** → **Run NPM Install** (2-3 dk bekle)

✅ **Node.js hazır!**

---

## 📝 **ADIM 4: .env DOSYASI OLUŞTUR**

File Manager → `job-portal` klasöründe → **+ File** → `.env`

**MySQL için:**
```env
NODE_ENV=production
DATABASE_URL="mysql://talendox_user:SIFRENIZ@localhost:3306/talendox_db"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="random-buraya-bir-sey-yaz-123456789"
```

**PostgreSQL için:**
```env
NODE_ENV=production
DATABASE_URL="postgresql://talendox_user:SIFRENIZ@localhost:5432/talendox_db"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="random-buraya-bir-sey-yaz-123456789"
```

**ÖNEMLİ:** `SIFRENIZ` ve `yourdomain.com` değiştir!

**Save Changes**

✅ **Ayarlar tamam!**

---

## 🔧 **ADIM 5: PRISMA SCHEMA DÜZENLE**

File Manager → `prisma/schema.prisma` aç

**Şu satırı bul:**
```prisma
provider = "sqlite"
```

**MySQL kullanıyorsan:**
```prisma
provider = "mysql"
```

**PostgreSQL kullanıyorsan:**
```prisma
provider = "postgresql"
```

**Save Changes**

✅ **Database tipi ayarlandı!**

---

## 💻 **ADIM 6: TERMİNAL KOMUTLARI**

cPanel → **Terminal**

**Komutları SIRAYLA çalıştır:**

```bash
# 1. Klasöre git
cd ~/public_html/job-portal

# 2. Node.js aktif et (cPanel özel)
source ~/nodevenv/public_html/job-portal/18/bin/activate

# 3. Prisma hazırla
npx prisma generate

# 4. Database tablolarını oluştur
npx prisma db push

# 5. Build al
npm run build

# 6. Başlat
npm start
```

✅ **Kurulum tamamlandı!**

---

## 🌐 **ADIM 7: SİTEYİ AÇ**

Tarayıcıda:
```
https://yourdomain.com
```

Admin paneli:
```
https://yourdomain.com/admin/login
```

🎉 **BAŞARILI!**

---

## 🆘 **SORUN GİDERME**

### Hata: "Cannot connect to database"
✅ `.env` dosyasındaki database bilgilerini kontrol et
✅ Database ve user oluşturuldu mu kontrol et

### Hata: "Module not found"
```bash
cd ~/public_html/job-portal
npm install
```

### Hata: "Port already in use"
Node.js App'i cPanel'den restart et

### Uygulama durdu
```bash
cd ~/public_html/job-portal
npm start
```

---

## 📞 **YARDIM**

Log kontrolü:
```bash
cd ~/public_html/job-portal
tail -f passenger.log
```

cPanel Error Log:
cPanel → Errors → Last 300 errors

---

## 🎯 **ÖNEMLİ NOTLAR**

1. ✅ **Database** mutlaka oluştur (Adım 1)
2. ✅ **Run NPM Install** unutma (Adım 3)
3. ✅ **Terminal komutlarını sırayla** çalıştır (Adım 6)
4. ✅ **Her komut bitsin** sonra diğerine geç
5. ✅ **.env şifrelerini** doğru yaz

---

## 🔄 **RESTART İÇİN**

cPanel → Setup Node.js App → Restart butonu

VEYA Terminal:
```bash
cd ~/public_html/job-portal
npm start
```

---

**İyi Çalışmalar! 🚀**
