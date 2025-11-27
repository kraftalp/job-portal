#!/bin/bash

echo "🚀 Talendox Database Kurulumu Başlıyor..."
echo ""

# 1. Node modules yükle
echo "📦 Node modules yükleniyor..."
npm install

echo ""
echo "✅ Node modules yüklendi!"
echo ""

# 2. Prisma client oluştur
echo "🔧 Prisma client oluşturuluyor..."
npx prisma generate

echo ""
echo "✅ Prisma client oluşturuldu!"
echo ""

# 3. Database tablolarını oluştur
echo "💾 Database tabloları oluşturuluyor..."
npx prisma db push

echo ""
echo "✅ Database tabloları oluşturuldu!"
echo ""

echo "🎉 Kurulum tamamlandı!"
echo ""
echo "Şimdi siteyi aç: https://jobportal-one-psi.vercel.app"
echo "Admin paneli: https://jobportal-one-psi.vercel.app/admin/login"
