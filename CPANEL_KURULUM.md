# 🚀 cPANEL KURULUM KILAVUZU - TALENDOX

## ÖNEMLİ: BAŞLAMADAN ÖNCE

cPanel hosting'inizde şunların olması gerekiyor:
- ✅ Node.js desteği (18.x veya üzeri)
- ✅ SSH/Terminal erişimi
- ✅ En az 512MB RAM
- ✅ PostgreSQL veya MySQL veritabanı (SQLite production için önerilmez)

---

## ADIM 1: VERİTABANI HAZIRLIĞI

### PostgreSQL Kullanıyorsanız:

1. cPanel'de **PostgreSQL Databases** bölümüne gidin
2. Yeni veritabanı oluşturun: `talendox_db`
3. Veritabanı kullanıcısı oluşturun: `talendox_user`
4. Kullanıcıya tüm yetkileri verin
5. Bağlantı bilgilerini not alın

### MySQL Kullanıyorsanız:

1. cPanel'de **MySQL Databases** bölümüne gidin
2. Yeni veritabanı oluşturun: `talendox_db`
3. Veritabanı kullanıcısı oluşturun: `talendox_user`
4. Kullanıcıya tüm yetkileri verin

---

## ADIM 2: DOSYALARI YÜKLEME

### Yöntem A: File Manager ile (KOLAY)

1. cPanel'de **File Manager** açın
2. `public_html` klasörüne gidin (veya subdomain klasörüne)
3. **Upload** butonuna tıklayın
4. `talendox-job-portal.zip` dosyasını yükleyin
5. ZIP dosyasına sağ tıklayın → **Extract**
6. `job-portal` klasörüne girin

### Yöntem B: FTP ile

1. FileZilla gibi bir FTP istemcisi açın
2. cPanel FTP bilgilerinizle bağlanın
3. `public_html/job-portal` klasörü oluşturun
4. Tüm proje dosyalarını yükleyin

---

## ADIM 3: ENVIRONMENT VARIABLES (.env)

File Manager ile `.env` dosyası oluşturun:

```env
# Production Modu
NODE_ENV=production

# Veritabanı (PostgreSQL)
DATABASE_URL="postgresql://talendox_user:SIFRENIZ@localhost:5432/talendox_db"

# VEYA MySQL için:
# DATABASE_URL="mysql://talendox_user:SIFRENIZ@localhost:3306/talendox_db"

# Uygulama URL'i
NEXT_PUBLIC_APP_URL="https://yourdomain.com"

# NextAuth (Güvenlik için random bir string)
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="bu-kismi-random-bir-string-ile-degistirin-asdasd123asd"
```

**ÖNEMLİ:** `.env` dosyasını sunucuda oluşturun, ZIP'e eklemeyin!

---

## ADIM 4: PRISMA SCHEMA GÜNCELLEMESİ

`prisma/schema.prisma` dosyasını düzenleyin:

**PostgreSQL için:**
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**MySQL için:**
```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

---

## ADIM 5: NODE.JS UYGULAMASI OLUŞTURMA

1. cPanel'de **Setup Node.js App** bölümüne gidin
2. **Create Application** tıklayın
3. Ayarları yapın:

```
Node.js version: 18.x (veya en yeni)
Application mode: Production
Application root: public_html/job-portal
Application URL: yourdomain.com
Application startup file: server.js
```

4. **Create** butonuna tıklayın
5. Açılan sayfada **Run NPM Install** butonuna tıklayın

---

## ADIM 6: TERMINAL KOMUTLARI

cPanel'de **Terminal** açın (veya SSH ile bağlanın):

```bash
# 1. Proje klasörüne gidin
cd ~/public_html/job-portal

# 2. Environment variables'ı yükleyin
source ~/nodevenv/public_html/job-portal/18/bin/activate

# 3. Bağımlılıkları yükleyin (zaten Run NPM Install yaptıysanız atlayın)
npm install

# 4. Prisma'yı hazırlayın
npx prisma generate

# 5. Veritabanı tablolarını oluşturun
npx prisma db push

# 6. Production build alın
npm run build

# 7. Uygulamayı başlatın
npm start
```

---

## ADIM 7: UYGULAMA YÖNETİMİ

### Uygulamayı Başlatma:
```bash
cd ~/public_html/job-portal
npm start
```

### Uygulamayı Durdurma:
```bash
pkill -f "node.*server.js"
```

### Uygulamayı Yeniden Başlatma:
cPanel → Setup Node.js App → Restart butonuna tıklayın

---

## ADIM 8: DOMAIN AYARLARI

### Ana Domain İçin:
- Zaten `public_html` içindeyseniz, otomatik çalışacak

### Subdomain İçin:
1. cPanel → **Subdomains**
2. `jobs.yourdomain.com` gibi subdomain oluşturun
3. Document Root: `/home/username/public_html/job-portal`
4. Node.js App ayarlarında URL'i güncelleyin

---

## ADIM 9: .HTACCESS AYARLARI (GEREKİYORSA)

`public_html` klasöründe `.htaccess` dosyası:

```apache
# Node.js uygulamasına yönlendir
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:PORT_NUMARASI/$1 [P,L]

# HTTPS zorla
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

**PORT_NUMARASI:** Node.js uygulamanızın çalıştığı port (genelde 3000)

---

## ADIM 10: SSL SERTİFİKASI

1. cPanel → **SSL/TLS Status**
2. Domain'inizi seçin
3. **Run AutoSSL** tıklayın
4. Veya **Let's Encrypt** kullanın

---

## SORUN GİDERME

### Uygulama Çalışmıyor:

```bash
# Log'ları kontrol edin
cd ~/public_html/job-portal
cat passenger.log
# veya
cat logs/error.log
```

### Port Hatası:

`.env` dosyasında PORT ekleyin:
```env
PORT=3000
```

### Veritabanı Bağlantı Hatası:

```bash
# Bağlantıyı test edin
npx prisma db push
```

Hata verirse:
- Database kullanıcı adı/şifre doğru mu?
- Database oluşturuldu mu?
- Firewall port'u açık mı?

### Memory Hatası:

`package.json`'da build scriptini güncelleyin:
```json
"scripts": {
  "build": "NODE_OPTIONS='--max-old-space-size=2048' next build"
}
```

### Permission Hatası:

```bash
# Dosya izinlerini düzeltin
cd ~/public_html
chmod -R 755 job-portal
```

---

## PERFORMANS İYİLEŞTİRMELERİ

### 1. PM2 Kullanın (Önerilir):

```bash
# PM2 yükleyin
npm install -g pm2

# Uygulamayı PM2 ile başlatın
pm2 start npm --name "talendox" -- start
pm2 save
pm2 startup

# PM2 komutları
pm2 list          # Çalışan uygulamaları listele
pm2 restart talendox  # Yeniden başlat
pm2 stop talendox     # Durdur
pm2 logs talendox     # Log'ları göster
```

### 2. Caching:

`.htaccess` ile browser caching:
```apache
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access 1 year"
ExpiresByType image/jpeg "access 1 year"
ExpiresByType image/gif "access 1 year"
ExpiresByType image/png "access 1 year"
ExpiresByType text/css "access 1 month"
ExpiresByType application/javascript "access 1 month"
</IfModule>
```

### 3. Compression:

```apache
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

---

## GÜVENLİK ÖNLEMLERİ

1. **Environment Variables'ı Sakla:**
   - `.env` dosyasını `.gitignore`'a ekle
   - cPanel File Manager'da gizli dosyaları göster

2. **Firewall:**
   - Sadece 80 (HTTP) ve 443 (HTTPS) portlarını aç
   - Node.js portunu (3000) dışarıya kapatın

3. **Database:**
   - Güçlü şifre kullanın
   - Sadece localhost'tan erişime izin verin

4. **Regular Updates:**
   ```bash
   npm update
   npm audit fix
   ```

---

## YEDEKLEME

### Otomatik Yedekleme Scripti:

```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d)
BACKUP_DIR=~/backups/talendox

mkdir -p $BACKUP_DIR

# Dosyaları yedekle
tar -czf $BACKUP_DIR/files_$DATE.tar.gz ~/public_html/job-portal

# Database yedekle (PostgreSQL)
pg_dump talendox_db > $BACKUP_DIR/db_$DATE.sql

# Eski yedekleri sil (30 günden eski)
find $BACKUP_DIR -type f -mtime +30 -delete

echo "Backup completed: $DATE"
```

Cron job ekleyin (cPanel → Cron Jobs):
```
0 2 * * * /home/username/backup.sh
```

---

## BAŞARILI KURULUM KONTROLÜ

1. Tarayıcıda `https://yourdomain.com` açın
2. Giriş sayfası görünmeli
3. Admin paneline giriş yapın: `https://yourdomain.com/admin/login`
4. Terminal'de log'ları kontrol edin

---

## DESTEK

Sorun yaşarsanız:

1. **Log dosyalarını kontrol edin:**
   ```bash
   cd ~/public_html/job-portal
   cat passenger.log
   tail -f logs/error.log
   ```

2. **cPanel Error Log:**
   cPanel → Errors → View Last 300 Errors

3. **Node.js App Restart:**
   cPanel → Setup Node.js App → Restart

---

## SONUÇ

Kurulum tamamlandı! 🎉

**Sıradaki Adımlar:**
- [ ] Admin hesabı oluşturun
- [ ] İlk şirket kaydını yapın
- [ ] Test ilanı oluşturun
- [ ] Email ayarlarını yapılandırın
- [ ] Domain SSL'ini aktif edin
- [ ] Analytics ekleyin (Google Analytics)
- [ ] Backup sistemini kurun

**Faydalı Linkler:**
- Ana Sayfa: https://yourdomain.com
- Admin Panel: https://yourdomain.com/admin/login
- cPanel: https://yourdomain.com:2083

---

**Not:** Her shared hosting farklı olabilir. Hosting sağlayıcınızın Node.js dokümantasyonunu da kontrol edin.

**İyi Çalışmalar! 🚀**
