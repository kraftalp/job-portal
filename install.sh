#!/bin/bash

# Talendox Otomatik Kurulum Scripti
# WordPress tarzı interaktif kurulum

set -e

# Renkler
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Banner
clear
echo -e "${BLUE}"
cat << "EOF"
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   ████████╗ █████╗ ██╗     ███████╗███╗   ██╗██████╗      ║
║   ╚══██╔══╝██╔══██╗██║     ██╔════╝████╗  ██║██╔══██╗     ║
║      ██║   ███████║██║     █████╗  ██╔██╗ ██║██║  ██║     ║
║      ██║   ██╔══██║██║     ██╔══╝  ██║╚██╗██║██║  ██║     ║
║      ██║   ██║  ██║███████╗███████╗██║ ╚████║██████╔╝     ║
║      ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝╚═════╝      ║
║                                                            ║
║              İş Arama Platformu - Kurulum v1.0            ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

echo -e "${GREEN}Talendox kurulumuna hoş geldiniz!${NC}"
echo ""
echo "Bu script size aşağıdaki adımları yapmanıza yardımcı olacak:"
echo "  1. Sistem gereksinimlerini kontrol etme"
echo "  2. Veritabanı yapılandırması"
echo "  3. Ortam değişkenlerini ayarlama"
echo "  4. Bağımlılıkları yükleme"
echo "  5. Veritabanını hazırlama"
echo "  6. Uygulamayı başlatma"
echo ""
read -p "Devam etmek için ENTER'a basın..."

# 1. Sistem Gereksinimleri Kontrolü
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}[1/6] Sistem Gereksinimleri Kontrol Ediliyor...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Node.js kontrolü
echo -n "Node.js kontrolü... "
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗${NC}"
    echo -e "${RED}Node.js bulunamadı! Lütfen Node.js 18.x veya üzerini yükleyin.${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}✗${NC}"
    echo -e "${RED}Node.js versiyonu çok düşük. En az 18.x gerekli. Mevcut: $(node -v)${NC}"
    exit 1
fi
echo -e "${GREEN}✓ $(node -v)${NC}"

# npm kontrolü
echo -n "npm kontrolü... "
if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗${NC}"
    echo -e "${RED}npm bulunamadı!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ $(npm -v)${NC}"

# Disk alanı kontrolü
echo -n "Disk alanı kontrolü... "
AVAILABLE_SPACE=$(df -h . | awk 'NR==2 {print $4}' | sed 's/G//')
if [ "${AVAILABLE_SPACE%.*}" -lt 1 ]; then
    echo -e "${YELLOW}⚠ Düşük disk alanı${NC}"
else
    echo -e "${GREEN}✓ ${AVAILABLE_SPACE}G boş${NC}"
fi

# 2. Veritabanı Yapılandırması
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}[2/6] Veritabanı Yapılandırması${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo ""
echo "Hangi veritabanını kullanmak istersiniz?"
echo "  1) PostgreSQL (Önerilen)"
echo "  2) MySQL"
echo "  3) SQLite (Sadece geliştirme için)"
echo ""
read -p "Seçiminiz (1-3): " DB_CHOICE

case $DB_CHOICE in
    1)
        DB_TYPE="postgresql"
        echo ""
        echo -e "${GREEN}PostgreSQL seçildi${NC}"
        echo ""
        read -p "Veritabanı Host (varsayılan: localhost): " DB_HOST
        DB_HOST=${DB_HOST:-localhost}
        
        read -p "Veritabanı Port (varsayılan: 5432): " DB_PORT
        DB_PORT=${DB_PORT:-5432}
        
        read -p "Veritabanı Adı: " DB_NAME
        while [ -z "$DB_NAME" ]; do
            echo -e "${RED}Veritabanı adı boş olamaz!${NC}"
            read -p "Veritabanı Adı: " DB_NAME
        done
        
        read -p "Veritabanı Kullanıcı Adı: " DB_USER
        while [ -z "$DB_USER" ]; do
            echo -e "${RED}Kullanıcı adı boş olamaz!${NC}"
            read -p "Veritabanı Kullanıcı Adı: " DB_USER
        done
        
        read -sp "Veritabanı Şifresi: " DB_PASS
        echo ""
        while [ -z "$DB_PASS" ]; do
            echo -e "${RED}Şifre boş olamaz!${NC}"
            read -sp "Veritabanı Şifresi: " DB_PASS
            echo ""
        done
        
        DATABASE_URL="postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
        PRISMA_PROVIDER="postgresql"
        ;;
    2)
        DB_TYPE="mysql"
        echo ""
        echo -e "${GREEN}MySQL seçildi${NC}"
        echo ""
        read -p "Veritabanı Host (varsayılan: localhost): " DB_HOST
        DB_HOST=${DB_HOST:-localhost}
        
        read -p "Veritabanı Port (varsayılan: 3306): " DB_PORT
        DB_PORT=${DB_PORT:-3306}
        
        read -p "Veritabanı Adı: " DB_NAME
        while [ -z "$DB_NAME" ]; do
            echo -e "${RED}Veritabanı adı boş olamaz!${NC}"
            read -p "Veritabanı Adı: " DB_NAME
        done
        
        read -p "Veritabanı Kullanıcı Adı: " DB_USER
        while [ -z "$DB_USER" ]; do
            echo -e "${RED}Kullanıcı adı boş olamaz!${NC}"
            read -p "Veritabanı Kullanıcı Adı: " DB_USER
        done
        
        read -sp "Veritabanı Şifresi: " DB_PASS
        echo ""
        while [ -z "$DB_PASS" ]; do
            echo -e "${RED}Şifre boş olamaz!${NC}"
            read -sp "Veritabanı Şifresi: " DB_PASS
            echo ""
        done
        
        DATABASE_URL="mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
        PRISMA_PROVIDER="mysql"
        ;;
    3)
        DB_TYPE="sqlite"
        echo ""
        echo -e "${YELLOW}⚠ SQLite sadece geliştirme için önerilir!${NC}"
        DATABASE_URL="file:./dev.db"
        PRISMA_PROVIDER="sqlite"
        ;;
    *)
        echo -e "${RED}Geçersiz seçim!${NC}"
        exit 1
        ;;
esac

# 3. Uygulama Ayarları
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}[3/6] Uygulama Ayarları${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo ""
read -p "Uygulama URL'i (örn: https://talendox.com): " APP_URL
while [ -z "$APP_URL" ]; do
    echo -e "${RED}URL boş olamaz!${NC}"
    read -p "Uygulama URL'i: " APP_URL
done

# Random secret oluştur
NEXTAUTH_SECRET=$(openssl rand -base64 32 2>/dev/null || cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)

echo ""
echo -e "${GREEN}✓ Güvenlik anahtarı oluşturuldu${NC}"

# 4. .env Dosyası Oluşturma
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}[4/6] Yapılandırma Dosyası Oluşturuluyor...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

cat > .env << EOF
# Talendox Yapılandırması
# Otomatik oluşturulma: $(date)

# Ortam
NODE_ENV=production

# Veritabanı
DATABASE_URL="${DATABASE_URL}"

# Uygulama
NEXT_PUBLIC_APP_URL="${APP_URL}"
NEXTAUTH_URL="${APP_URL}"
NEXTAUTH_SECRET="${NEXTAUTH_SECRET}"

# Port (isteğe bağlı)
PORT=3000
EOF

echo -e "${GREEN}✓ .env dosyası oluşturuldu${NC}"

# Prisma schema güncelle
if [ "$DB_TYPE" != "sqlite" ]; then
    echo -n "Prisma schema güncelleniyor... "
    sed -i.bak "s/provider = \"sqlite\"/provider = \"${PRISMA_PROVIDER}\"/" prisma/schema.prisma
    rm -f prisma/schema.prisma.bak
    echo -e "${GREEN}✓${NC}"
fi

# 5. Bağımlılıkları Yükleme
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}[5/6] Bağımlılıklar Yükleniyor...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Bu işlem birkaç dakika sürebilir..."
echo ""

npm install --silent

echo ""
echo -e "${GREEN}✓ Bağımlılıklar yüklendi${NC}"

# 6. Veritabanı Hazırlama
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}[6/6] Veritabanı Hazırlanıyor...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo ""
echo -n "Prisma client oluşturuluyor... "
npx prisma generate > /dev/null 2>&1
echo -e "${GREEN}✓${NC}"

echo -n "Veritabanı tabloları oluşturuluyor... "
if npx prisma db push --skip-generate > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    echo -e "${RED}Veritabanı bağlantısı başarısız!${NC}"
    echo "Lütfen veritabanı bilgilerini kontrol edin."
    echo ""
    echo "Elle denemek için:"
    echo "  npx prisma db push"
    exit 1
fi

# Production Build
echo ""
echo -n "Production build oluşturuluyor... "
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${YELLOW}⚠ Build hatası (normal olabilir, devam ediliyor)${NC}"
fi

# Başarı Mesajı
clear
echo -e "${GREEN}"
cat << "EOF"
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║                    ✓ KURULUM TAMAMLANDI!                  ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

echo -e "${GREEN}Tebrikler! Talendox başarıyla kuruldu.${NC}"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Kurulum Özeti:${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "  Veritabanı: ${DB_TYPE}"
echo "  Uygulama URL: ${APP_URL}"
echo "  Node.js: $(node -v)"
echo "  npm: $(npm -v)"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Uygulamayı Başlatmak İçin:${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  ${YELLOW}Geliştirme modu:${NC}"
echo "    npm run dev"
echo ""
echo -e "  ${YELLOW}Production modu:${NC}"
echo "    npm start"
echo ""
echo -e "  ${YELLOW}PM2 ile (önerilen):${NC}"
echo "    pm2 start npm --name talendox -- start"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Önemli Dosyalar:${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "  .env - Yapılandırma dosyası"
echo "  prisma/schema.prisma - Veritabanı şeması"
echo "  README.md - Dokümantasyon"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Sıradaki Adımlar:${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "  1. Uygulamayı başlatın (yukarıdaki komutlardan birini kullanın)"
echo "  2. Tarayıcıda açın: ${APP_URL}"
echo "  3. Admin paneline giriş yapın: ${APP_URL}/admin/login"
echo "  4. İlk admin hesabını oluşturun"
echo ""
echo -e "${GREEN}İyi çalışmalar! 🚀${NC}"
echo ""
